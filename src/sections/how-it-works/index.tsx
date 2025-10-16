"use client";
import Image from "next/image";
import Card from "@/components/FeatureCard";
import { usePathname } from "next/navigation";

const Index = () => {
  const pathname = usePathname();
  const isCrownPage = pathname === "/crown-me";
  return (
    <div id="section-three" className={`  p-5 sm:pt-0 pt-10 grid md:grid-cols-2 grid-cols-1 gap-8  ${isCrownPage ? "mt-0" : "mt-20"} relative `}>
      <div className="flex flex-col items-start justify-center gap-6 text-center max-w-lg mx-auto">
        <Image
        src="/assets/lock.svg"
        className="w-[50px] h-[50px] md:my-1"
        height={50}
        width={50}
        alt="Lock icon"
        loading="lazy"
      />
        <h3 className="md:text-4xl text-2xl font-jakarta font-[700] text-white text-start md:leading-14 leading-10">
          Spread the Love <br />Anytime📲
        </h3>
        <p className="text-white font-sans font-[700] md:text-2xl text-xl md:mt-6 mb-5 md:mb-0 text-start">
          On Crowned, you can hype up your friends,<br />give flowers publicly, and start crown chains<br />that go viral. Download the app to keep<br />the good vibes going.
        </p>
      </div>
      <div
        className="relative flex items-center justify-center flex-col basis-full gap-8 px-6 py-12 mt-5 rounded-lg"
        style={{
          background: 'linear-gradient(286.17deg, rgba(251, 148, 0, 0.3) 0%, rgba(255, 171, 56, 0.3) 100%)',
          backdropFilter: 'blur(94px)'
        }}
      >
        <div className="h-[300px] w-[2px] absolute right-1/2 transform -translate-x-1/2 z-0 bg-white"></div>
        <Card text="Pick a Crown (like “Most Likely to Go Viral”)" imageClr="#E2E3FA" imagesrc="/assets/third_section_first_icon.svg" />
        <Card text="Send it to a friend — anonymous 👀" imageClr="#C1F2F2" imagesrc="/assets/third_section_second_icon.svg" />
        <Card text="They unlock it by crowning someone else" imageClr="#D4ECFF" imagesrc="/assets/third_section_third_icon.svg" />
        <Card text="Build streaks. Get crowned. Go viral." imageClr="#FFEFBB" imagesrc="/assets/third_section_fourth_icon.svg" />
      </div>

      
      <Image
        src="/assets/gray_star.svg"
        alt="Gold star decoration"
        width={15}
        height={15}
        className="absolute top-1/12 left-1/4"
        loading="lazy"
      />

      <Image
        src="/assets/gray_star.svg"
        alt="Gold star decoration"
        width={28}
        height={28}
        className="absolute bottom-1/8 left-1/8"
        loading="lazy"
      />
      <Image
        src="/assets/gold_star.svg"
        alt="Gold star decoration"
        width={24}
        height={24}
        className="absolute bottom-1/6 left-[30%]"
        loading="lazy"
      />

      <Image
        src="/assets/gold_star.svg"
        alt="Gold star decoration"
        width={15}
        height={15}
        className="absolute bottom-10 left-[47%]"
        loading="lazy"
      />

       <Image
        src="/assets/gold_star.svg"
        alt="Gold star decoration"
        width={15}
        height={15}
        className="absolute right-5 top-[47%]"
        loading="lazy"
      />
    </div>
  );
};

export default Index;
