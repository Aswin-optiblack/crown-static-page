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

export default function Home() {
  return (
    <div className="container bg-[#FFFAF1] min-h-screen">
      {/* <Header /> */}
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      {/* <SectionFive />

      <SectionSix /> */}
      <SectioSeven />

      {/* <Footer /> */}
    </div>
  );
}
