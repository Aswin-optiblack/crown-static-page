import Image from "next/image";
import React from "react";
import Card from "@/components/section_card";

const index = () => {
  return (
    <div id="section-three" className="my-20 p-6 grid grid-cols-2 gap-4 mt-[150px]">
      <div className="flex flex-col items-start justify-center gap-6">
        <h3 className="text-6xl font-bowlby font-[400] text-[#424242]">
          HOW CROWNED WORKS 👑
        </h3>
        <p className="text-[#545B5B] font-sans font-[400] text-2xl mt-6">
          Crown your friends. Get crowned back.
          <br /> It’s like a chain reaction of good vibes — <br /> anonymous,
          viral, and a little bit chaotic 🔥
        </p>
      </div>
      <div className="relative flex items-center justify-center flex-col gap-8 bg-gradient-to-tl from-[#583A73] to-[#8459AB] px-6 py-12 rounded-lg">
        <div className="h-[300px] w-[2px] absolute right-1/2 transform -translate-x-1/2 z-0 bg-white"></div>

        {/* <div className="bg-[#F0F3EA] flex items-center justify-start p-2 rounded-lg w-full z-40 gap-5">
          <Image
            src="/assets/third_section_first_icon.svg"
            alt="Description"
            width={35}
            height={35}
          />
          <p className="text-[#002F2A] font-sans text-lg">
            Pick a Crown (like “Most Likely to Go Viral”)
          </p>
        </div> */}
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default index;
