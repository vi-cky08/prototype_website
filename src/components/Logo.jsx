
import companyLogo from "../assets/company-logo1.png";

export default function Logo({ inverted = false }) {
  return (
    <a
      href="/"
      aria-label="Prototype Design home"
      className="inline-flex min-w-0 shrink-0 items-center"
    >
      <img
        src={companyLogo}
        alt="Prototype Design - Engineering Design and Development"
        className="
          block
          h-12
          w-auto
          max-w-[180px]
          object-contain
          sm:h-12
          sm:max-w-[230px]
          lg:h-12
          lg:max-w-[260px]
        "
      />
    </a>
  );
}
