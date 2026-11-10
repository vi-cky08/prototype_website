
import { useEffect, useRef, useState } from 'react';
import { Check } from 'lucide-react';

export default function ServiceCard({
  image,
  title,
  description,
  products = [],
  number = '01',
  reverse = false,
}) {
  const cardRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  // Scroll reveal animation
  useEffect(() => {
    const element = cardRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.12,
      }
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <article
      ref={cardRef}
      className={`
        relative flex w-full overflow-hidden
        flex-col md:flex-row
        ${reverse ? 'md:flex-row-reverse md:ml-auto' : 'md:mr-auto'}

        md:w-[91%]
        min-h-0 md:min-h-[235px]

        rounded-xl
        border border-blue-100
        bg-white
        shadow-[0_5px_20px_rgba(15,45,92,0.09)]

        transition-all duration-700 ease-out

        ${isVisible
          ? 'translate-x-0 opacity-100'
          : reverse
            ? 'translate-x-12 opacity-0'
            : '-translate-x-12 opacity-0'
        }

        hover:shadow-[0_10px_28px_rgba(15,45,92,0.13)]

        motion-reduce:translate-x-0
        motion-reduce:opacity-100
        motion-reduce:transition-none
      `}
    >

      {/* IMAGE SECTION */}
      <div
        className={`
          relative h-[190px] w-full
          shrink-0 overflow-hidden
          bg-slate-100
          md:h-auto md:w-[42%]
          md:min-h-[235px]
        `}
      >
        <img
          src={image}
          alt={title}
          loading="lazy"
          className="
            absolute inset-0
            h-full w-full
            object-cover object-center
          "
        />

        {/* BLUE SEPARATOR */}
        <div
          className={`
            absolute inset-y-0 hidden
            w-[7px] bg-blue-600 md:block
            ${reverse ? 'left-0' : 'right-0'}
          `}
        />
      </div>

      {/* CONTENT SECTION */}
      <div
        className="
          flex min-w-0 flex-1
          flex-col justify-center
          px-4 py-4
          sm:px-5
          md:px-6 md:py-5
          lg:px-7
        "
      >

        {/* SERVICE NUMBER */}
        <div className="mb-2">
          <span
            className="
              inline-flex rounded-md
              bg-[#EAF2FF]
              px-3 py-1.5
              text-xs font-bold
              tracking-wide text-blue-700
            "
          >
            SERVICE / {number}
          </span>
        </div>

        {/* TITLE */}
        <h3
          className="
            text-lg font-extrabold
            leading-snug tracking-tight
            text-[#102D5C]
            sm:text-xl
          "
        >
          {title}
        </h3>

        {/* DESCRIPTION */}
        <p
          className="
            mt-1.5
            text-sm leading-6
            text-slate-600
            sm:text-base
          "
        >
          {description}
        </p>

        {/* PRODUCT TAGS */}
        {products.length > 0 && (
          <ul className="mt-3 flex flex-wrap gap-2">
            {products.slice(0, 6).map((product) => (
              <li
                key={product}
                className="
                  inline-flex items-center gap-1.5
                  rounded-md
                  border border-[#D8E5F7]
                  bg-[#F8FBFF]
                  px-2.5 py-1.5
                  text-xs font-medium
                  text-[#102D5C]
                  sm:text-sm
                  transition-colors duration-200
                  hover:border-blue-400
                  hover:bg-blue-50
                "
              >
                <Check
                  size={14}
                  strokeWidth={2.5}
                  className="shrink-0 text-blue-600"
                />

                <span>{product}</span>
              </li>
            ))}
          </ul>
        )}

      </div>
    </article>
  );
}
