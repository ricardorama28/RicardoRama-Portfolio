import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ricardo Rama | Product-Oriented Developer",
  description:
    "I detect real problems and build solutions that work. React, TypeScript, Chrome Extensions, and product thinking applied to real-world software.",
  openGraph: {
    title: "Ricardo Rama | Product-Oriented Developer",
    description:
      "I detect real problems and build solutions that work. React, TypeScript, and product thinking applied to real-world software.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="font-sans">
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
