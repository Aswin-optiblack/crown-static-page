"use client";
import Image from "next/image";
import { APP_STORE_URLS } from "@/constants/appUrls";

const index = () => {
  return (
    <div className="md:my-20 my-8 border-4 border-[#F8A80D] rounded-2xl md:p-14 md:py-20 p-4 py-8 bg-[#E8E0EF] w-full flex items-center md:justify-between justify-center">
      <div
        id="section-one"
        className="w-full flex md:flex-row flex-col items-center md:justify-between justify-center md:gap-8 gap-6"
      >
        <div className="flex flex-col items-center justify-center md:items-start max-w-lg md:max-w-none w-full">
          <h2 className="md:text-5xl sm:text-4xl text-3xl font-[700] text-[#424242] font-jakarta text-center md:text-left leading-tight">
            🕵️ Who did it? What did they say?
          </h2>
          <p className="md:my-5 my-4 text-[#424242] font-sans font-[400] md:text-2xl sm:text-xl text-lg text-center md:text-left leading-relaxed">
            Someone thinks you&apos;re{" "}
            <span className="font-sans font-[800]">&quot;lowkey a genius&quot;</span>. Wanna
            know who? Open the app to reveal the full crown.
          </p>
          <div className="flex items-center justify-center md:justify-start w-full md:mt-6 mt-2">
            <div className="flex flex-col sm:flex-row items-center justify-center sm:justify-start w-full sm:w-auto gap-3 sm:gap-4">
              <button 
                onClick={() => window.open(APP_STORE_URLS.IOS, '_blank')}
                className="bg-black text-white px-4 py-2 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer w-full max-w-xs sm:w-auto"
              >
                <Image
                  src="/assets/apple.svg"
                  alt="Apple App Store icon"
                  width={32}
                  height={32}
                  loading="lazy"
                  className="w-8 h-8"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[10px]">
                    Download on the
                  </span>
                  <span className="font-bold text-base">App Store</span>
                </div>
              </button>
              <button 
                onClick={() => window.open(APP_STORE_URLS.ANDROID, '_blank')}
                className="bg-black text-white px-4 py-2 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer w-full max-w-xs sm:w-auto"
              >
                <Image
                  src="/assets/playstore.svg"
                  alt="Google Play Store icon"
                  width={32}
                  height={32}
                  loading="lazy"
                  className="w-8 h-8"
                />
                <div className="flex flex-col items-start">
                  <span className="text-[10px]">Get it on</span>
                  <span className="font-bold text-base">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="md:p-6 p-0 relative flex flex-col items-center justify-center md:mt-1 mt-8 w-full md:w-auto">
          <div className="relative w-full md:max-w-none">
            <Image
              src="/assets/blur_card.png"
              alt="Blurred crown notification card"
              width={500}
              height={500}
              loading="lazy"
              className="w-full h-auto md:max-w-none mx-auto object-contain"
            />
            
            {/* Additional mystery elements - sh, sand, lock, dollar icons */}
            <div className="absolute inset-0 flex items-center justify-center opacity-20 md:opacity-40">
              <div className="grid grid-cols-2 gap-4 p-4 w-full max-w-xs">
                <div className="w-8 h-8 md:w-12 md:h-12 opacity-50">
                  <Image
                    src="/assets/lock.svg"
                    alt="Lock icon"
                    width={48}
                    height={48}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-8 h-8 md:w-12 md:h-12 opacity-50">
                  <Image
                    src="/assets/fifth_section_coin.svg"
                    alt="Dollar icon"
                    width={48}
                    height={48}
                    className="w-full h-full"
                  />
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 opacity-30">
                  <span className="text-lg md:text-2xl">📝</span>
                </div>
                <div className="w-6 h-6 md:w-8 md:h-8 opacity-30">
                  <span className="text-lg md:text-2xl">🏖️</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
