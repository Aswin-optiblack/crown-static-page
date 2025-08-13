import { useState, useCallback } from 'react';
import axios from 'axios';

interface CrownMeRequest {
  category: string;
  prompt: string;
  userName: string;
}

interface CrownMeResponse {
  message: string;
  status: string;
  statusCode: number;
  success: boolean;
  data?: any;
}

export const useCrownMe = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  const sendCrown = useCallback(async (requestData: CrownMeRequest) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;
      if (!apiBaseUrl) {
        throw new Error('API base URL not configured');
      }

      const response = await axios.post<CrownMeResponse>(
        `${apiBaseUrl}/api/crowns/crown-me`,
        requestData,
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
    } catch (err: any) {
      const errorMessage = err.response?.data?.message || err.message || 'Failed to send crown';
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