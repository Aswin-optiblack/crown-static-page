"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface WelcomeHeroProps {
  userName?: string;
}

const WelcomeHero = ({ userName }: WelcomeHeroProps) => {
  const pathname = usePathname();
  const isCrownPage = pathname === "/crown-me";

  return (
    <div className="relative flex flex-col items-center justify-center md:pt-20 md:mb-10 pt-8 mb-4 px-4 text-[#F7F5FA]">
      <Image
        src="/assets/crown.svg"
        className="md:h-[200px] sm:h-[170px] h-[130px] mb-4"
        height={200}
        width={300}
        alt="Golden crown logo"
        priority
      />
      <h1 className="font-jakarta font-[800] md:text-6xl sm:text-4xl text-3xl z-50 text-center max-w-4xl leading-tight">
        {isCrownPage ? `Crown (${userName ? userName: "sender's name"}) and Appreciate their personality` : "You've Been Crowned!"}
      </h1>
      <p className="font-sans font-[600] md:text-3xl sm:text-xl text-lg max-w-5xl w-full text-center md:pt-10 sm:pt-6 pt-4 md:leading-[40px] sm:leading-8 leading-7 z-50 px-2">
        {isCrownPage 
          ? "They've sent you a link to hype them up on Crowned — the app where giving flowers and spreading positivity is a public flex."
          : "Someone from your circle just crowned you on Crowned — the app where compliments turn into culture and giving flowers is a public flex."
        }
      </p>

      <div className="absolute left-0 md:top-1/3 top-1/4 transform rotate-[-20deg] md:block hidden">
        <Image
          src="/assets/lock.svg"
          className="md:h-[100px] h-[70px] z-10"
          height={70}
          width={70}
          alt="Security lock icon"
          loading="lazy"
        />
      </div>
      <div className="absolute right-0 bottom-0 transform rotate-[0deg] md:block hidden">
        <Image
          src="/assets/fifth_section_coin.svg"
          className="md:h-[150px] h-[100px] z-10"
          height={150}
          width={170}
          alt="Golden coin decoration"
          loading="lazy"
        />
      </div>

      <div className="absolute md:top-8 md:right-8 top-4 right-4">
        <Image
          src="/assets/bg_star.svg"
          className="md:w-10 md:h-10 w-6 h-6"
          height={40}
          width={40}
          alt="Decorative star"
          loading="lazy"
        />
      </div>

      <div className="absolute md:bottom-8 md:left-8 bottom-4 left-4">
        <Image
          src="/assets/bg_star.svg"
          className="md:w-8 md:h-8 w-5 h-5"
          height={30}
          width={30}
          alt="Decorative star"
          loading="lazy"
        />
      </div>

      <div className="absolute md:top-8 md:left-8 top-4 left-4">
        <Image
          src="/assets/bg_star.svg"
          className="md:w-5 md:h-5 w-4 h-4"
          height={20}
          width={20}
          alt="Decorative star"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default WelcomeHero;
