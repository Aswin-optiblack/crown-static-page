import { useState, useCallback } from 'react';
import axios from 'axios';
import { CompleteIPData } from '@/utils/ipDetection';
import { API_ENDPOINTS } from '@/config/api';

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

      // Include complete IP data if available
      let requestWithCompleteData = { ...requestData };
      if (completeIPData?.ip) {
        requestWithCompleteData = {
          ...requestData,
          userDetails: completeIPData
        };
      }

      const response = await axios.post<CrownMeResponse>(
        API_ENDPOINTS.CROWN_ME,
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