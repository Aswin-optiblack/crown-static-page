import Image from "next/image";

const index = () => {
  return (
    <div className="my-10 p-6 flex flex-col items-center justify-center gap-10 mt-[10px] relative px-14">
      <h1 className="md:text-5xl text-3xl font-[700] font-jakarta text-[#F7F5FA] text-center">This crown could be for:</h1>
      <div className="relative h-[400px] w-full">
        <div className="absolute top-0 right-1/2 transform translate-x-1/2  rotate-3 border-8  border-[#F8A80D] rounded-2xl text-[#424242]  bg-gradient-to-t from-[#d3b64c] to-[#f0deb1] flex flex-col items-start justify-start gap-2 p-4">
          <p className="font-jakarta font-extrabold md:text-[13px] text-[11px]">🔥 Best Person</p>
          <p className="font-sans font-[700] md:text-[11px] text-[9px] text-start">
            Just launched my new project!
            <br />
            Excited to share it with the community 🚀
          </p>
        </div>

        <div className="absolute top-[50px] left-[50px] transform -rotate-6 border-8  border-[#F8A80D] pb-10 rounded-2xl text-[#424242]  bg-gradient-to-t from-[#d3b64c] to-[#f0deb1] p-4 flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold md:text-[13px] text-[11px]">🔥 Best Person</p>
          <p className="font-sans font-[700] md:text-[11px] text-[9px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <div className="absolute bottom-20 transform -rotate-[20deg]  border-8  border-[#F8A80D] rounded-2xl text-[#424242]  bg-gradient-to-t from-[#d3b64c] to-[#f0deb1] p-4 flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold md:text-[13px] text-[11px]">🔥 Best Person</p>
          <p className="font-sans font-[700] md:text-[11px] text-[9px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <div className="absolute top-[50px] right-[50px] transform rotate-6  border-8  border-[#F8A80D]  rounded-2xl text-[#424242]  bg-gradient-to-t from-[#d3b64c] to-[#f0deb1] p-4 flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold md:text-[13px] text-[11px]">🔥 Best Person</p>
          <p className="font-sans font-[700] md:text-[11px] text-[9px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <div className="absolute bottom-20 right-0 transform rotate-[20deg] border-8  border-[#F8A80D]  rounded-2xl text-[#424242]  bg-gradient-to-t from-[#d3b64c] to-[#f0deb1] p-4 flex flex-col items-start justify-start gap-4">
          <p className="font-jakarta font-extrabold md:text-[13px] text-[11px]">🔥 Best Person</p>
          <p className="font-sans font-[700] md:text-[11px] text-[9px]">
            Crowned for being lowkey iconic
          </p>
        </div>

        <Image
          className="absolute -bottom-[100px] right-1/2 transform translate-x-1/2"
          src="/assets/crown.svg"
          alt="Golden crown logo"
          width={250}
          height={250}
          loading="lazy"
        />

        <div className="absolute -left-5 top-0 transform rotate-[-20deg] ">
                <Image
                  src="/assets/lock.svg"
                  className=""
                  height={70}
                  width={70}
                  alt="Security lock icon"
                  loading="lazy"
                />
              </div>
              <div className="absolute -right-10 -bottom-20 transform rotate-[0deg] ">
                <Image
                  src="/assets/fifth_section_coin.svg"
                  className=""
                  height={150}
                  width={150}
                  alt="Gold coin decoration"
                  loading="lazy"
                />
              </div>
        
              <div className="absolute top-1/12 right-1/12 ">
                <Image
                  src="/assets/bg_star.svg"
                  className=""
                  height={40}
                  width={40}
                  alt="Decorative star"
                  loading="lazy"
                />
              </div>
        
              <div className="absolute bottom-1/12 left-5 ">
                <Image
                  src="/assets/bg_star.svg"
                  className=""
                  height={30}
                  width={30}
                  alt="Decorative star"
                  loading="lazy"
                />
              </div>
        
              <div className="absolute top-1/12 left-1/12 ">
                <Image
                  src="/assets/bg_star.svg"
                  className=""
                  height={20}
                  width={20}
                  alt="Decorative star"
                  loading="lazy"
                />
              </div>
      </div>

    </div>
  );
};

export default index;
