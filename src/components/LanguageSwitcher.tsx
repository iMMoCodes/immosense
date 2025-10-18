"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLocale, useTranslations } from "next-intl";
import { Globe2, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

const LANGUAGES = [
  { code: "en", label: "English", flag: "🇬🇧" },
  { code: "fi", label: "Suomi", flag: "🇫🇮" },
];

export function LanguageSwitcher() {
  const t = useTranslations("languageSwitcher");
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();

  const switchLocale = (nextLocale: string) => {
    if (nextLocale === locale) return;
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          aria-label="Change language"
          className="relative rounded-full border border-border/50 hover:border-primary/40 hover:bg-primary/5 dark:hover:bg-primary/10 backdrop-blur-sm transition-all duration-200"
        >
          <Globe2 className="w-5 h-5 text-muted-foreground" />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        sideOffset={8}
        className="w-44 rounded-xl shadow-lg border border-border/60 backdrop-blur-md bg-background/95 dark:bg-background/90 transition-all duration-200"
      >
        <DropdownMenuLabel className="text-xs text-muted-foreground uppercase tracking-wide">
          {t("language")}
        </DropdownMenuLabel>
        <DropdownMenuSeparator className="bg-border/40" />
        {LANGUAGES.map(({ code, label, flag }) => (
          <DropdownMenuItem
            key={code}
            onClick={() => switchLocale(code)}
            className="flex items-center justify-between text-sm font-medium hover:bg-primary/10 hover:text-primary rounded-md transition-colors duration-150 cursor-pointer"
          >
            <span className="flex items-center gap-2">
              <span className="text-lg">{flag}</span> {label}
            </span>
            {locale === code && (
              <Check className="w-4 h-4 text-primary ml-1" aria-hidden="true" />
            )}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
