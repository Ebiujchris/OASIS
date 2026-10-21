import { ArrowUpRight, MapPin, Phone } from "lucide-react";
import Link from "next/link";
import { company, whatsappLink } from "@/data/site";
import { Brand } from "./brand";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-brand-block">
          <Brand light />
          <p>
            Thoughtful irrigation products and practical support for farms and
            growers.
          </p>
          <a
            className="footer-whatsapp"
            href={whatsappLink("Hello Oasis, I have a question about your irrigation solutions.")}
            target="_blank"
            rel="noreferrer"
          >
            Chat with Oasis <ArrowUpRight size={16} aria-hidden="true" />
          </a>
        </div>
        <div className="footer-column">
          <h2>Explore</h2>
          <Link href="/products/">Products</Link>
          <Link href="/services/">Services</Link>
          <Link href="/about/">About Oasis</Link>
          <Link href="/contact/">Contact</Link>
        </div>
        <div className="footer-column">
          <h2>Get in touch</h2>
          <a href={`tel:${company.phone}`}>
            <Phone size={15} aria-hidden="true" />
            {company.phoneDisplay}
          </a>
          <a
            className="footer-social-link"
            href="https://www.tiktok.com/@oasis.irrigation3?_r=1&_t=ZS-9AiSDSQTBMQ.."
            target="_blank"
            rel="noreferrer"
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              focusable="false"
            >
              <path
                d="M19.6 8.2a7.1 7.1 0 0 1-4.3-1.5v7.1a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.8 2.5V2h3.1a7 7 0 0 0 3.8 4.1v2.1Z"
                transform="translate(-1 1)"
                fill="#69e9e4"
              />
              <path
                d="M19.6 8.2a7.1 7.1 0 0 1-4.3-1.5v7.1a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.8 2.5V2h3.1a7 7 0 0 0 3.8 4.1v2.1Z"
                transform="translate(1 -1)"
                fill="#ff6681"
              />
              <path
                d="M19.6 8.2a7.1 7.1 0 0 1-4.3-1.5v7.1a5.6 5.6 0 1 1-5.6-5.6c.4 0 .8 0 1.2.1v3.1a2.6 2.6 0 1 0 1.8 2.5V2h3.1a7 7 0 0 0 3.8 4.1v2.1Z"
                fill="white"
              />
            </svg>
            TikTok
          </a>
          <span>
            <MapPin size={15} aria-hidden="true" />
            Offices in {company.locations.join(" & ")}
          </span>
          <p>Serving growers throughout Uganda. Contact us for office directions.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Oasis Irrigation Solutions</span>
        <span>Smart irrigation. Better harvests. Sustainable future.</span>
      </div>
    </footer>
  );
}
