import Image from "next/image";
import Header from "@/components/header";
import Footer from "@/components/footer";
import SectionOne from "@/sections/first";
import SectionTwo from "@/sections/second";
import SectionThree from "@/sections/third";
import SectionFour from "@/sections/fourth";
import SectionFive from "@/sections/fifth";
import SectionSix from "@/sections/sixth";
import SectioSeven from "@/sections/seventh";
import Hero from "@/sections/hero";
import HeroSecond from "@/sections/hero_second";
import Bottom from "@/sections/bottom";

export default function Home() {
  return (
    <div className="container bg-gradient-to-r from-[#6232C2] to-[#9F54DF] min-h-screen">
      {/* <Header /> */}
      <Hero />
      <HeroSecond />

      <SectionFour />

       <SectionThree />
<Bottom />

      
  
    </div>
  );
}
