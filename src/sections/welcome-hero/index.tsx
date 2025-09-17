"use client";
import Image from "next/image";
import { usePathname } from "next/navigation";

interface WelcomeHeroProps {
  userName?: string;
  fullName?: string;
  onCrownThemClick?: () => void;
  showSuccess?: boolean;
  onCloseSuccess?: () => void;
  onDownloadClick?: () => void;
}

const WelcomeHero = ({ userName, fullName, onCrownThemClick, showSuccess, onCloseSuccess, onDownloadClick }: WelcomeHeroProps) => {
  const pathname = usePathname();
  const isCrownPage = pathname === "/crown-me";

  return (
    <div
      className="relative w-full bg-cover bg-center bg-no-repeat pb-40 pt-5"
      style={{
        backgroundImage: `url('/assets/background.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex flex-col items-center justify-center md:pt-20 md:mb-10 pt-8 mb-4 text-[#F7F5FA]">
        <Image
          src="/assets/crown.svg"
          className="md:h-[200px] sm:h-[170px] h-[130px] mb-4 transform rotate-6"
          height={200}
          width={300}
          alt="Golden crown logo"
          priority
        />
        {showSuccess ? (
          // Success content
          <div className="bg-gradient-to-br from-purple-50 via-orange-50 to-purple-300 rounded-3xl p-8 sm:p-12 mx-4 max-w-xl w-full shadow-2xl transform transition-all relative">
            <div className="text-center">
              {/* Title */}
              <h3 className="text-2xl sm:text-4xl font-bold text-[#212121] mb-4">
                🎉 Yippee! You just crowned [{userName}]!
              </h3>

              {/* Message */}
              <p className="text-[#616161] text-lg sm:text-2xl my-6">
                Want to keep the vibes going? Download Crowned to crown someone else — or even yourself!
              </p>

              {/* Download button */}
              <button
                onClick={onDownloadClick}
                className="cursor-pointer w-full bg-gradient-to-r from-[#8459AB] to-[#583A73] text-white font-semibold py-3 px-6 rounded-full hover:shadow-lg transition-all duration-200 mb-4"
              >
                Download App
              </button>

              {/* Close button */}
              <button
                onClick={onCloseSuccess}
                className="cursor-pointer text-[#212121] hover:text-[#583A73] transition-colors duration-200 absolute top-4 right-4 p-2"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <Image
              src={"/assets/crown.svg"}
              alt="Golden crown logo"
              width={100}
              height={100}
              className='absolute w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] -top-[20%] sm:-top-[30%] left-1/2 transform -translate-x-1/2 rotate-[-10deg]'
            />
          </div>
        ) : (
          // Normal content
          <>
            <h1 className="font-bowlby font-[400] md:text-6xl sm:text-4xl text-3xl z-50 text-center max-w-4xl leading-tight tracking-wide">
              {isCrownPage
                ? `Crown (${
                    fullName ? fullName : userName ? userName : "sender's name"
                  }) and Appreciate their personality`
                : "You've Been Crowned!"}
            </h1>
            <p className="font-sans font-[500] tracking-wider md:text-3xl sm:text-xl text-lg max-w-5xl w-full text-center md:pt-10 sm:pt-6 pt-4 md:leading-[40px] sm:leading-8 leading-7 z-50 px-2">
              {isCrownPage
                ? "They've sent you a link to hype them up on Crowned — the app where giving flowers and spreading positivity is a public flex."
                : "Someone from your circle just crowned you on Crowned — the app where compliments turn into culture and giving flowers is a public flex."}
            </p>

            <button
              onClick={onCrownThemClick}
              className="my-8  w-full max-w-md font-[800] text-2xl  bg-gradient-to-r from-[#7024B4] to-[#F8A80D] text-white font-jakarta rounded-full p-1"
            >
              <span className="flex w-full  items-center justify-center cursor-pointer hover:opacity-90 transition-all bg-gradient-to-tl from-purple-600 via-[#EF258A] to-orange-400 text-white rounded-full  max-w-md px-16 py-4">
                Crown Them
              </span>
            </button>
          </>
        )}

        <div className="absolute left-20 md:top-[20%] top-1/4 transform rotate-[-0deg] md:block hidden">
          <Image
            src="/assets/lock.svg"
            className="md:h-[100px] h-[70px] z-10"
            height={70}
            width={70}
            alt="Security lock icon"
            loading="lazy"
          />
        </div>
        <div className="absolute right-0  -bottom-4  transform rotate-[0deg] md:block hidden">
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
    </div>
  );
};

export default WelcomeHero;
