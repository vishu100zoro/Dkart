
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import ThemeProvide from "./ThemeProvide";
import "./globals.css"
import GlobalStyleProvide from "@/components/GlobalStyleProvide";
const inter = Inter({ subsets: ["latin"] });
import styled from "styled-components";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
        <ThemeProvide>
    {/* <GlobalStyleProvide> */}
      <html lang="en">
          <body className={inter.className} >
             <Navbar />
             {children}
          </body>
      </html>
    {/* </GlobalStyleProvide> */}
        </ThemeProvide>
  );
}
