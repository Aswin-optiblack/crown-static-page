import Image from "next/image";
import React from "react";

const index = () => {
  return (
    <div id="section-four" className="flex items-center  justify-start my-20 p-16 bg-[#8459AB]">
      <div className="flex flex-col gap-10 items-start justify-start w-[45vw]">
        <h3 className="text-6xl font-bowlby font-[400] text-[#FAFAFA] ">
          Earn from <br /> Being <br /> Crowned
        </h3>
        <p className="font-sans font-[600] text-xl text-[#FAFAFA]">
          💰 2 ways to earn real money on Crowned: <br /> <br />
          1. Get friends to join with a subscription <br />
          2. Post UGC via Crown Cam on TikTok and earn through views
          (CPM)
        </p>
      </div>

      <div className="relative flex items-center justify-center w-full h-[500px] before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-[900px] before:border-r-[0px] before:border-t-[625px] before:border-l-transparent before:border-r-transparent before:border-t-[#D9CCE5] before:-top-[65px] before:-right-[65px] ">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
          <Image
            className=""
            src="/assets/fifth_section_coin.svg"
            alt="polygon"
            width={550}
            height={550}
          />
          <div className="absolute top-0 right-0">
            <Image
              className=""
              src="/assets/arrow_down.svg"
              alt="polygon"
              width={60}
              height={60}
            />
          </div>

          <div className="absolute bottom-0 left-0">
            <Image
              className=""
              src="/assets/arrow_up.svg"
              alt="polygon"
              width={60}
              height={60}
            />
          </div>
        </div>

        <div className="absolute top-[10%] left-0">
          <Image
            className=""
            src="/assets/star_1.svg"
            alt="polygon"
            width={80}
            height={80}
          />
        </div>

        <div className="absolute bottom-[10%] left-[5%]">
          <Image
            className=""
            src="/assets/star_2.svg"
            alt="polygon"
            width={50}
            height={50}
          />
        </div>

        <div className="absolute bottom-[15%] right-[5%]">
          <Image
            className=""
            src="/assets/star_2.svg"
            alt="polygon"
            width={50}
            height={50}
          />
        </div>

        <div className="absolute bottom-0 right-1/3">
          <Image
            className=""
            src="/assets/star_2.svg"
            alt="polygon"
            width={60}
            height={60}
          />
        </div>

        <div className="absolute top-0 right-0">
          <Image
            className=""
            src="/assets/star_2.svg"
            alt="polygon"
            width={60}
            height={60}
          />
        </div>
        {/* <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div>
              <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div>
              <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div>
              <div className="">
                  <Image className='' src="/assets/star_1.svg" alt="polygon" width={100} height={100} />
              </div> */}
      </div>
    </div>
  );
};

export default index;
