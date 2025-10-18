"use client";

import FooterCopyright from "./FooterCopyright";
import FooterSocialLinks from "./FooterSocialLinks";

export function Footer() {
  return (
    <footer className="bg-background dark:bg-background/95 border-t border-border py-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <FooterCopyright />
        <FooterSocialLinks />
      </div>
    </footer>
  );
}
