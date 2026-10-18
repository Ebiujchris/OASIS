type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  light?: boolean;
  centered?: boolean;
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  light = false,
  centered = false,
}: SectionHeadingProps) {
  return (
    <div
      className={`section-heading${light ? " section-heading-light" : ""}${centered ? " section-heading-centered" : ""}`}
    >
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}
