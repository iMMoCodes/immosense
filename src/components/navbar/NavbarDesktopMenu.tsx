"use client";

import { localizedLink } from "@/lib/utils";
import { TNavLink } from "@/types";
import Link from "next/link";
import { motion } from "framer-motion";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { ModeToggle } from "../ModeToggle";

interface NavbarDesktopMenuProps {
  readonly locale: string;
  readonly activeHash: string;
  navLinks: TNavLink[];
}

const NavbarDesktopMenu = ({
  locale,
  activeHash,
  navLinks,
}: NavbarDesktopMenuProps) => {
  return (
    <div className="hidden md:flex items-center gap-8">
      {navLinks.map((link) => (
        <Link
          key={link.href}
          href={localizedLink(link.href, locale)}
          className={`relative text-foreground transition-colors duration-200 hover:text-primary font-medium group ${
            activeHash === link.href ? "font-semibold text-primary" : ""
          }`}
        >
          {link.label}
          <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-primary to-secondary group-hover:w-full transition-all duration-300" />
        </Link>
      ))}

      <motion.div whileHover={{ rotate: 15 }}>
        <LanguageSwitcher />
      </motion.div>

      <ModeToggle />
    </div>
  );
};

export default NavbarDesktopMenu;
