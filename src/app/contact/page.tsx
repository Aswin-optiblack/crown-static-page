"use client";
import React, { useState } from "react";
import Header from "@/components/header";
import Footer from "@/components/footer_clr";
import Image from "next/image";
import Link from "next/link";

// Country code options
const countryCodes = [
  { code: "+1", name: "United States", flag: "🇺🇸" },
  { code: "+91", name: "India", flag: "🇮🇳" },
  { code: "+44", name: "United Kingdom", flag: "🇬🇧" },
  { code: "+33", name: "France", flag: "🇫🇷" },
  { code: "+49", name: "Germany", flag: "🇩🇪" },
  { code: "+81", name: "Japan", flag: "🇯🇵" },
  { code: "+86", name: "China", flag: "🇨🇳" },
  { code: "+7", name: "Russia", flag: "🇷🇺" },
  { code: "+55", name: "Brazil", flag: "🇧🇷" },
  { code: "+61", name: "Australia", flag: "🇦🇺" },
];

const Index = () => {
  const [selectedCountry, setSelectedCountry] = useState(countryCodes[0]);
  const [focusedInput, setFocusedInput] = useState<string | null>(null);

  const handleFocus = (inputId: string) => setFocusedInput(inputId);
  const handleBlur = () => setFocusedInput(null);

  return (
    <div className="relative container">
      <Header />
      <div className="flex flex-col items-center justify-center gap-5 my-10 relative">
        <h1 className="text-6xl font-bowlby text-[#424242]">Contact Us</h1>
        <p className="text-xl font-sans">
          Reach out to our friendly team with any app questions!
        </p>

        <div className="w-[544px] flex flex-col items-center justify-center gap-5">
          <div className="w-full flex gap-4 items-center justify-between">
            <div className="flex flex-col items-start gap-2">
              <label
                htmlFor="firstName"
                className="text-[#424242] font-sans text-[14px]"
              >
                First name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="firstName"
                  className="w-full h-[44px] px-4 bg-white border-1 border-[#757575] focus:outline-none"
                  placeholder="Aryi"
                  onFocus={() => handleFocus("firstName")}
                  onBlur={handleBlur}
                />
                {focusedInput === "firstName" && (
                  <div
                    className="absolute inset-0 border-3 rounded-md pointer-events-none"
                    style={{
                      borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                    }}
                  />
                )}
              </div>
            </div>

            <div className="flex flex-col items-start gap-2 ">
              <label
                htmlFor="lastName"
                className="text-[#424242] font-sans text-[14px]"
              >
                Last name*
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="lastName"
                  className="w-full h-[44px] px-4 bg-white border-1 border-[#757575] focus:outline-none"
                  placeholder="Last name"
                  onFocus={() => handleFocus("lastName")}
                  onBlur={handleBlur}
                />
                {focusedInput === "lastName" && (
                  <div
                    className="absolute inset-0 border-3 rounded-md pointer-events-none"
                    style={{
                      borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                    }}
                  />
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="email"
              className="text-[#424242] font-sans text-[14px]"
            >
              Email*
            </label>
            <div className="relative">
              <input
                type="email"
                id="email"
                className="w-full h-[44px] px-4 bg-white border-1 border-[#757575] focus:outline-none"
                placeholder="you@company.com"
                onFocus={() => handleFocus("email")}
                onBlur={handleBlur}
              />
              {focusedInput === "email" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
          </div>

          <div className="flex flex-col w-full">
            <label
              htmlFor="phone"
              className="text-[#424242] font-sans text-[14px]"
            >
              Phone number*
            </label>
            <div className="relative">
              <div className="w-full flex items-center">
                <select
                  value={selectedCountry.code}
                  onChange={(e) => {
                    const code = e.target.value;
                    setSelectedCountry(
                      countryCodes.find((c) => c.code === code) ||
                        countryCodes[0]
                    );
                  }}
                  className="h-[44px] px-4 bg-white border-1 border-r-0 border-[#757575] focus:outline-none w-[100px] appearance-none"
                  onFocus={() => handleFocus("phone")}
                  onBlur={handleBlur}
                >
                  {countryCodes.map((country) => (
                    <option key={country.code} value={country.code}>
                      {country.flag} {country.code}
                    </option>
                  ))}
                </select>
                <input
                  type="tel"
                  id="phone"
                  className="w-full h-[44px] px-4 bg-white border-1 border-l-0 border-[#757575] focus:outline-none"
                  placeholder="(555) 000-0000"
                  onFocus={() => handleFocus("phone")}
                  onBlur={handleBlur}
                />
              </div>
              {focusedInput === "phone" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex flex-col w-full">
            <label
              htmlFor="message"
              className="text-[#424242] font-sans text-[14px]"
            >
              Message*
            </label>
            <div className="relative">
              <textarea
                id="message"
                className="w-full h-[128px] px-4 py-2 bg-white border-1 border-[#757575] focus:outline-none"
                placeholder="Leave us a message..."
                onFocus={() => handleFocus("message")}
                onBlur={handleBlur}
              />
              {focusedInput === "message" && (
                <div
                  className="absolute inset-0 border-3 rounded-md pointer-events-none"
                  style={{
                    borderImage: "linear-gradient(90deg, #7024B4, #F8A80D) 1",
                  }}
                />
              )}
            </div>
          </div>
          <div className="flex items-center gap-2 text-[14px] font-sans text-[#424242]">
            <input
              type="checkbox"
              id="privacy"
              className="h-5 w-5 border-1 border-[#757575] focus:outline-none cursor-pointer"
            />
            <label htmlFor="privacy" className="text-[#212121] text-xl">
              You agree to our friendly{" "}
              <span>
                {" "}
                <Link href="/terms" className="font-bold underline">
                  privacy policy
                </Link>
              </span>
            </label>
          </div>
          <div className="relative flex items-center justify-center gap-5 w-full">
            <button className="w-full text-nowrap border-2 border-[#212121] bg-[#E1D6EA] shadow-[6px_6px_0px_#000000] py-1.5 px-3 h-[40px] font-bowlby font-[400] text-xl text-[#2C1D39] text-center cursor-pointer hover:shadow-[9px_9px_0px_#000000] hover:opacity-90  transition-all duration-200">
              SEND MESSAGE
            </button>
          </div>
        </div>

        <Image
          className="absolute top-[10%] right-[10%] z-50"
          src="/assets/crown.svg"
          alt="crown"
          width={125}
          height={100}
        />
        <Image
          className="absolute top-[10%] left-[10%] z-50"
          src="/assets/lock.svg"
          alt="lock"
          width={125}
          height={100}
        />
        <Image
          className="absolute bottom-[10%] right-[10%] z-50"
          src="/assets/cloud.svg"
          alt="cloud"
          width={125}
          height={100}
        />
        <Image
          className="absolute bottom-[10%] left-[10%] z-50"
          src="/assets/fifth_section_coin.svg"
          alt="lock"
          width={125}
          height={100}
        />
      </div>

      <Footer />
    </div>
  );
};

export default Index;
