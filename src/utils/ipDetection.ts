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

export interface CompleteIPData {
  ip: string;
  network?: string;
  version?: string;
  city?: string;
  region?: string;
  region_code?: string;
  country?: string;
  country_name?: string;
  country_code?: string;
  country_code_iso3?: string;
  country_capital?: string;
  country_tld?: string;
  continent_code?: string;
  in_eu?: boolean;
  postal?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  utc_offset?: string;
  country_calling_code?: string;
  currency?: string;
  currency_name?: string;
  languages?: string;
  country_area?: number;
  country_population?: number;
  asn?: string;
  org?: string;
  // User's current local time information
  user_current_time?: string;
  user_current_date?: string;
  user_timestamp_iso?: string;
  user_timestamp_unix?: number;
}

/**
 * Get user's IP address and location using multiple fallback services
 */
interface IPApiResponse {
  ip: string;
  network?: string;
  version?: string;
  city?: string;
  region?: string;
  region_code?: string;
  country?: string;
  country_name?: string;
  country_code?: string;
  country_code_iso3?: string;
  country_capital?: string;
  country_tld?: string;
  continent_code?: string;
  in_eu?: boolean;
  postal?: string;
  latitude?: number;
  longitude?: number;
  timezone?: string;
  utc_offset?: string;
  country_calling_code?: string;
  currency?: string;
  currency_name?: string;
  languages?: string;
  country_area?: number;
  country_population?: number;
  asn?: string;
  org?: string;
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
 * Calculate user's current local time based on timezone
 */
const getUserLocalTime = (timezone?: string) => {
  const now = new Date();
  
  if (timezone) {
    try {
      // Create a date in the user's timezone
      const userDate = new Date(now.toLocaleString("en-US", {timeZone: timezone}));
      
      return {
        user_current_time: userDate.toLocaleTimeString('en-US', { 
          hour12: false, 
          hour: '2-digit', 
          minute: '2-digit', 
          second: '2-digit' 
        }),
        user_current_date: userDate.toLocaleDateString('en-US', {
          year: 'numeric',
          month: '2-digit', 
          day: '2-digit'
        }),
        user_timestamp_iso: new Date(now.toLocaleString("en-US", {timeZone: timezone})).toISOString(),
        user_timestamp_unix: Math.floor(new Date(now.toLocaleString("en-US", {timeZone: timezone})).getTime() / 1000)
      };
    } catch (error) {
      console.warn('Failed to calculate user local time:', error);
    }
  }
  
  // Fallback to browser's local time
  return {
    user_current_time: now.toLocaleTimeString('en-US', { 
      hour12: false, 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
    }),
    user_current_date: now.toLocaleDateString('en-US', {
      year: 'numeric',
      month: '2-digit', 
      day: '2-digit'
    }),
    user_timestamp_iso: now.toISOString(),
    user_timestamp_unix: Math.floor(now.getTime() / 1000)
  };
};

/**
 * Get complete IP data with all available fields
 */
export const getCompleteIPData = async (): Promise<CompleteIPData | null> => {
  try {
    const response = await fetch('https://ipapi.co/json', {
      method: 'GET',
      headers: {
        'Accept': 'application/json',
      },
    });
    
    if (response.ok) {
      const data: IPApiResponse = await response.json();
      
      // Calculate user's current local time
      const localTimeInfo = getUserLocalTime(data.timezone);
      
      // Return complete IP data
      const completeData: CompleteIPData = {
        ip: data.ip,
        network: data.network,
        version: data.version,
        city: data.city,
        region: data.region,
        region_code: data.region_code,
        country: data.country,
        country_name: data.country_name,
        country_code: data.country_code,
        country_code_iso3: data.country_code_iso3,
        country_capital: data.country_capital,
        country_tld: data.country_tld,
        continent_code: data.continent_code,
        in_eu: data.in_eu,
        postal: data.postal,
        latitude: data.latitude,
        longitude: data.longitude,
        timezone: data.timezone,
        utc_offset: data.utc_offset,
        country_calling_code: data.country_calling_code,
        currency: data.currency,
        currency_name: data.currency_name,
        languages: data.languages,
        country_area: data.country_area,
        country_population: data.country_population,
        asn: data.asn,
        org: data.org,
        ...localTimeInfo
      };
      
      if (completeData.ip) {
        return completeData;
      }
    }
  } catch (error) {
    console.warn('Failed to get complete IP data:', error);
  }
  
  return null;
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