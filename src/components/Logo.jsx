
import companyLogo from "../assets/company-logo.png";

export default function Logo({ inverted = false }) {
  return (
    <a
      href="/"
      aria-label="Prototype Design home"
      className="inline-flex items-center shrink-0"
    >
      <img
        src={companyLogo}
        alt="Prototype Design - Engineering Design and Development"
        className="h-20 sm:h-20 w-auto max-w-[320px] object-contain"
      />
    </a>
  );
}
