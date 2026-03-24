"use client";

import { useEffect } from "react";
import { detectDeviceType } from "@/utils/deviceDetection";
import { APP_STORE_URLS } from "@/constants/appUrls";

function getAppStoreUrl(): string {
  const device = detectDeviceType();
  return device === "android" ? APP_STORE_URLS.ANDROID : APP_STORE_URLS.IOS;
}

export default function InvitePage() {
  useEffect(() => {
    const url = getAppStoreUrl();
    window.location.replace(url);
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-[#6232C2] to-[#9F54DF] px-4">
      <div className="max-w-md text-center space-y-4">
        <h1 className="text-2xl text-white font-[var(--font-urbanist)]">
          Opening Crowned...
        </h1>
        <p className="text-white/70 text-sm">
          If nothing happens,{" "}
          <a
            href={getAppStoreUrl()}
            className="underline underline-offset-4 text-white font-medium"
          >
            tap here to open the app store.
          </a>
        </p>
      </div>
    </div>
  );
}
