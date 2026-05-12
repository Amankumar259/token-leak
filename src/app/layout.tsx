import type { Metadata } from "next";
import "./globals.css";

import { Navbar } from "@/components/navbar";

export const metadata = {
  title: "SpendPilot — AI Spend Optimization",

  description:
    "Audit and optimize your AI tooling costs with intelligent recommendations.",

  keywords: [
    "AI cost optimization",
    "AI audit",
    "OpenAI",
    "Claude",
    "Gemini",
    "Cursor",
    "SaaS",
  ],

  openGraph: {
    title: "SpendPilot — AI Spend Optimization",

    description:
      "Reduce AI tooling costs with automated infrastructure audits.",

    url: "https://your-vercel-url.vercel.app",

    siteName: "SpendPilot",

    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
