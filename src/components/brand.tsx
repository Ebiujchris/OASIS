import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  light?: boolean;
  motto?: boolean;
};

function animatedLetters(text: string, offset = 0) {
  return Array.from(text).map((letter, index) => (
    <span
      aria-hidden="true"
      className="brand-letter"
      key={`${letter}-${index}`}
      style={{ animationDelay: `${offset + index * 55}ms` }}
    >
      {letter === " " ? "\u00a0" : letter}
    </span>
  ));
}

export function Brand({ light = false, motto = false }: BrandProps) {
  return (
    <Link
      className={`brand${light ? " brand-light" : ""}`}
      href="/"
      aria-label="Oasis Irrigation Solutions home"
    >
      <Image
        className="brand-mark"
        src="/images/oasis-logo.jpg"
        alt=""
        width={50}
        height={50}
        priority
      />
      <span className="brand-name">
        <strong aria-label="OASIS">{animatedLetters("OASIS")}</strong>
        <span aria-label="Irrigation solutions">
          {animatedLetters("Irrigation solutions", 280)}
        </span>
        {motto ? (
          <span className="brand-motto">
            Smart Irrigation. Better Harvests. Sustainable Future.
          </span>
        ) : null}
      </span>
    </Link>
  );
}
