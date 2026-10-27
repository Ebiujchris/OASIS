import { ArrowRight, Droplets, Sprout, Sun, Waves } from "lucide-react";
import Link from "next/link";
import { SectionHeading } from "@/components/section-heading";

const journeySteps = [
  {
    icon: Waves,
    title: "Water source",
    description: "Start with the water available on your farm.",
  },
  {
    icon: Sun,
    title: "Pump & storage",
    description: "Plan how water can be moved and stored for use.",
  },
  {
    icon: Droplets,
    title: "Irrigation lines",
    description: "Carry water through pipes and irrigation lines.",
  },
  {
    icon: Sprout,
    title: "Growing crops",
    description: "Deliver water to the areas where crops are growing.",
  },
];

export function WaterJourney() {
  return (
    <section className="water-journey-section" aria-label="Water from source to crop">
      <div className="page-width">
        <SectionHeading
          eyebrow="From source to field"
          title="How water reaches your crops."
          description="A farm water system connects a source to the places water is needed. The right setup depends on your farm, water source and crops."
          centered
        />
        <ol className="water-journey" aria-label="Water journey from source to crop">
          {journeySteps.map((step, index) => {
            const Icon = step.icon;

            return (
              <li className="water-journey__step" key={step.title}>
                <span className="water-journey__number">
                  STEP {String(index + 1).padStart(2, "0")}
                </span>
                <span className="water-journey__icon" aria-hidden="true">
                  <Icon size={23} strokeWidth={1.8} />
                </span>
                <h3>{step.title}</h3>
                <p>{step.description}</p>
                {index < journeySteps.length - 1 && (
                  <span className="water-journey__connector" aria-hidden="true">
                    <ArrowRight size={17} />
                  </span>
                )}
              </li>
            );
          })}
        </ol>
        <p className="water-journey__note">
          Every farm is different. Oasis can help you explore the products and
          support that fit your setup.
        </p>
        <Link className="water-journey__link" href="/services/">
          Explore how we can help <ArrowRight size={16} aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
}
