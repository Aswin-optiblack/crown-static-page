import Image from "next/image";

const index = () => {
  return (
    <div className="relative flex flex-col items-center justify-center md:pt-20 md:mb-10 pt-12 mb-6 text-[#F7F5FA]">
      <Image
        src="/assets/crown.svg"
        className="md:h-[200px] h-[150px]"
        height={200}
        width={300}
        alt="Golden crown logo"
        priority
      />
      <h1 className="font-jakarta font-[800] md:text-6xl text-4xl z-50 text-center">You’ve Been Crowned!</h1>
      <p className="font-sans font-[600] md:text-3xl text-2xl md:w-[800px] text-center md:pt-10 pt-5 leading-[40px] z-50">
        Someone from your circle just crowned you on Crowned — the app where
        compliments turn into culture and giving flowers is a public flex.
      </p>

      <div className="absolute left-0 top-1/3 transform rotate-[-20deg] ">
        <Image
          src="/assets/lock.svg"
          className="md:h-[100px] h-[70px] z-10"
          height={70}
          width={70}
          alt="Security lock icon"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 bottom-0 transform rotate-[0deg] ">
        <Image
          src="/assets/fifth_section_coin.svg"
          className="md:h-[150px] h-[100px] z-10"
          height={150}
          width={170}
          alt="Golden coin decoration"
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
  );
};

export default index;
