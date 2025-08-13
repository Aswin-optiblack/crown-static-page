"use client";
import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import WelcomeHero from "@/sections/welcome-hero";
import HowItWorks from "@/sections/how-it-works";
import AppDownload from "@/sections/app-download";
import CrownPersonalization from "@/sections/crown-personalization";

export default function CrownMe() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [userName, setUserName] = useState<string>("");

  useEffect(() => {
    const userParam = searchParams.get('user');
    
    // If no user parameter, redirect to home page
    if (!userParam) {
      router.push('/');
      return;
    }
    
    setUserName(userParam);
  }, [searchParams, router]);

  // Don't render anything if no user parameter (will redirect)
  if (!userName) {
    return null;
  }

  return (
    <div className="container ">
      <WelcomeHero />
      <CrownPersonalization userName={userName} />
      <HowItWorks />      
      <AppDownload />
    </div>
  );
}