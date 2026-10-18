import Image from "next/image";
import Link from "next/link";

type BrandProps = {
  light?: boolean;
  motto?: boolean;
};

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
        <strong>OASIS</strong>
        <span>Irrigation solutions</span>
        {motto ? (
          <span className="brand-motto">
            Smart Irrigation. Better Harvests. Sustainable Future.
          </span>
        ) : null}
      </span>
    </Link>
  );
}
