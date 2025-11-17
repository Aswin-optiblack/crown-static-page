/**
 * API Configuration
 *
 * Centralized API configuration that uses environment variables
 * to support different environments (dev, staging, production)
 */

/**
 * Get the API base URL from environment variables
 * Falls back to development URL if not set
 */
const getApiBaseUrl = (): string => {
  const envBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL;

  if (!envBaseUrl) {
    console.warn(
      'NEXT_PUBLIC_API_BASE_URL is not set. Using default development URL. ' +
      'Please set this environment variable for production deployments.'
    );
    return 'https://api.dev.getcrowned.fun';
  }

  return envBaseUrl;
};

/**
 * API Base URL - automatically configured based on environment
 */
export const API_BASE_URL = getApiBaseUrl();

/**
 * API Endpoints
 */
export const API_ENDPOINTS = {
  // Crown endpoints
  CROWN_ME: `${API_BASE_URL}/api/crowns/crown-me`,

  // Category endpoints
  CATEGORIES_ALL: `${API_BASE_URL}/api/category/all`,

  // Prompt endpoints
  PROMPTS_BY_CATEGORY: (categoryId: string) =>
    `${API_BASE_URL}/api/prompts/BycategoryId?categoryId=${categoryId}`,
} as const;

/**
 * API Configuration object
 */
export const apiConfig = {
  baseUrl: API_BASE_URL,
  endpoints: API_ENDPOINTS,
  timeout: 30000, // 30 seconds
} as const;
