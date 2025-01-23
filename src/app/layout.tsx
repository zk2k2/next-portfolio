import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";

// Configure Open Sans font
const openSans = Open_Sans({
  subsets: ["latin"],
  variable: "--font-open-sans",
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Zied's Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className=" xl:h-full !w-full">
      <body
        className={`${openSans.variable} w-full m-0 xl:h-full bg-white antialiased `}
      >
        {children}
      </body>
    </html>
  );
}
