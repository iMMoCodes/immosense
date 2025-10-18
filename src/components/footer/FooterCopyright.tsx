"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import React from "react";

const FooterCopyright = () => {
  const t = useTranslations("footer");

  return (
    <p className="text-muted-foreground text-sm">
      © {new Date().getFullYear()} iMMoCodes. {t("builtWith")}{" "}
      <Link
        href="https://nextjs.org/"
        target="_blank"
        className="text-primary hover:underline transition-colors duration-200"
      >
        Next.js
      </Link>{" "}
      &{" "}
      <Link
        href="https://tailwindcss.com/"
        target="_blank"
        className="text-primary hover:underline transition-colors duration-200"
      >
        TailwindCSS
      </Link>
      .
    </p>
  );
};

export default FooterCopyright;
