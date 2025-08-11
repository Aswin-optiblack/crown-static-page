import HowItWorks from "@/sections/how-it-works";
import CrownShowcase from "@/sections/crown-showcase";
import WelcomeHero from "@/sections/welcome-hero";
import MysteryReveal from "@/sections/mystery-reveal";
import AppDownload from "@/sections/app-download";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Crowned",
    "description": "The app where compliments turn into culture and giving flowers is a public flex.",
    "url": "https://crown.getcrowned.fun",
    "applicationCategory": "SocialNetworkingApplication",
    "operatingSystem": ["iOS", "Android"],
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Crowned"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="container ">
        <WelcomeHero />
        <MysteryReveal />
        <CrownShowcase />
        <HowItWorks />
        <AppDownload />
      </div>
    </>
  );
}
