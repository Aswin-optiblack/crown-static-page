import React from "react";
import Button from "@/components/Button";
import Image from "next/image";

const index = () => {
  return (
    <div id="section-two" className="my-28 bg-[#8459AB]  grid grid-cols-2 gap-4">
      <div className="relative flex items-center justify-center">
        <Image className="absolute -z-0" src="/assets/second_section_last_polygon.svg" alt="polygon" width={400} height={400} />
        <Image className="absolute bottom-[10%] left-[10px] z-40" src="/assets/second_section_first_polygon.svg" alt="polygon" width={300} height={300} />
        <Image className="absolute z-50 h-[550px]" src="/assets/mobile_second.svg" alt="polygon" width={300} height={300} />
        <Image className="absolute left-[20%] transform rotate-12 z-40" src="/assets/triangle_group.svg" alt="polygon" width={100} height={100} />
      </div>

      <div className="flex flex-col justify-center items-start gap-4 text-white p-8 py-16">
        <h3 className="font-[400] text-6xl font-bowlby">WAIT,WHAT IS CROWNED?</h3>
        <p className="font-[600] font-sans text-2xl">It’s a social recognition chain game. Crown your friends anonymously for being awesome<br />  — and let the love ripple out.</p>
        <Button text="Try it Out 🔥" />
      </div>
    </div>
  );
};

export default index;
