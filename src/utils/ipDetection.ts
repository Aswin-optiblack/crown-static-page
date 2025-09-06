/**
 * Utility functions for detecting user's IP address and location
 */

export interface LocationData {
  country?: string;
  region?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
}

export interface IPLocationResponse {
  ip: string;
  location: LocationData;
}

/**
 * Get user's IP address and location using multiple fallback services
 */
interface IPApiResponse {
  ip: string;
  country_name?: string;
  region?: string;
  city?: string;
  latitude?: number;
  longitude?: number;
}

interface IPGeolocationResponse {
  ip: string;
  country_name?: string;
  state_prov?: string;
  city?: string;
  latitude?: string;
  longitude?: string;
}

export const getUserIPAndLocation = async (): Promise<IPLocationResponse | null> => {
  const ipServices = [
    {
      url: 'https://ipapi.co/json',
      parser: (data: IPApiResponse) => ({
        ip: data.ip,
        location: {
          country: data.country_name,
          region: data.region,
          city: data.city,
          latitude: data.latitude,
          longitude: data.longitude
        }
      })
    },
    {
      url: 'https://api.ipgeolocation.io/ipgeo?apiKey=API_KEY',
      parser: (data: IPGeolocationResponse) => ({
        ip: data.ip,
        location: {
          country: data.country_name,
          region: data.state_prov,
          city: data.city,
          latitude: data.latitude ? parseFloat(data.latitude) : undefined,
          longitude: data.longitude ? parseFloat(data.longitude) : undefined
        }
      })
    }
  ];

  for (const service of ipServices) {
    try {
      // Skip services that require API key if not available
      if (service.url.includes('API_KEY')) {
        continue;
      }

      const response = await fetch(service.url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
        },
      });
      
      if (response.ok) {
        const data = await response.json();
        const parsed = service.parser(data);
        
        // Validate that we have both IP and some location data
        if (parsed.ip && (parsed.location.country || parsed.location.city)) {
          return parsed;
        }
      }
    } catch (error) {
      console.warn(`Failed to get IP and location from ${service.url}:`, error);
      continue;
    }
  }
  
  // If location services fail, try to get just IP as fallback
  try {
    const ipOnlyServices = [
      'https://api.ipify.org?format=json',
      'https://api64.ipify.org?format=json'
    ];
    
    for (const service of ipOnlyServices) {
      try {
        const response = await fetch(service, {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });
        
        if (response.ok) {
          const data = await response.json();
          const ip = data.ip;
          if (ip && typeof ip === 'string') {
            return {
              ip,
              location: {}
            };
          }
        }
      } catch (error) {
        continue;
      }
    }
  } catch (error) {
    console.warn('Failed to get IP as fallback:', error);
  }
  
  return null;
};

/**
 * Get user's IP address and location with error handling
 */
export const getIPAndLocationSafely = async (): Promise<IPLocationResponse | null> => {
  try {
    const result = await getUserIPAndLocation();
    return result;
  } catch (error) {
    console.error('Failed to detect IP address and location:', error);
    return null;
  }
};

/**
 * Legacy function for backward compatibility - gets only IP
 */
export const getIPSafely = async (): Promise<string> => {
  try {
    const result = await getUserIPAndLocation();
    return result?.ip || '';
  } catch (error) {
    console.error('Failed to detect IP address:', error);
    return '';
  }
};