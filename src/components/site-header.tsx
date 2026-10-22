"use client";

import { Menu, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { company, services } from "@/data/site";
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
      links={services.map((s) => ({
        href: `/services/${s.slug}/`,
        label: s.title,
      }))}
      mobile={mobile}
    />
  );
}

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="sh">

        {/* ── Left: logo + text ── */}
        <div className="sh__left">
          <Link href="/" className="sh__brand" aria-label="Oasis Irrigation Solutions">
            <Image
              src="/images/oasis-logo.jpg"
              alt="Oasis logo"
              width={90}
              height={90}
              priority
              className="sh__logoimg"
            />
            <div className="sh__text">
              <span className="sh__name">OASIS</span>
              <span className="sh__sub">IRRIGATION SOLUTIONS</span>
              <span className="sh__motto">Smart Irrigation. Better Harvests. Sustainable Future.</span>
            </div>
          </Link>

        </div>

        <nav className="sh__nav" aria-label="Main navigation">
          <Link href="/" className="sh__link">Home</Link>
          <AboutLinks />
          <Link href="/products/" className="sh__link">Products</Link>
          <ServicesLinks />
          <Link href="/projects/" className="sh__link">Projects</Link>
          <Link href="/contact/" className="sh__link sh__link--cta">Contact</Link>
        </nav>

        {/* ── Right: leaf photo ── */}
        <div className="sh__leaves-wrap" aria-hidden="true">
          <Image
            src="/images/header-leaves.png"
            alt=""
            fill
            priority
            className="sh__leaves"
            sizes="45vw"
          />
        </div>

        {/* Curved green-to-bronze ribbon along the header's lower edge */}
        <svg
          className="sh__curve"
          viewBox="0 0 1440 80"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          <defs>
            <linearGradient
              id="header-curve-gradient"
              x1="0"
              y1="0"
              x2="1"
              y2="0"
              gradientUnits="objectBoundingBox"
            >
              <stop offset="0%" stopColor="#214d2b" />
              <stop offset="47%" stopColor="#214d2b" />
              <stop offset="53%" stopColor="#6b4c1e" />
              <stop offset="100%" stopColor="#6b4c1e" />
            </linearGradient>
          </defs>
          <path
            d="M0,46 C320,65 540,76 760,62 C1010,45 1240,18 1440,4 L1440,16 C1240,30 1010,57 760,74 C540,88 320,77 0,58 Z"
            fill="url(#header-curve-gradient)"
          />
        </svg>

        {/* ── Mobile burger ── */}
        <button
          className="sh__burger"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="sh-mobile-menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>

      </header>

      {/* ── Mobile slide-in menu ── */}
      {menuOpen && (
        <div
          className="sh-mobile-menu"
          id="sh-mobile-menu"
          onClick={() => setMenuOpen(false)}
          onKeyDown={(event) => {
            if (event.key === "Escape") setMenuOpen(false);
          }}
        >
          <div className="sh-mobile-menu__panel" onClick={(e) => e.stopPropagation()}>
            <div className="sh-mobile-menu__head">
              <Image src="/images/oasis-logo.jpg" alt="" width={40} height={40}
                style={{ borderRadius: "50%", objectFit: "cover" }} />
              <span>OASIS</span>
              <button
                className="sh-mobile-menu__close"
                type="button"
                aria-label="Close menu"
                onClick={() => setMenuOpen(false)}
              >
                <X size={22} aria-hidden="true" />
              </button>
            </div>
            <Link href="/"          onClick={() => setMenuOpen(false)}>Home</Link>
            <AboutLinks mobile />
            <Link href="/products/" onClick={() => setMenuOpen(false)}>Products</Link>
            <ServicesLinks mobile />
            <Link href="/projects/" onClick={() => setMenuOpen(false)}>Projects</Link>
            <Link href="/contact/"  onClick={() => setMenuOpen(false)}>Contact</Link>
            <a href={`tel:${company.phone}`}>
              <Phone size={14} /> {company.phoneDisplay}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
