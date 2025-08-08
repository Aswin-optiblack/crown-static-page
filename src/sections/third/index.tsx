import Image from "next/image";
import React from "react";
import Card from "@/components/section_card";

const index = () => {
  return (
    <div id="section-three" className="my-20 p-10 grid md:grid-cols-2 grid-cols-1 gap-4 mt-[150px] bg-[#FFFBEE] relative">
      <div className="flex flex-col items-start justify-center gap-6  text-start">
        <h3 className="md:text-4xl text-2xl font-jakarta font-[700] text-[#2C1D39] text-start">
          📲 Get the Crowned App to reveal your crown
        </h3>
        <p className="text-[#545B5B] font-sans font-[700] md:text-2xl text-xl md:mt-6 mb-5 md:mb-0">
          You’ve been crowned — now it’s your move. Heres how it works:
        </p>
      </div>
      <div className="relative flex items-center justify-center flex-col basis-full gap-8 bg-gradient-to-tl from-[#583A73] to-[#8459AB] px-6 py-12 rounded-lg">
        <div className="h-[300px] w-[2px] absolute right-1/2 transform -translate-x-1/2 z-0 bg-white"></div>
        <Card text="Someone crowns you anonymously" imageClr="#E2E3FA" imagesrc="/assets/third_section_first_icon.svg" />
        <Card text="You open the app to see your crown" imageClr="#C1F2F2" imagesrc="/assets/third_section_second_icon.svg" />
        <Card text="Start your own chain and crown others" imageClr="#D4ECFF" imagesrc="/assets/third_section_third_icon.svg" />
        <Card text="Climb the leaderboard and unlock reveals" imageClr="#FFEFBB" imagesrc="/assets/third_section_fourth_icon.svg" />
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
