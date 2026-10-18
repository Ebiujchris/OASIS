import Link from "next/link";
import { WhatsAppCta } from "@/components/whatsapp-cta";

export default function NotFound() {
  return (
    <section className="not-found page-width">
      <span className="eyebrow">404 / Page not found</span>
      <h1>Looks like this path ran dry.</h1>
      <p>The page may have moved, but Oasis is still here to help.</p>
      <div className="hero-actions">
        <Link className="button" href="/">Back to home</Link>
        <WhatsAppCta />
      </div>
    </section>
  );
}
