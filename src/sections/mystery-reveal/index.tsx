"use client";
import Image from "next/image";
import { APP_STORE_URLS } from "@/constants/appUrls";

const index = () => {
  return (
    <div className="md:my-20 my-12 border-4 border-[#F8A80D] rounded-2xl p-14 py-20 bg-[#E8E0EF] w-full flex items-center md:justify-between justify-center">
      <div
        id="section-one"
        className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center gap-4 "
      >
        <div className=" pl-4 flex flex-col items-start justify-center md:w-[500px]">
          <h2 className="text-5xl font-[700] text-[#424242] font-jakarta text-center">
            🕵️ Who did it? What did they say?
          </h2>
          <p className="my-5 text-[#424242] font-sans font-[400] text-2xl text-center">
            Someone thinks you’re{" "}
            <span className="font-sans font-[800]">“lowkey a genius”</span>. Wanna
            know who? Open the app to reveal the full crown.
          </p>
          <div className="flex items-center justify-center w-full">
            <div className="mt-4 flex md:flex-row flex-col gap-5 items-center justify-center ">
              <button 
                onClick={() => window.open(APP_STORE_URLS.IOS, '_blank')}
                className=" bg-black text-white px-4 py-1 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Image
                  src="/assets/apple.svg"
                  alt="Apple App Store icon"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[12px] text-nowrap">
                    Download on the
                  </span>
                  <span className=" font-bold text-lg ">App Store</span>
                </div>
              </button>
              <button 
                onClick={() => window.open(APP_STORE_URLS.ANDROID, '_blank')}
                className=" bg-black text-white px-4 py-1 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer"
              >
                <Image
                  src="/assets/playstore.svg"
                  alt="Google Play Store icon"
                  width={40}
                  height={40}
                  loading="lazy"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[12px] text-nowrap">Get it on</span>
                  <span className=" font-bold text-lg ">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 relative flex flex-col items-stretch justify-center mt-1">
          <div className="relative">
            <Image
              src="/assets/blur_card.png"
              alt="Blurred crown notification card"
              width={500}
              height={500}
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
