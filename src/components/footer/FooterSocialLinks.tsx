"use client";

import Link from "next/link";
import { SiGithub } from "react-icons/si";

const FooterSocialLinks = () => {
  const socialLinks = [
    { href: "https://github.com/immoCodes", icon: SiGithub, label: "GitHub" },
  ];

  return (
    <div className="flex gap-4">
      {socialLinks.map((link) => (
        <Link
          key={link.href}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-muted-foreground hover:text-primary transition-colors duration-200"
          aria-label={link.label}
        >
          <link.icon className="w-5 h-5" />
        </Link>
      ))}
    </div>
  );
};

export default FooterSocialLinks;
