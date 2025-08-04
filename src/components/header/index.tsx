"use client";
import Image from "next/image";
import React from "react";
import Button from "@/components/Button";
import Link from "next/link";

const index = () => {

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className=" pb-[1px] rounded-lg bg-gradient-to-r from-white via-80% via-[#FDE6D4] to-[#FFC2E9]">
      <div className="flex items-center justify-between py-10 pt-12 border-transparent px-3 bg-[#FFFAF1] ">
        <div className="text-[#583A73] font-jakarta text-2xl flex items-center gap-2 relative">
          
          <Link href={"/"} className="cursor-pointer">
            <h3 className="font-[800]">CROWNED</h3>
             </Link>
          <div className="w-2.5 h-2.5 bg-[#FCD310] rounded-full"></div>
          
          <Image
            className="absolute -top-9 left-1/2 right-1/2 transform -translate-x-1/2"
            src="/assets/crown.svg"
            alt="Crowned"
            width={70}
            height={60}
            />
           
        </div>
        <div className="flex items-center gap-5 font-sans text-[#212121] text-lg font-[900]">
          <button onClick={() => scrollToSection("section-two")} className="nav-button cursor-pointer">
            About
          </button>
          <button onClick={() => scrollToSection("section-three")} className="nav-button cursor-pointer">
            How it Works
          </button>
          <button onClick={() => scrollToSection("section-four")} className="nav-button cursor-pointer">
            Rewards
          </button>
          <button onClick={() => scrollToSection("section-five")} className="nav-button cursor-pointer">
            Crown Cam
          </button>
          <Link href={"/contact"} className="nav-button cursor-pointer">Contact Us</Link>
        </div>
        <div className="relative flex items-center justify-center gap-5">
          <button className="text-nowrap border-2 border-[#212121] bg-[#E1D6EA] shadow-[6px_6px_0px_#000000] py-1.5 px-3 h-[40px] font-bowlby font-[400] text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90  transition-all duration-200">
            JOIN THE WAITLIST 🔥
          </button>
          <div className="p-2 border-[2px] border-[#212121]  h-[40px] shadow-[6px_6px_0px_#000000] bg-gradient-to-t from-[#583A73] to-[#8459AB]   z-10 flex items-center justify-center gap-2 hover:shadow-[9px_9px_0px_#000000] hover:opacity-90  transition-all duration-200">
            <div className="cursor-pointer">
              <Image
                src="/assets/apple.svg"
                alt="Discord"
                width={30}
                height={30}
              />
            </div>
            <div className="w-[2px] h-full bg-white"></div>
            <div className="cursor-pointer">
              <Image
                src="/assets/android.svg"
                alt="Discord"
                width={30}
                height={30}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
