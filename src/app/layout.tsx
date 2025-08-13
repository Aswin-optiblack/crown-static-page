import "./globals.css";
import { Urbanist, Plus_Jakarta_Sans, Bowlby_One } from "next/font/google";
import { Metadata } from "next";

const urbanist = Urbanist({
   weight: "400",
  subsets: ["latin"],
  variable: "--font-urbanist",
});

const plusJakarta = Plus_Jakarta_Sans({
   weight: "400",
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
});

const bowlbyOne = Bowlby_One({
  weight: "400", 
  subsets: ["latin"],
  variable: "--font-bowlby",
});

export const metadata: Metadata = {
  title: "You've Been Crowned! | Crowned App - Turn Compliments into Culture",
  description: "Someone from your circle just crowned you on Crowned — the app where compliments turn into culture and giving flowers is a public flex. Download now to reveal your crown!",
  keywords: ["Crowned", "compliments", "social app", "anonymous", "crowns", "community", "recognition", "social media"],
  authors: [{ name: "Crowned" }],
  creator: "Crowned",
  publisher: "Crowned",
  robots: {
    index: true,
    follow: true,
  },
  openGraph: {
    title: "You've Been Crowned! | Crowned App",
    description: "Someone just crowned you anonymously! Open Crowned to see who thinks you're amazing and start your own crown chain.",
    url: "https://crown.getcrowned.fun",
    siteName: "Crowned",
    type: "website",
    images: [
      {
        url: "/assets/crown.svg",
        width: 300,
        height: 200,
        alt: "Crowned App Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "You've Been Crowned! | Crowned App",
    description: "Someone just crowned you anonymously! Open Crowned to see who thinks you're amazing.",
    images: ["/assets/crown.svg"],
  },
  icons: {
    icon: "/assets/crown.svg",
    shortcut: "/assets/crown.svg",
    apple: "/assets/crown.svg",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        {/* <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link rel="dns-prefetch" href="https://fonts.googleapis.com" />
        <link rel="dns-prefetch" href="https://fonts.gstatic.com" /> */}
      </head>
      <body
        className={`${urbanist.variable} ${plusJakarta.variable} ${bowlbyOne.variable} antialiased ` }
      >
        {children}
      </body>
    </html>
  );
}
