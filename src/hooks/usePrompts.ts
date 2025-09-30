import { useState, useCallback } from 'react';
import axios from 'axios';

interface Prompt {
  _id: string;
  content: string;
  createdBy: string;
  category: string;
  status: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
}

interface PromptsResponse {
  message: string;
  status: string;
  statusCode: number;
  success: boolean;
  data: {
    prompt: Prompt[];
  };
}

export const usePrompts = () => {
  const [prompts, setPrompts] = useState<Prompt[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState<string>('');
  const [currentPromptIndex, setCurrentPromptIndex] = useState<number>(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const fetchPrompts = useCallback(async (categoryId: string) => {
    if (!categoryId) return;

    try {
      setLoading(true);
      setError(null);
      
      const apiBaseUrl = 'https://api.getcrowned.fun';
      if (!apiBaseUrl) {
        throw new Error('API base URL not configured');
      }

      const response = await axios.get<PromptsResponse>(
        `${apiBaseUrl}/api/prompts/BycategoryId?categoryId=${categoryId}`
      );
      
      if (response.data.success && response.data.data.prompt) {
        const fetchedPrompts = response.data.data.prompt;
        setPrompts(fetchedPrompts);
        
        // Set first prompt as current if available
        if (fetchedPrompts.length > 0) {
          setCurrentPrompt(fetchedPrompts[0].content);
          setCurrentPromptIndex(0);
        } else {
          setCurrentPrompt('No prompts available for this category');
          setCurrentPromptIndex(-1);
        }
      } else {
        throw new Error(response.data.message || 'Failed to fetch prompts');
      }
    } catch (err: unknown) {
      let errorMessage = 'Failed to fetch prompts';
      
      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err.message || 'Failed to fetch prompts';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      setCurrentPrompt('Failed to load prompts');
      console.error('Error fetching prompts:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  const shufflePrompt = useCallback(() => {
    if (prompts.length > 0) {
      let randomIndex;
      
      // Ensure we don't get the same prompt as currently displayed
      if (prompts.length === 1) {
        randomIndex = 0;
      } else {
        do {
          randomIndex = Math.floor(Math.random() * prompts.length);
        } while (randomIndex === currentPromptIndex && prompts.length > 1);
      }
      
      setCurrentPromptIndex(randomIndex);
      setCurrentPrompt(prompts[randomIndex].content);
    }
  }, [prompts, currentPromptIndex]);

  const clearPrompts = useCallback(() => {
    setPrompts([]);
    setCurrentPrompt('');
    setCurrentPromptIndex(-1);
    setError(null);
  }, []);

  const getCurrentPromptId = useCallback(() => {
    if (prompts.length > 0 && currentPromptIndex >= 0) {
      return prompts[currentPromptIndex]._id;
    }
    return '';
  }, [prompts, currentPromptIndex]);

  const setCurrentPromptManually = useCallback((promptId: string, content: string) => {
    const index = prompts.findIndex(prompt => prompt._id === promptId);
    if (index >= 0) {
      setCurrentPromptIndex(index);
      setCurrentPrompt(content);
    }
  }, [prompts]);

  return {
    prompts,
    currentPrompt,
    currentPromptIndex,
    getCurrentPromptId,
    setCurrentPromptManually,
    loading,
    error,
    fetchPrompts,
    shufflePrompt,
    clearPrompts
  };
};