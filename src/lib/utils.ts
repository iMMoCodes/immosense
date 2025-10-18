import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function localizedLink(path: string, locale: string) {
  if (path.startsWith("#")) {
    // Hash link — prepend locale root
    return `/${locale}${path}`;
  }

  if (path.startsWith("/")) {
    // Absolute path — prepend locale if missing
    const parts = path.split("/");
    if (parts[1] && ["en", "fi"].includes(parts[1])) return path; // already prefixed
    return `/${locale}${path}`;
  }

  // Relative paths — prepend locale
  return `/${locale}/${path}`;
}
