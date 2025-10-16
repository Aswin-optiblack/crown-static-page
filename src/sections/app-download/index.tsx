"use client";
import Image from "next/image";
import { APP_STORE_URLS } from "@/constants/appUrls";

interface AppDownloadProps {
  userName?: string;
  fullName?: string;
}

const index = ({ userName, fullName }: AppDownloadProps = {}) => {
  return (
    <div className="md:mt-20 mt-12 mb-5 border-4 border-[#F8A80D] rounded-2xl md:p-14 md:py-20 p-6 bg-[#E8E0EF] w-full relative">
      <div
        id="section-one"
        className="flex md:flex-row flex-col items-center md:justify-between justify-center gap-8 md:gap-4"
      >
        <div className="md:pl-4 md:w-[500px] w-full">
          <div className="absolute -top-[15%] md:block hidden  sm:-top-[20%] md:-top-[20%] left-1/4">
            <Image
              src="/assets/cloud.svg"
              alt="Cloud decoration"
              width={100}
              height={100}
              className="md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]"
              loading="lazy"
            />
          </div>
          <h1 className="md:text-5xl sm:text-4xl text-3xl font-[700] text-[#2C1D39] font-jakarta md:text-start text-center z-50 leading-tight">
            Your Turn to Shine ✨
          </h1>
          <p className="my-5 text-[#212121] font-sans font-[400] md:text-xl sm:text-lg text-base md:text-start text-center z-50 leading-relaxed">
            After crowning {fullName || userName || "Sender Name"}, download
            Crowned to get crowned yourself, build streaks, and see who&apos;s
            hyping you up.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <div className="mt-4 flex md:flex-row flex-col gap-4 md:gap-4 items-center justify-center w-full md:w-auto">
              <button
                onClick={() => window.open(APP_STORE_URLS.IOS, "_blank")}
                className="bg-black text-white px-4 py-2 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer w-full max-w-xs md:w-auto"
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
                  <span className="text-[10px] text-nowrap">
                    Download on the
                  </span>
                  <span className="font-bold text-base">App Store</span>
                </div>
              </button>
              <button
                onClick={() => window.open(APP_STORE_URLS.ANDROID, "_blank")}
                className="bg-black text-white px-4 py-2 rounded-xl border-2 border-[#BDBDBD] flex items-center justify-center gap-2 hover:bg-gray-800 transition-colors cursor-pointer w-full max-w-xs md:w-auto"
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
                  <span className="text-[10px] text-nowrap">Get it on</span>
                  <span className="font-bold text-base">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="md:p-6 p-3 relative flex flex-col items-center justify-center mt-1">
          <div className="relative">
            <div className="md:w-[375px] md:h-[375px] sm:w-[300px] sm:h-[300px] w-[280px] h-[280px] rounded-full bg-gradient-to-b from-[#FFCE00] via-[#EF258A] to-[#7650FF] relative overflow-hidden">
              <div className="absolute bottom-[-5%] left-1/2 transform -translate-x-1/2">
                <Image
                  src="/assets/mobile.svg"
                  alt="Mobile phone mockup"
                  width={250}
                  height={350}
                  className="max-w-none md:h-[350px] md:w-[250px] sm:h-[280px] sm:w-[200px] h-[240px] w-[170px]"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="absolute top-[-5%] left-1/2 transform -translate-x-1/2">
              <Image
                src="/assets/mobile_top.svg"
                alt="Mobile phone screen"
                width={250}
                height={350}
                className="max-w-none md:h-[350px] md:w-[250px] sm:h-[280px] sm:w-[200px] h-[240px] w-[170px]"
                loading="lazy"
              />
            </div>
          </div>

          <div className="absolute bottom-[15%] md:-left-[15%] sm:-left-[5%] -left-2 rounded-xl shadow-md p-1 transform -rotate-12 bg-gradient-to-b from-[#F8A80D] to-[#FFFFFF] max-w-[140px] sm:max-w-none">
            <div className="bg-white rounded-xl p-2 flex flex-col items-center">
              <div className="flex items-center gap-1 sm:gap-2 text-[12px] sm:text-[14px]">
                <span className="">🔥</span>
                <h3 className="font-extrabold font-jakarta text-[#424242] text-[10px] sm:text-[12px]">
                  Best Person
                </h3>
              </div>
              <p className="text-[9px] sm:text-[11px] font-bold text-[#616161] text-center">
                The kindest person I know!!!
              </p>
            </div>
          </div>

          <div className="absolute top-[25%] md:-right-[5%] sm:-right-[2%] -right-1 rounded-xl shadow-md p-1 transform rotate-[20deg] bg-[#f1f1f1] max-w-[130px] sm:max-w-none">
            <div className="bg-white rounded-xl p-2">
              <div className="flex items-center justify-center flex-col">
                <h3 className="text-[10px] sm:text-[12px] font-extrabold font-jakarta text-[#424242] text-center">
                  You just received a crown
                </h3>
                <button className="text-[9px] sm:text-[11px] text-white rounded-[100px] py-1 sm:py-1.5 mt-2 sm:mt-3 px-3 sm:px-4 bg-gradient-to-b from-[#583A73] to-[#8459AB] font-sans font-[700]">
                  Click to unlock
                </button>
              </div>
            </div>
          </div>

          <div className="absolute top-[5%] md:-left-[10%] sm:-left-[5%] -left-2 transform -rotate-[20deg]">
            <Image
              src="/assets/crown.svg"
              alt="Golden crown logo"
              className="md:w-[125px] md:h-[100px] sm:w-[90px] sm:h-[72px] w-[70px] h-[56px]"
              width={125}
              height={100}
              loading="lazy"
            />
          </div>

          <div className="absolute -top-[5%] sm:-top-[10%] md:-top-[10%] -right-[1%] sm:-right-[2%] md:-right-[2%]">
            <Image
              src="/assets/cloud.svg"
              alt="Cloud decoration"
              width={80}
              height={80}
              className="md:w-[80px] md:h-[80px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]"
              loading="lazy"
            />
          </div>

          <div className="absolute -top-[30%] md:block hidden sm:-top-[35%] md:-top-[35%] -right-[10%] sm:-right-[15%] md:-right-[15%]">
            <Image
              src="/assets/fifth_section_coin.svg"
              className="md:w-[100px] md:h-[100px] sm:w-[80px] sm:h-[80px] w-[60px] h-[60px]"
              height={150}
              width={170}
              alt="Golden coin decoration"
              loading="lazy"
            />
          </div>

          <div className="absolute top-[5%] right-[10%] sm:right-[15%] md:right-[15%]">
            <Image
              src="/assets/rain.svg"
              alt="Rain decoration"
              width={45}
              height={40}
              className="md:w-[45px] md:h-[40px] sm:w-[35px] sm:h-[30px] w-[25px] h-[20px]"
              loading="lazy"
            />
          </div>
          <div className="absolute -bottom-[1%] sm:-bottom-[1%] md:bottom-[0%] right-5 transform rotate-[30deg]">
            <Image
              src="/assets/lock.svg"
              className="md:w-[60px] md:h-[60px] sm:w-[110px] sm:h-[110px] w-[80px] h-[80px]"
              alt="Security lock icon"
              width={125}
              height={100}
              loading="lazy"
            />
          </div>
        </div>
      </div>

      <div className="absolute top-1/12 right-1/12 z-10">
        <Image
          src="/assets/white_star.svg"
          className="md:w-[40px] md:h-[40px] sm:w-[30px] sm:h-[30px] w-[25px] h-[25px]"
          height={40}
          width={40}
          alt="White star decoration"
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-1/12 left-3 sm:left-5 z-10">
        <Image
          src="/assets/white_star.svg"
          className="md:w-[30px] md:h-[30px] sm:w-[25px] sm:h-[25px] w-[20px] h-[20px]"
          height={30}
          width={30}
          alt="White star decoration"
          loading="lazy"
        />
      </div>

      <div className="absolute top-1/12 left-1/12 z-10">
        <Image
          src="/assets/white_star.svg"
          className="md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] w-[15px] h-[15px]"
          height={20}
          width={20}
          alt="White star decoration"
          loading="lazy"
        />
      </div>

      <div className="absolute bottom-1/12 left-1/2 z-10">
        <Image
          src="/assets/white_star.svg"
          className="md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] w-[15px] h-[15px]"
          height={20}
          width={20}
          alt="White star decoration"
          loading="lazy"
        />
      </div>

      <div className="absolute top-4 left-1/2 z-10">
        <Image
          src="/assets/white_star.svg"
          className="md:w-[20px] md:h-[20px] sm:w-[18px] sm:h-[18px] w-[15px] h-[15px]"
          height={20}
          width={20}
          alt="White star decoration"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default index;
