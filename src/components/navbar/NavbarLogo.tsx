"use client";

import Image from "next/image";
import Link from "next/link";
import Logo from "@assets/logo.png";

interface NavbarLogoProps {
  readonly locale: string;
}

const NavbarLogo = ({ locale }: NavbarLogoProps) => {
  return (
    <Link
      href={`/${locale}`}
      className="relative flex items-center gap-2 group"
    >
      <div className="relative w-[120px] h-[32px] sm:w-[150px] sm:h-[40px] rounded-xl overflow-hidden">
        <Image
          src={Logo}
          alt="iMMoSense Logo"
          fill
          className="object-contain transition-transform duration-300 group-hover:scale-105"
          priority
        />
      </div>
    </Link>
  );
};

export default NavbarLogo;
