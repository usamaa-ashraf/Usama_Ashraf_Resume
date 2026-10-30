import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Usama Ashraf — Project & Operations Lead",
  description:
    "Project Management & Operations Leader with 5+ years steering cross-functional engineering, design, and finance teams across Web3, AI, and Fintech products.",
  keywords: [
    "Usama Ashraf",
    "Project Manager",
    "Operations Lead",
    "Business Development",
    "Web3",
    "AI",
    "Fintech",
    "Portfolio",
  ],
  authors: [{ name: "Usama Ashraf" }],
  openGraph: {
    title: "Usama Ashraf — Project & Operations Lead",
    description:
      "Bridging technical execution and business strategy across Web3, AI, and Fintech products.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#080c14" },
  ],
};

const themeScript = `(function(){try{var t=localStorage.getItem("theme");if(t!=="light"&&t!=="dark"){t="light";}document.documentElement.dataset.theme=t;}catch(e){document.documentElement.dataset.theme="light";}})();`;

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="min-h-screen bg-base text-ink antialiased">{children}</body>
    </html>
  );
}
