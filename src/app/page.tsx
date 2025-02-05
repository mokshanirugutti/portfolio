"use client"

import HeroSection from "@/components/hero/HeroSection";
import {HeroUIProvider} from "@heroui/react";
import Image from "next/image";

export default function Home() {
  return (
    <HeroUIProvider>
    <div className="bg-gradient-to-br from-[#17141d]  via-[#241661]  to-[#0c0b1d] min-h-screen md:h-screen text-white relative md:overflow-hidden">
      <Image src="/texture.svg" alt="" className="z-20 absolute top-0 backdrop-blur-md object-cover" fill/>
      <Image src='/circle-scatter-haikei.svg' className="z-10  absolute top-0" alt="" fill/>
      <div className="z-30 relative">
        <HeroSection />
      </div>
      
    </div>
    </HeroUIProvider>
  );
}
