import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="my-20 p-6 flex flex-col items-center justify-center gap-10 mt-[10px] relative">
      <div className="relative h-[400px] w-full">
        <div className="absolute top-0 right-1/2 transform translate-x-1/2  rotate-3 border-8  border-[#F8A80D] rounded-2xl text-[#FAFAFA]  bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-2 p-4">
          <p className="font-jakarta font-extrabold text-[13px]">🔥 Best Person</p>
          <p className="font-sans font-[700] text-[11px] text-start">
            Just launched my new project!
            <br />
            Excited to share it with the community 🚀
          </p>
        </div>

        <div className="absolute top-[50px] left-[50px] transform -rotate-6 border-8  border-[#F8A80D] pb-10 rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">🔥 Best Person</p>
          <p className="font-sans font-[700] text-[11px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <div className="absolute bottom-20 transform -rotate-[20deg]  border-8  border-[#F8A80D] rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">🔥 Best Person</p>
          <p className="font-sans font-[700] text-[11px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <div className="absolute top-[50px] right-[50px] transform rotate-6  border-8  border-[#F8A80D]  rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">🔥 Best Person</p>
          <p className="font-sans font-[700] text-[11px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <div className="absolute bottom-20 right-0 transform rotate-[20deg] border-8  border-[#F8A80D]  rounded-2xl text-[#FAFAFA] p-4 bg-gradient-to-tl from-[#583A73] to-[#8459AB] flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold text-[13px]">🔥 Best Person</p>
          <p className="font-sans font-[700] text-[11px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <Image
          className="absolute -bottom-[100px] right-1/2 transform translate-x-1/2"
          src="/assets/crown.svg"
          alt="crown"
          width={350}
          height={350}
        />
      </div>

      <div>
        <h3 className="text-6xl font-bowlby font-[400] text-[#424242] text-center">
          Watch the love spread.
          <br />
          and see your inbox flood
        </h3>
      </div>
    </div>
  );
};

export default index;
