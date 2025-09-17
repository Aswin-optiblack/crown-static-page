import Image from "next/image";
import Card from "@/components/FeatureCard";

const index = () => {
  return (
    <div id="section-three" className=" p-20 grid md:grid-cols-2 grid-cols-1 gap-4  mt-0 relative ">
      <div className="flex flex-col items-start justify-center gap-6  text-start max-w-2xl ">
        <h3 className="md:text-4xl text-2xl font-jakarta font-[700] text-white text-start">
          Spread the Love Anytime 📲
        </h3>
        <p className="text-white font-sans font-[700] md:text-2xl text-xl md:mt-6 mb-5 md:mb-0">
          On Crowned, you can hype up your friends, give flowers publicly, and start crown chains that go viral. Download the app to keep the good vibes going.
        </p>
      </div>
      <div className="relative flex items-center justify-center flex-col basis-full gap-8 bg-gradient-to-tl from-[#583A73] to-[#8459AB] px-6 py-12 rounded-lg">
        <div className="h-[300px] w-[2px] absolute right-1/2 transform -translate-x-1/2 z-0 bg-white"></div>
        <Card text="Someone crowns you anonymously" imageClr="#E2E3FA" imagesrc="/assets/third_section_first_icon.svg" />
        <Card text="You open the app to see your crown" imageClr="#C1F2F2" imagesrc="/assets/third_section_second_icon.svg" />
        <Card text="Start your own chain and crown others" imageClr="#D4ECFF" imagesrc="/assets/third_section_third_icon.svg" />
        <Card text="Climb the leaderboard and unlock reveals" imageClr="#FFEFBB" imagesrc="/assets/third_section_fourth_icon.svg" />
      </div>
      <Image
        src="/assets/gold_star.svg"
        alt="Gold star decoration"
        width={25}
        height={25}
        className="absolute top-1/12 left-1/4"
        loading="lazy"
      />

      <Image
        src="/assets/gold_star.svg"
        alt="Gold star decoration"
        width={28}
        height={28}
        className="absolute bottom-1/5 left-1/12"
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

export default index;
