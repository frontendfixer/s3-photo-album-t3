import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ThemeProvider } from "./components/theme-provider";
import ThemeToggle from "@/components/layout/themeToggle";

export const metadata: Metadata = {
  title: "Photo Album",
  description: "Photo album app built with Next.js, Drizzle, and Tailwind CSS.",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable}`}
      suppressHydrationWarning
    >
      <head />
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
      <div className="absolute bottom-4 right-4">
        <ThemeToggle />
      </div>
    </html>
  );
}
