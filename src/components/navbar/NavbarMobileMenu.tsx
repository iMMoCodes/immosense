"use client";

import { localizedLink } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import React from "react";
import { LanguageSwitcher } from "../LanguageSwitcher";
import { TNavLink } from "@/types";

interface NavbarMobileMenuProps {
  readonly locale: string;
  readonly mobileOpen: boolean;
  readonly setMobileOpen: (open: boolean) => void;
  navLinks: TNavLink[];
}

const NavbarMobileMenu = ({
  locale,
  mobileOpen,
  setMobileOpen,
  navLinks,
}: NavbarMobileMenuProps) => {
  return (
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="bg-background dark:bg-background/95 w-full px-4 py-4 flex flex-col gap-4 border-t border-border rounded-b-xl shadow-lg">
            {navLinks.map((link) => (
              <motion.div
                key={link.href}
                whileTap={{ scale: 0.95 }}
                className="overflow-hidden rounded-md"
              >
                <Link
                  href={localizedLink(link.href, locale)}
                  className="text-foreground hover:text-primary transition-colors duration-200 py-2 block px-2"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
            <motion.div whileTap={{ scale: 0.95 }}>
              <LanguageSwitcher />
            </motion.div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavbarMobileMenu;
