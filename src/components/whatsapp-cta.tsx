import { ArrowUpRight, MessageCircle } from "lucide-react";
import Link from "next/link";
import { company, whatsappLinkForNumber } from "@/data/site";

type WhatsAppCtaProps = {
  compact?: boolean;
  whatsappNumber?: string;
};

export function WhatsAppCta({
  compact = false,
  whatsappNumber = company.whatsapp,
}: WhatsAppCtaProps) {
  return (
    <Link
      className={`button${compact ? " button-small" : ""}`}
      href={whatsappLinkForNumber(
        whatsappNumber,
        "Hello Oasis, I would like to discuss an irrigation solution for my farm.",
      )}
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
