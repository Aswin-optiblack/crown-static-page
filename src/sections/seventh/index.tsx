import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div id="section-five" className="my-20 p-10 py-24 bg-[#8459AB] text-white flex flex-col items-center justify-center gap-10 relative">
      <h2 className="text-7xl font-bowlby font[400] text-[#FAFAFA] text-center z-0">
        It’s Your Turn to Get <br /> Crowned 👑
      </h2>
       <div className="mt-4 flex space-x-4">
                <button className="bg-black text-white px-4 py-1 rounded-xl border-2 border-[#BDBDBD]  flex items-center justify-center gap-2">
                  <Image
                    src="/assets/apple.svg"
                    alt="App Store"
                    width={40}
                    height={40}
                  />
                  <div className="flex flex-col items-start">
                    <span className="text-[12px] text-nowrap">Download on the</span>
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
      <Image
        className="absolute top-0 right-0"
        src="/assets/star_1.svg"
        alt="polygon"
        width={70}
        height={70}
      />
      <Image
        className="absolute bottom-0 right-0"
        src="/assets/star_2.svg"
        alt="polygon"
        width={50}
        height={50}
      />
      <Image
        className="absolute top-0 left-0"
        src="/assets/star_2.svg"
        alt="polygon"
        width={50}
        height={50}
      />

      <Image
        className="absolute bottom-0 left-0"
        src="/assets/star_2.svg"
        alt="polygon"
        width={50}
        height={50}
      />
    </div>
  );
};

export default index;
