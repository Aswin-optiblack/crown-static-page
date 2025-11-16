"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getCompleteIPData, CompleteIPData } from "@/utils/ipDetection";
import { detectDeviceType } from "@/utils/deviceDetection";
import { APP_STORE_URLS } from "@/constants/appUrls";
import WelcomeHero from "@/sections/welcome-hero";
import HowItWorks from "@/sections/how-it-works";
import AppDownload from "@/sections/app-download";
import CrownPersonalization from "@/sections/crown-personalization";

type FlowStep = "welcome" | "personalization" | "success" | "final";

export default function CrownMeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [completeIPData, setCompleteIPData] = useState<CompleteIPData | null>(
    null
  );
  const [currentStep, setCurrentStep] = useState<FlowStep>("welcome");

  useEffect(() => {
    const userParam = searchParams.get("user");
    const fullNameParam = searchParams.get("fullName");

    if (!userParam) {
      router.push("/");
      return;
    }

    setFullName(fullNameParam || "");
    setUserName(userParam);

    const fetchCompleteIPData = async () => {
      const ipData = await getCompleteIPData();
      setCompleteIPData(ipData);
    };

    fetchCompleteIPData();
  }, [searchParams, router]);

  const handleCrownThemClick = () => {
    setCurrentStep("personalization");
  };

  const handleCrownSuccess = () => {
    setCurrentStep("success");
  };

  const handleCloseSuccess = () => {
    const deviceType = detectDeviceType();
    const userAgent = window.navigator.userAgent.toLowerCase();

    console.log(window.navigator.userAgent.toLowerCase())
    console.log("Detected device type:", deviceType);

    // Redirect mobile users directly to their respective app stores
    if (deviceType === 'ios') {
      window.open(APP_STORE_URLS.IOS, '_blank');
    } else if (deviceType === 'android') {
      window.open(APP_STORE_URLS.ANDROID, '_blank');
    } else {
      // Desktop users see the download section
      setCurrentStep("final");
    }
  };

  const handleBack = () => {
    setCurrentStep("welcome");
  };

  if (!userName) return null;

  return (
    <div>
      {/* Step 1: Welcome Hero */}
      {currentStep === "welcome" && (
        <WelcomeHero
          userName={userName}
          fullName={fullName}
          onCrownThemClick={handleCrownThemClick}
        />
      )}

      {/* Step 2: Crown Personalization */}
      {currentStep === "personalization" && (
        <div
          className="container-box"
          style={{
            backgroundImage: `url('/assets/background-2.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            paddingTop: "40px",
            paddingBottom: "40px",
          }}
        >
          <CrownPersonalization
            userName={userName}
            fullName={fullName}
            completeIPData={completeIPData}
            onSuccess={handleCrownSuccess}
            onBack={handleBack}
          />
        </div>
      )}

      {/* Step 3: Success within Welcome Hero layout */}
      {currentStep === "success" && (
        <WelcomeHero
          userName={userName}
          fullName={fullName}
          showSuccess={true}
          onCloseSuccess={handleCloseSuccess}
          onDownloadClick={handleCloseSuccess}
        />
      )}

      {/* Step 4: Final step with HowItWorks and AppDownload */}
      {currentStep === "final" && (
        <div
          className="relative min-h-screen bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('/assets/background-3.png')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <div className="container relative z-10">
            <HowItWorks />
            <AppDownload userName={userName} fullName={fullName} />
          </div>

          {/* Decorative Icons */}
          <div className="md:w-[80px] md:h-[80px] w-[60px] h-[60px]">
            {/* <Image
              src="/assets/lock.svg"
              className="w-[50px] h-[50px]"
              height={50}
              width={50}
              alt="Lock icon"
              loading="lazy"
            /> */}
          </div>
          <div className="absolute bottom-0 right-[15%] md:block hidden">
            <Image
              src="/assets/cloud.svg"
              className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
              height={70}
              width={70}
              alt="Cloud icon"
              loading="lazy"
            />
          </div>

          <div className="absolute bottom-4 left-[15%] md:block hidden">
            <Image
              src="/assets/lock.svg"
              className="md:w-[70px] md:h-[70px] w-[50px] h-[50px]"
              height={70}
              width={70}
              alt="Lock icon"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}
