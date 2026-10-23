import type { Metadata } from "next";
import Image from "next/image";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Oasis Irrigation Solutions | Smarter Irrigation in Uganda",
    template: "%s | Oasis Irrigation Solutions",
  },
  description:
    "Explore irrigation products, system installation and practical farm support from Oasis Irrigation Solutions in Uganda.",
  applicationName: "Oasis Irrigation Solutions",
  icons: {
    icon: "/images/oasis-logo.webp",
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
        <div className="brand-loading-screen" aria-hidden="true">
          <div className="brand-loading-content">
            <Image
              className="brand-loading-logo"
              src="/images/oasis-logo.webp"
              alt=""
              width={80}
              height={80}
            />
            <span className="brand-loading-name">OASIS</span>
            <span className="brand-loading-tagline">IRRIGATION SOLUTIONS</span>
            <span className="brand-loading-progress" />
          </div>
        </div>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
