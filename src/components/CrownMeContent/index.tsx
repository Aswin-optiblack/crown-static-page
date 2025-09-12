"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { getCompleteIPData, CompleteIPData } from "@/utils/ipDetection";
import WelcomeHero from "@/sections/welcome-hero";
import HowItWorks from "@/sections/how-it-works";
import AppDownload from "@/sections/app-download";
import CrownPersonalization from "@/sections/crown-personalization";

export default function CrownMeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const [fullName, setFullName] = useState("");
  const [completeIPData, setCompleteIPData] = useState<CompleteIPData | null>(null);

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

  if (!userName) return null;

  return (
    <div className="container">
      <WelcomeHero userName={userName} fullName={fullName} />
      <CrownPersonalization userName={userName} fullName={fullName} completeIPData={completeIPData} />
      <HowItWorks />
      <AppDownload />
    </div>
  );
}
