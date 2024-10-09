import localFont from "next/font/local";
import {Secular_One} from "@next/font/google"
import "./globals.css";



const galactic = localFont({
  src: "./fonts/galacticondensed-regular-ffc-web.woff",
  variable: "--font-galactic",
  weight: "100 900",
});

export const metadata = {
  title: "Chlomo's portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${galactic.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
