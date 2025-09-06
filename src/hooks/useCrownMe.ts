import { useState, useCallback } from 'react';
import axios from 'axios';
import { IPLocationResponse } from '@/utils/ipDetection';

interface CrownMeRequest {
  category: string;
  prompt: string;
  userName: string;
  ip?: string;
  location?: {
    country?: string;
    region?: string;
    city?: string;
    latitude?: number;
    longitude?: number;
  };
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

  const sendCrown = useCallback(async (requestData: CrownMeRequest, userLocationData?: IPLocationResponse | null) => {
    try {
      setLoading(true);
      setError(null);
      setSuccess(false);
      
      const apiBaseUrl = 'https://64mnuls3p1.execute-api.us-east-1.amazonaws.com/dev/proxy';
      if (!apiBaseUrl) {
        throw new Error('API base URL not configured');
      }

      // Include IP and location only if BOTH IP and meaningful location data are available
      let requestWithLocationData = { ...requestData };
      
      if (userLocationData?.ip && 
          userLocationData.location && 
          (userLocationData.location.country || userLocationData.location.city)) {
        requestWithLocationData = {
          ...requestData,
          ip: userLocationData.ip,
          location: userLocationData.location
        };
      }
      // If we don't have both IP and location, don't send either

      const response = await axios.post<CrownMeResponse>(
        `${apiBaseUrl}/api/crowns/crown-me`,
        requestWithLocationData,
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