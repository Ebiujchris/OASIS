import type { Metadata } from "next";
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
    icon: "/images/oasis-logo.jpg",
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
