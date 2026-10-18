import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { whatsappLink } from "@/data/site";

type WhatsAppCtaProps = {
  compact?: boolean;
};

export function WhatsAppCta({ compact = false }: WhatsAppCtaProps) {
  return (
    <Link
      className={`button${compact ? " button-small" : ""}`}
      href={whatsappLink("Hello Oasis, I would like to discuss an irrigation solution for my farm.")}
      target="_blank"
      rel="noreferrer"
    >
      {compact ? (
        <>Talk to our team <ArrowUpRight size={16} aria-hidden="true" /></>
      ) : (
        <><MessageCircle size={17} aria-hidden="true" /> Chat on WhatsApp</>
      )}
    </Link>
  );
}
