import Image from "next/image";
import React from "react";
import Card from "@/components/section_card";

const index = () => {
  return (
    <div id="section-three" className="my-20 p-10 grid grid-cols-2 gap-4 mt-[150px] bg-[#FFFBEE] relative">
      <div className="flex flex-col items-start justify-center gap-6 w-[500px] text-center">
        <h3 className="text-3xl font-jakarta font-[500] text-[#2C1D39]">
          📲 Get the Crowned App to reveal your crown
        </h3>
        <p className="text-[#545B5B] font-sans font-[700] text-2xl mt-6">
          You’ve been crowned — now it’s your move. Heres how it works:
        </p>
      </div>
      <div className="relative flex items-center justify-center flex-col gap-8 bg-gradient-to-tl from-[#583A73] to-[#8459AB] px-6 py-12 rounded-lg">
        <div className="h-[300px] w-[2px] absolute right-1/2 transform -translate-x-1/2 z-0 bg-white"></div>
        <Card text="Pick a Crown (like “Most Likely to Go Viral”)" imagesrc="/assets/third_section_first_icon.svg" />
        <Card text="Send it to a friend — anonymous 👀" imagesrc="/assets/third_section_second_icon.svg" />
        <Card text="They unlock it by crowning someone else" imagesrc="/assets/third_section_third_icon.svg" />
        <Card text="Build streaks. Get crowned. Go viral." imagesrc="/assets/third_section_fourth_icon.svg" />
      </div>
      <Image
        src="/assets/gold_star.svg"
        alt="star"
        width={20}
        height={20}
        className="absolute top-1/12 left-1/12"
      />

      <Image
        src="/assets/gold_star.svg"
        alt="star"
        width={10}
        height={10}
        className="absolute bottom-1/12 left-1/12"
      />

      <Image
        src="/assets/gold_star.svg"
        alt="star"
        width={15}
        height={15}
        className="absolute bottom-10 left-1/3"
      />
    </div>
  );
};

export default index;
