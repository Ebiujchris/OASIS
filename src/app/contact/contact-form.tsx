"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { FormEvent, useState } from "react";
import { whatsappLink } from "@/data/site";

export function ContactForm() {
  const [status, setStatus] = useState("");

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Oasis, I would like to request a quotation.",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Farm location: ${formData.get("location") || "Not provided"}`,
      `Irrigation need: ${formData.get("need")}`,
      `Project details: ${formData.get("details") || "Not provided"}`,
    ].join("\n");

    const whatsappWindow = window.open(whatsappLink(message), "_blank");
    if (whatsappWindow) {
      whatsappWindow.opener = null;
      setStatus("WhatsApp opened in a new tab. Review your message and send it to Oasis.");
    } else {
      window.location.assign(whatsappLink(message));
    }
  }

  return (
    <form className="quote-form" onSubmit={handleSubmit}>
      <div className="form-heading">
        <span className="form-icon"><MessageCircle size={18} aria-hidden="true" /></span>
        <div>
          <h2>Tell us about your project</h2>
          <p>Your details will be added to a WhatsApp message for Oasis.</p>
        </div>
      </div>
      <div className="form-grid">
        <label>
          Your name <span aria-hidden="true">*</span>
          <input name="name" autoComplete="name" required />
        </label>
        <label>
          Phone number
          <input name="phone" type="tel" autoComplete="tel" />
        </label>
        <label>
          Farm location
          <input name="location" placeholder="Town or district" autoComplete="address-level2" />
        </label>
        <label>
          What do you need help with? <span aria-hidden="true">*</span>
          <select name="need" defaultValue="" required>
            <option value="" disabled>Select a topic</option>
            <option>Drip irrigation products</option>
            <option>Irrigation system planning</option>
            <option>Installation support</option>
            <option>Water storage or pumping</option>
            <option>Other irrigation enquiry</option>
          </select>
        </label>
        <label className="form-full">
          A few project details
          <textarea name="details" rows={4} placeholder="What are you growing, and what would you like to know?" />
        </label>
      </div>
      <button className="button form-submit" type="submit">
        Prepare WhatsApp enquiry <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <p className="form-privacy">
        This form does not store or submit information to a website server.
      </p>
      <p className="form-status" role="status" aria-live="polite">{status}</p>
    </form>
  );
}
