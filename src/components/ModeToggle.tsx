"use client";

import * as React from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTranslations } from "next-intl";

export function ModeToggle() {
  const t = useTranslations("modeToggle");
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          size="icon"
          className="relative w-10 h-10 p-2 rounded-full border border-border hover:bg-muted/10 dark:hover:bg-muted/20 transition-colors duration-200"
        >
          <Sun
            className={`absolute w-5 h-5 text-yellow-400 transition-all duration-500 ${
              theme === "dark"
                ? "scale-0 rotate-90 opacity-0"
                : "scale-100 rotate-0 opacity-100"
            }`}
          />
          <Moon
            className={`absolute w-5 h-5 text-blue-400 transition-all duration-500 ${
              theme === "dark"
                ? "scale-100 rotate-0 opacity-100"
                : "scale-0 -rotate-90 opacity-0"
            }`}
          />
          <span className="sr-only">{t("toggleTheme")}</span>
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        align="end"
        className="w-36 bg-background dark:bg-background/95 border border-border rounded-lg shadow-lg p-1"
      >
        <DropdownMenuItem
          className="hover:bg-muted/10 dark:hover:bg-muted/20 transition-colors rounded-md"
          onClick={() => setTheme("light")}
        >
          {t("light")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-muted/10 dark:hover:bg-muted/20 transition-colors rounded-md"
          onClick={() => setTheme("dark")}
        >
          {t("dark")}
        </DropdownMenuItem>
        <DropdownMenuItem
          className="hover:bg-muted/10 dark:hover:bg-muted/20 transition-colors rounded-md"
          onClick={() => setTheme("system")}
        >
          {t("system")}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
