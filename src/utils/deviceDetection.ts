/**
 * Device detection utility to identify user's device type
 */

export type DeviceType = 'ios' | 'android' | 'desktop';

/**
 * Detects the user's device type based on the user agent
 * @returns 'ios' | 'android' | 'desktop'
 */
// Extend Navigator interface to include userAgentData
interface NavigatorWithUserAgentData extends Navigator {
  userAgentData?: {
    platform?: string;
  };
}

export function detectDeviceType(): DeviceType {
  if (typeof window === 'undefined') {
    return 'desktop';
  }

  const userAgent = window.navigator.userAgent.toLowerCase();
  const platform = (window.navigator as NavigatorWithUserAgentData).userAgentData?.platform?.toLowerCase() || window.navigator.platform.toLowerCase();

  // Check for iOS devices (iPhone, iPad, iPod)
  const isIOS = /iphone|ipad|ipod/.test(userAgent) ||
                /iphone|ipad|ipod/.test(platform) ||
                (platform === 'macintel' && navigator.maxTouchPoints > 1); // iPad on iOS 13+

  // Check for Android devices
  const isAndroid = /android/.test(userAgent) ||
                    /android/.test(platform) ||
                    /linux armv/.test(userAgent);

  if (isIOS) {
    return 'ios';
  }

  if (isAndroid) {
    return 'android';
  }

  return 'desktop';
}

/**
 * Checks if the user is on a mobile device (iOS or Android)
 * @returns boolean
 */
export function isMobileDevice(): boolean {
  const deviceType = detectDeviceType();
  return deviceType === 'ios' || deviceType === 'android';
}
