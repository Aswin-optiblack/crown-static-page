import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center pt-20 mb-10 text-[#F7F5FA]">
      <Image
        src="/assets/crown.svg"
        className="h-[200px]"
        height={200}
        width={300}
        alt="crown"
      />
      <h1 className="font-jakarta font-[800] text-5xl">You’ve Been Crowned!</h1>
      <p className="font-sans font-[600] text-3xl w-[800px] text-center pt-10 leading-[40px]">
        Someone from your circle just crowned you on Crowned — the app where
        compliments turn into culture and giving flowers is a public flex.
      </p>

      <div className="absolute left-0 top-1/2 transform rotate-[-20deg] ">
        <Image
          src="/assets/lock.svg"
          className=""
          height={70}
          width={70}
          alt="lock"
        />
      </div>
      <div className="absolute right-0 bottom-0 transform rotate-[0deg] ">
        <Image
          src="/assets/fifth_section_coin.svg"
          className=""
          height={150}
          width={170}
          alt="lock"
        />
      </div>

      <div className="absolute top-1/12 right-1/12 ">
        <Image
          src="/assets/bg_star.svg"
          className=""
          height={40}
          width={40}
          alt="lock"
        />
      </div>

      <div className="absolute bottom-1/12 left-5 ">
        <Image
          src="/assets/bg_star.svg"
          className=""
          height={30}
          width={30}
          alt="lock"
        />
      </div>

      <div className="absolute top-1/12 left-1/12 ">
        <Image
          src="/assets/bg_star.svg"
          className=""
          height={20}
          width={20}
          alt="lock"
        />
      </div>
    </div>
  );
};

export default index;
