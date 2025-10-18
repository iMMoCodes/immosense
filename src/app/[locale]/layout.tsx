import type { ReactNode } from "react";
import "@styles/globals.css";
import { notFound } from "next/navigation";
import { Providers } from "@/components/Providers";
import { Navbar } from "@/components/navbar/Navbar";
import { Footer } from "@/components/footer/Footer";

interface Props {
  readonly children: ReactNode;
  readonly params: Promise<{ locale: string }>;
}

const supportedLocales = new Set(["en", "fi"]);

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!supportedLocales.has(locale)) return notFound();

  let messages;
  try {
    messages = (await import(`@/messages/${locale}.json`)).default;
  } catch (e) {
    console.error("Failed to load locale messages for", locale, e);
    return notFound();
  }

  return (
    <Providers locale={locale} messages={messages}>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
          {children}
        </main>
        <Footer />
      </div>
    </Providers>
  );
}
