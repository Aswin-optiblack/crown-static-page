import Image from "next/image";
import React from "react";

interface SectionCardProps {
  text?: string;
  imagesrc?: string;
  imageClr?: string;
}
const index = ({ text, imagesrc, imageClr }: SectionCardProps) => {
  return (
    <div className="bg-[#F0F3EA] flex items-center justify-start p-2 rounded-lg w-full z-40 gap-5">
      <Image
        src={imagesrc || "/assets/third_section_first_icon.svg"}
        className={`bg-[${imageClr}] rounded-full p-1`}
        alt="Description"
        width={35}
        height={35}
      />
      <p className="text-[#002F2A] font-sans text-lg font-[600]">
        {text || "Pick a Crown (like “Most Likely to Go Viral”)"}
      </p>
    </div>
  );
};

export default index;
