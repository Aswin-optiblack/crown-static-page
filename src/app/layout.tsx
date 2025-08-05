import "./globals.css";
import { Urbanist, Plus_Jakarta_Sans, Bowlby_One } from "next/font/google";

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
  weight: "400", // Only one weight available
  subsets: ["latin"],
  variable: "--font-bowlby",
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${plusJakarta.variable} ${bowlbyOne.variable} antialiased ` }
      >
        {children}
      </body>
    </html>
  );
}
