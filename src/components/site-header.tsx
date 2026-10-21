import { Menu, Phone } from "lucide-react";
import Link from "next/link";
import { company, services } from "@/data/site";
import { Brand } from "./brand";
import { HeaderDropdown } from "./header-dropdown";

function AboutLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <HeaderDropdown
      label="About"
      ariaLabel="About Oasis"
      pageHref="/about/"
      pageLabel="About Oasis"
      links={[{ href: "/about/team/", label: "Our Team" }]}
      mobile={mobile}
    />
  );
}

function ServicesLinks({ mobile = false }: { mobile?: boolean }) {
  return (
    <HeaderDropdown
      label="Services"
      ariaLabel="Irrigation services"
      pageHref="/services/"
      pageLabel="All services"
      links={services.map((service) => ({
        href: `/services/#${service.slug}`,
        label: service.title,
      }))}
      mobile={mobile}
    />
  );
}

export function SiteHeader() {
  return (
    <header className="site-header">
      <svg
        className="header-leaves"
        viewBox="0 0 180 150"
        fill="none"
        aria-hidden="true"
      >
        <path d="M179 148C141 121 116 89 102 5M164 135c-3-24 7-40 25-49-1 24-8 41-25 49Zm-13-14c-22-14-30-31-26-53 19 14 28 31 26 53Zm-20-25c-6-23 0-41 17-56 7 22 2 41-17 56Zm-12-23C96 55 84 39 83 17c22 9 35 25 36 47Zm-13-29C91 21 100 8 119 1c-1 21-12 36-33 43Z" />
        <path d="M179 148c-35-7-65-22-92-46M121 124c-22-10-33-26-34-49 20 10 31 26 34 49Zm-17-14C83 98 76 80 84 58c15 16 22 33 20 52Zm-17-15C65 83 58 65 65 43c16 15 24 32 22 52Z" />
      </svg>
      <div className="header-inner">
        <Brand light motto />
        <nav className="desktop-nav" aria-label="Main navigation">
          <Link href="/">Home</Link>
          <AboutLinks />
          <Link href="/products/">Products</Link>
          <ServicesLinks />
          <Link href="/projects/">Projects</Link>
          <Link href="/contact/">Contact</Link>
        </nav>
        <a className="header-phone" href={`tel:${company.phone}`}>
          <Phone size={15} aria-hidden="true" />
          {company.phoneDisplay}
        </a>
        <details className="mobile-menu">
          <summary aria-label="Open navigation menu">
            <Menu size={22} aria-hidden="true" />
          </summary>
          <nav aria-label="Mobile navigation">
            <Link href="/">Home</Link>
            <AboutLinks mobile />
            <Link href="/products/">Products</Link>
            <ServicesLinks mobile />
            <Link href="/projects/">Projects</Link>
            <Link href="/contact/">Contact</Link>
            <a href={`tel:${company.phone}`}>
              <Phone size={15} aria-hidden="true" />
              {company.phoneDisplay}
            </a>
          </nav>
        </details>
      </div>
    </header>
  );
}
