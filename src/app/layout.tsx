import type { Metadata } from "next";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL("https://sereniqinfo.com"),
  title: {
    default: "SERENIQ | Enterprise Software Engineering & Intelligent Systems",
    template: "%s | SERENIQ",
  },
  description:
    "SERENIQ designs, develops, and deploys mission-critical custom software, distributed cloud architectures, and production AI solutions for forward-thinking enterprises.",
  keywords: [
    "Enterprise Software Development",
    "Custom Software Engineering",
    "Cloud Architecture",
    "DevOps",
    "Artificial Intelligence",
    "Distributed Systems",
    "Machine Learning",
    "Next.js Development",
    "Go Backend",
    "Kubernetes Consulting",
  ],
  authors: [{ name: "SERENIQ Technologies" }],
  creator: "SERENIQ Technologies",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sereniqinfo.com",
    siteName: "SERENIQ",
    title: "SERENIQ | Enterprise Software Engineering & Intelligent Systems",
    description:
      "Enterprise custom software engineering, scalable cloud infrastructure, and production AI architectures.",
    images: [
      {
        url: "/logo.png",
        width: 1024,
        height: 1024,
        alt: "SERENIQ Software Engineering Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SERENIQ | Enterprise Software Engineering & Intelligent Systems",
    description:
      "Enterprise custom software engineering, scalable cloud infrastructure, and production AI architectures.",
    creator: "@sereniq_tech",
    images: ["/logo.png"],
  },
  icons: {
    icon: [
      { url: "/favicon.ico?v=3", sizes: "any" },
      { url: "/icon.png?v=3", type: "image/png" },
    ],
    shortcut: "/favicon.ico?v=3",
    apple: "/apple-touch-icon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased scroll-smooth"
    >
      <head>
        <link rel="icon" href="/favicon.ico?v=3" sizes="any" />
        <link rel="icon" href="/icon.png?v=3" type="image/png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png?v=3" />
      </head>
      <body className="min-h-full bg-white text-slate-900 flex flex-col antialiased selection:bg-teal-100 selection:text-teal-900 font-sans">
        <SmoothScroll>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <div className="flex-grow flex flex-col pt-16 sm:pt-16 lg:pt-14 pb-24 lg:pb-0">
              {children}
            </div>
            <Footer />
          </div>
        </SmoothScroll>
      </body>
    </html>
  );
}
