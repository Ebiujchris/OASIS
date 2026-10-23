"use client";

import { ChevronDown } from "lucide-react";
import { useId, useState, type FocusEvent } from "react";
import Link from "next/link";

type HeaderDropdownProps = {
  label: string;
  ariaLabel: string;
  pageHref: string;
  pageLabel: string;
  links: { href: string; label: string }[];
  mobile?: boolean;
  onNavigate?: () => void;
};

export function HeaderDropdown({
  label,
  ariaLabel,
  pageHref,
  pageLabel,
  links,
  mobile = false,
  onNavigate,
}: HeaderDropdownProps) {
  const menuId = useId();
  const [hovered, setHovered] = useState(false);
  const [focused, setFocused] = useState(false);
  const [clicked, setClicked] = useState(false);
  const isOpen = mobile ? clicked : hovered || focused || clicked;

  function handleBlur(event: FocusEvent<HTMLDivElement>) {
    if (!event.currentTarget.contains(event.relatedTarget as Node | null)) {
      setFocused(false);
    }
  }

  return (
    <div
      className={`header-nav-dropdown${isOpen ? " is-open" : ""}${mobile ? " header-nav-dropdown-mobile" : ""}`}
      onMouseEnter={mobile ? undefined : () => setHovered(true)}
      onMouseLeave={mobile ? undefined : () => setHovered(false)}
      onFocus={mobile ? undefined : () => setFocused(true)}
      onBlur={mobile ? undefined : handleBlur}
    >
      <button
        className="header-nav-trigger"
        type="button"
        aria-expanded={isOpen}
        aria-controls={menuId}
        onClick={() => setClicked((open) => !open)}
      >
        {label} <ChevronDown size={14} aria-hidden="true" />
      </button>
      <nav
        id={menuId}
        className="header-nav-menu"
        aria-label={ariaLabel}
        hidden={!isOpen}
      >
        <Link href={pageHref} onClick={onNavigate}>{pageLabel}</Link>
        {links.map((link) => (
          <Link key={link.href} href={link.href} onClick={onNavigate}>
            {link.label}
          </Link>
        ))}
      </nav>
    </div>
  );
}
