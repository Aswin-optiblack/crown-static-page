import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="my-20 border-4 border-[#F8A80D] rounded-2xl p-10 bg-[#E8E0EF] w-full flex items-center justify-between">
      <div
        id="section-one"
        className="flex items-center justify-between gap-4 "
      >
        <div className=" pl-4 flex flex-col items-start justify-center w-[500px]">
          <h1 className="text-4xl font-[700] text-[#424242] font-jakarta text-center">
            🕵️ Who did it? What did they say?
          </h1>
          <p className="my-5 text-[#424242] font-sans font-[600] text-xl text-center">
            Someone thinks you’re{" "}
            <span className="font-extrabold">“lowkey a genius”</span>. Wanna
            know who? Open the app to reveal the full crown.
          </p>
          <div className="flex items-center justify-center">
            <div className="mt-4 flex items-center justify-center space-x-4">
              <button className="bg-black text-white px-4 py-1 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2">
                <Image
                  src="/assets/apple.svg"
                  alt="App Store"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col items-start">
                  <span className="text-[12px] text-nowrap">
                    Download on the
                  </span>
                  <span className=" font-bold text-lg ">App Store</span>
                </div>
              </button>
              <button className="bg-black text-white px-4 py-1 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2">
                <Image
                  src="/assets/playstore.svg"
                  alt="App Store"
                  width={40}
                  height={40}
                />
                <div className="flex flex-col items-start">
                  <span className="text-[12px] text-nowrap">Get it on</span>
                  <span className=" font-bold text-lg ">Google Play</span>
                </div>
              </button>
            </div>
          </div>
        </div>

        <div className="p-6 relative flex flex-col items-center justify-center mt-1">
          <div className="relative">
            <Image
              src="/assets/blur_card.png"
              alt="App Store"
              width={400}
              height={400}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default index;
