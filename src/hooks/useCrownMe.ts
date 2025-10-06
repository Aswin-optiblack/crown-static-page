import { useState, useCallback } from 'react';
import axios from 'axios';
import { CompleteIPData } from '@/utils/ipDetection';

interface CrownMeRequest {
  category: string;
  prompt: string;
  userName: string;
  userDetails?: CompleteIPData;
}

interface CrownMeResponse {
  message: string;
  status: string;
  statusCode: number;
  success: boolean;
  data?: unknown;
}

export const useCrownMe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendCrown = useCallback(async (requestData: CrownMeRequest, completeIPData?: CompleteIPData | null) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const apiBaseUrl = 'https://api.dev.getcrowned.fun';
      if (!apiBaseUrl) {
        throw new Error('API base URL not configured');
      }

      // Include complete IP data if available
      let requestWithCompleteData = { ...requestData };
      
      if (completeIPData?.ip) {
        requestWithCompleteData = {
          ...requestData,
          userDetails: completeIPData
        };
      }

      const response = await axios.post<CrownMeResponse>(
        `${apiBaseUrl}/api/crowns/crown-me`,
        requestWithCompleteData,
        {
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
      
      if (response.data.success) {
        setSuccess(true);
        return response.data;
      } else {
        throw new Error(response.data.message || 'Failed to send crown');
      }
    } catch (err: unknown) {
      let errorMessage = 'Failed to send crown';
      
      if (axios.isAxiosError(err)) {
        errorMessage = err.response?.data?.message || err.message || 'Failed to send crown';
      } else if (err instanceof Error) {
        errorMessage = err.message;
      }
      
      setError(errorMessage);
      setSuccess(false);
      throw new Error(errorMessage);
    } finally {
      setLoading(false);
    }
  }, []);

  const resetState = useCallback(() => {
    setLoading(false);
    setError(null);
    setSuccess(false);
  }, []);

  return {
    sendCrown,
    loading,
    error,
    success,
    resetState
  };
};