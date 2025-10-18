"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useLocale, useTranslations } from "next-intl";
import { Sparkles } from "lucide-react";

export default function HomePage() {
  const t = useTranslations("main");
  const locale = useLocale();

  return (
    <main className="space-y-32">
      <motion.section
        className="text-center py-32 px-4 sm:px-6 lg:px-8 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-5xl md:text-6xl font-extrabold tracking-tight bg-gradient-to-r from-primary to-secondary text-transparent bg-clip-text">
          iMMoSense
        </h1>

        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
          {t("title")}
        </p>

        <div className="flex justify-center gap-4 mt-8 flex-wrap">
          <Link href={`/${locale}/chat`}>
            <Button size="lg" className="gap-2">
              <Sparkles className="w-5 h-5" />
              {t("tryDemo")}
            </Button>
          </Link>
          <Link href={`/${locale}#about`}>
            <Button size="lg" variant="outline">
              {t("learnMore")}
            </Button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
