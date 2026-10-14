// Grayscale logo with a uniform height. Pass `logo` (an imported image) to show real artwork,
// otherwise a text placeholder is shown.
export default function ClientLogo({ name, short, logo }) {
  return (
    <div className="flex h-10 items-center grayscale transition duration-300 hover:grayscale-0 sm:h-12 lg:h-14">
      {logo ? (
        <img
          src={logo}
          alt={name}
          draggable="false"
          className="h-full w-auto max-w-none object-contain opacity-75 transition-opacity hover:opacity-100"
        />
      ) : (
        <span className="flex items-center gap-2.5 whitespace-nowrap text-[#3c4656] opacity-80 transition-opacity hover:opacity-100">
          <span className="flex h-7 min-w-7 shrink-0 items-center justify-center rounded-md border-2 border-current px-1 text-[11px] font-extrabold">
            {short}
          </span>
          <span className="text-[15px] leading-tight font-semibold">{name}</span>
        </span>
      )}
    </div>
  )
}
