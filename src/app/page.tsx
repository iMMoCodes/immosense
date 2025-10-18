import { headers } from "next/headers";
import { redirect } from "next/navigation";

const supportedLocales = new Set(["en", "fi"]);
const defaultLocale = "en";

export default async function Page() {
  const acceptLanguage = (await headers()).get("accept-language");
  const preferred = acceptLanguage?.split(",")[0]?.split("-")[0];
  const locale = supportedLocales.has(preferred!) ? preferred : defaultLocale;

  redirect(`/${locale}`);
}
