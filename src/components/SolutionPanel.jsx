import CheckItem from './CheckItem.jsx'

const tones = {
  green: 'border-line bg-white',
  blue: 'border-line bg-grey',
}

// Flat panel with a header slot, a check list and an optional image beside it (below it under 768px).
export default function SolutionPanel({ tone = 'blue', header, items, image, imageAlt, className = '' }) {
  return (
    <article className={`rounded-[4px] border p-5 sm:p-8 ${tones[tone]} ${className}`}>
      {header}
      <div className={`mt-6 grid gap-6 ${image ? 'md:grid-cols-[minmax(0,1fr)_minmax(0,40%)] md:items-center' : ''}`}>
        <ul className="space-y-5">
          {items.map((item) => (
            <CheckItem key={item.title} {...item} />
          ))}
        </ul>
        {image && (
          <img
            src={image}
            alt={imageAlt}
            width="800"
            height="1000"
            loading="lazy"
            className="mx-auto aspect-[4/5] w-full max-w-[320px] rounded-[4px] object-cover md:max-w-none"
          />
        )}
      </div>
    </article>
  )
}
