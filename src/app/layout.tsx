export const metadata = {
  title: "ImmoSense",
  description: "AI-powered assistant",
};

export const runtime = "edge";

export default function RootLayout({
  children,
}: {
  readonly children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className="flex flex-col font-sans bg-background text-foreground transition-colors duration-300 overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
