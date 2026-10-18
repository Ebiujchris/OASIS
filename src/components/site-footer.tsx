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
          <span>
            <MapPin size={15} aria-hidden="true" />
            {company.locations.join(" & ")}
          </span>
          <p>Contact us for directions to the nearest location.</p>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Oasis Irrigation Solutions</span>
        <span>Smart irrigation. Better harvests.</span>
      </div>
    </footer>
  );
}
