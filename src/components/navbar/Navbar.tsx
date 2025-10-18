"use client";

import { useState, useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import NavbarLogo from "./NavbarLogo";
import NavbarDesktopMenu from "./NavbarDesktopMenu";
import NavbarMenuButton from "./NavbarMenuButton";
import NavbarMobileMenu from "./NavbarMobileMenu";

const TAILWIND_MD_BREAKPOINT = 768;

export function Navbar() {
  const t = useTranslations("nav");
  const locale = useLocale();

  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");

  useEffect(() => {
    const handleScroll = () => setScrolled(globalThis.scrollY > 50);
    globalThis.addEventListener("scroll", handleScroll);

    const handleHashChange = () => setActiveHash(globalThis.location.hash);
    globalThis.addEventListener("hashchange", handleHashChange);
    handleHashChange();

    return () => {
      globalThis.removeEventListener("scroll", handleScroll);
      globalThis.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= TAILWIND_MD_BREAKPOINT) {
        setMobileOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks = [{ href: "/chat", label: t("chat") }];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 120 }}
      className={`fixed w-full z-50 backdrop-blur-lg transition-shadow duration-300 ${
        scrolled
          ? "shadow-lg bg-background/90 dark:bg-background/80"
          : "bg-background/70 dark:bg-background/70"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <NavbarLogo locale={locale} />
        <NavbarDesktopMenu
          locale={locale}
          activeHash={activeHash}
          navLinks={navLinks}
        />
        <NavbarMenuButton
          mobileOpen={mobileOpen}
          setMobileOpen={setMobileOpen}
        />
      </div>

      <NavbarMobileMenu
        locale={locale}
        mobileOpen={mobileOpen}
        setMobileOpen={setMobileOpen}
        navLinks={navLinks}
      />
    </motion.nav>
  );
}
