"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Image from "next/image";
import { getCompleteIPData, CompleteIPData } from "@/utils/ipDetection";
import WelcomeHero from "@/sections/welcome-hero";
import HowItWorks from "@/sections/how-it-works";
import AppDownload from "@/sections/app-download";
import CrownPersonalization from "@/sections/crown-personalization";

type FlowStep = 'welcome' | 'personalization' | 'success' | 'final';

export default function CrownMeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [completeIPData, setCompleteIPData] = useState<CompleteIPData | null>(null);
  const [currentStep, setCurrentStep] = useState<FlowStep>('welcome');

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
    setCurrentStep('personalization');
  };

  const handleCrownSuccess = () => {
    setCurrentStep('success');
  };

  const handleCloseSuccess = () => {
    setCurrentStep('final');
  };

  const handleBack = () => {
    setCurrentStep('welcome');
  };

  if (!userName) return null;

  return (
    <div>
      {/* Step 1: Welcome Hero */}
      {currentStep === 'welcome' && (
        <WelcomeHero
          userName={userName}
          fullName={fullName}
          onCrownThemClick={handleCrownThemClick}
        />
      )}

      {/* Step 2: Crown Personalization */}
      {currentStep === 'personalization' && (
        <div className="container-box" style={{
          backgroundImage: `url('/assets/background-2.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          paddingTop: '40px',
          paddingBottom: '40px',
        }}>
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
      {currentStep === 'success' && (
        <WelcomeHero
          userName={userName}
          fullName={fullName}
          showSuccess={true}
          onCloseSuccess={handleCloseSuccess}
          onDownloadClick={handleCloseSuccess}
        />
      )}

      {/* Step 4: Final step with HowItWorks and AppDownload */}
      {currentStep === 'final' && (
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
          <div className="">
            <Image
              src="/assets/lock.svg"
              className="w-[50px] h-[50px]"
              height={50}
              width={50}
              alt="Lock icon"
              loading="lazy"
            />
          </div>
          <div className="absolute bottom-8 right-8">
            <Image
              src="/assets/cloud.svg"
              className="w-[50px] h-[50px]"
              height={50}
              width={50}
              alt="Cloud icon"
              loading="lazy"
            />
          </div>
        </div>
      )}
    </div>
  );
}
