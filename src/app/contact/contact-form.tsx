"use client";

import { ArrowUpRight, MessageCircle } from "lucide-react";
import { useState } from "react";
import type { FormEvent } from "react";
import { company, whatsappLinkForNumber } from "@/data/site";

const contactTopics = [
  {
    label: "Drip irrigation",
    value: "Drip irrigation products",
    description: "Products, fittings or a new system",
    detailsPrompt: "what you grow, the area to irrigate or the products you need",
  },
  {
    label: "Plan a system",
    value: "Irrigation system planning",
    description: "Advice for your farm or growing space",
    detailsPrompt: "your crop, farm size and available water source",
  },
  {
    label: "Pumps & water",
    value: "Water storage or pumping",
    description: "Pumps, boreholes or water storage",
    detailsPrompt: "your water source and whether you need pumping or storage",
  },
  {
    label: "Installation",
    value: "Installation support",
    description: "Installation or support for a system",
    detailsPrompt: "the system you have or the work you need help with",
  },
  {
    label: "Something else",
    value: "Other irrigation enquiry",
    description: "Another product or project question",
    detailsPrompt: "what you would like to ask the Oasis team",
  },
] as const;

type ContactFormProps = {
  whatsappNumber?: string;
  title?: string;
  description?: string;
  privacyNote?: string;
};

export function ContactForm({
  whatsappNumber = company.whatsapp,
  title = "Tell us about your project",
  description = "Choose a topic, then share only the details you know.",
  privacyNote = "Your details are not stored on this website.",
}: ContactFormProps) {
  const [selectedTopic, setSelectedTopic] = useState("");
  const [previewMessage, setPreviewMessage] = useState("");
  const selectedTopicDetails = contactTopics.find(
    (topic) => topic.value === selectedTopic,
  );

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const message = [
      "Hello Oasis, I would like to request a quotation.",
      "",
      `Name: ${formData.get("name")}`,
      `Phone: ${formData.get("phone") || "Not provided"}`,
      `Farm location: ${formData.get("location") || "Not provided"}`,
      `Topic: ${formData.get("need")}`,
      `Project details: ${formData.get("details") || "Not provided"}`,
    ].join("\n");

    setPreviewMessage(message);
  }

  return (
    <form
      className="quote-form"
      onSubmit={handleSubmit}
      onChange={() => setPreviewMessage("")}
    >
      <div className="form-heading">
        <span className="form-icon"><MessageCircle size={18} aria-hidden="true" /></span>
        <div>
          <h2>{title}</h2>
          <p>{description}</p>
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
        <fieldset className="form-full contact-topic-group">
          <legend>
            What do you need help with? <span aria-hidden="true">*</span>
          </legend>
          <div className="contact-topic-grid">
            {contactTopics.map((topic) => (
              <label
                className={`contact-topic-option${selectedTopic === topic.value ? " is-selected" : ""}`}
                key={topic.value}
              >
                <input
                  type="radio"
                  name="need"
                  value={topic.value}
                  required
                  checked={selectedTopic === topic.value}
                  onChange={() => setSelectedTopic(topic.value)}
                />
                <span className="contact-topic-option__copy">
                  <strong>{topic.label}</strong>
                  <small>{topic.description}</small>
                </span>
                <span className="contact-topic-option__indicator" aria-hidden="true" />
              </label>
            ))}
          </div>
        </fieldset>
        <label className="form-full">
          A few project details <span className="contact-optional">(optional)</span>
          <textarea
            name="details"
            rows={4}
            placeholder={
              selectedTopicDetails
                ? `For example, ${selectedTopicDetails.detailsPrompt}.`
                : "Tell us what you are growing or what you would like to know."
            }
          />
        </label>
      </div>
      <button className="button form-submit" type="submit">
        Preview WhatsApp message <ArrowUpRight size={17} aria-hidden="true" />
      </button>
      <p className="form-privacy">
        {privacyNote}
      </p>
      {previewMessage && (
        <section className="contact-message-preview" aria-labelledby="contact-preview-title">
          <div className="contact-message-preview__heading">
            <div>
              <span className="eyebrow">Review before sending</span>
              <h3 id="contact-preview-title">Your WhatsApp message</h3>
            </div>
            <button
              className="contact-preview-edit"
              type="button"
              onClick={() => setPreviewMessage("")}
            >
              Edit details
            </button>
          </div>
          <pre>{previewMessage}</pre>
          <a
            className="button form-submit contact-preview-send"
            href={whatsappLinkForNumber(whatsappNumber, previewMessage)}
            target="_blank"
            rel="noreferrer"
          >
            Open WhatsApp to send <ArrowUpRight size={17} aria-hidden="true" />
          </a>
        </section>
      )}
    </form>
  );
}
