"use client";

import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";
import { useEffect, useState } from "react";

interface HeaderProps {
  logo?: any,
}

export default function Header({
  logo
}: HeaderProps) {
  const [translateY, setTranslateY] = useState(0);
  const logoUrl = logo ? urlFor(logo).url() : '/logo-header.svg'

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const distanceFromBottom = documentHeight - (scrollTop + windowHeight);
      
      // Instantly hide header when within 400px of bottom, show otherwise
      if (distanceFromBottom <= 400) {
        setTranslateY(-100);
      } else {
        setTranslateY(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className="fixed top-0 w-full pt-2 pb-3 z-50 pointer-events-none sm:pt-4 sm:pb-5 transition-transform duration-500 ease-out"
      style={{ transform: `translateY(${translateY}%)` }}
    >
      <div className="w-full max-w-[1728px] mx-auto px-4 flex items-center justify-center">
        <Image src={logoUrl} width={186} height={96} alt="milk and cookies logo" priority />
      </div>
    </header>
  );
}
