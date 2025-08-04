"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const index = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="my-10  flex items-center justify-between gap-5  bg-[#F0EBF5] py-14 px-5">
      <div className="flex flex-col items-start justify-start">
        <div className="text-[#583A73] font-jakarta text-3xl flex items-center gap-2 relative">
          <h3 className="font-[800]">CROWNED</h3>
          <div className="w-2.5 h-2.5 bg-[#FCD310] rounded-full"></div>
          <Image
            className="absolute -top-9 left-1/2 right-1/2 transform -translate-x-1/2"
            src="/assets/crown.svg"
            alt="Crowned"
            width={70}
            height={60}
          />
        </div>
        <p className="font-sans font-extrabold text-lg">hello@crowned.com</p>
      </div>
      <div className="flex flex-col items-center justify-center">
        <div className="">
          <ul className="font-sans font-bold text-xl flex  items-center justify-center gap-8">
            <li>
              <Link href={"/"} className="">
                Home
              </Link>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("section-two")}
                className="cursor-pointer"
              >
                About
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("section-three")}
                className="cursor-pointer"
              >
                How it Works
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("section-four")}
                className="cursor-pointer"
              >
                Rewards
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("section-five")}
                className="cursor-pointer"
              >
                Crown Cam
              </button>
            </li>
            <li>
              <Link href={"/contact"} className="">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="flex gap-10 mt-7 ">
          <ul className="font-sans font-extrabold text-lg flex  items-center justify-center gap-8">
            <li>
              <Link href={"/terms"} className="">
                Terms of Service
              </Link>
            </li>
            <li>
              <Link href={"/terms"} className="">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5">
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <Image
            src="/assets/instagram.svg"
            alt="Instagram"
            width={25}
            height={25}
          />
        </div>
        <div className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
          <Image src="/assets/tiktok.svg" alt="TikTok" width={25} height={25} />
        </div>
      </div>
    </div>
  );
};

export default index;
