import { ArrowRight } from 'lucide-react'
import IconCircle from './IconCircle.jsx'
import CheckList from './CheckList.jsx'

export default function ProcessStep({ step, index, isLast }) {
  return (
    <li className="relative flex gap-4 sm:gap-5 lg:flex-col lg:items-center lg:gap-0">
      {/* icon + connector arrow */}
      <div className="relative flex flex-col items-center lg:w-full lg:flex-row lg:justify-center">
        <IconCircle
          icon={step.icon}
          size="lg"
          className="bg-sky-soft max-lg:h-14 max-lg:w-14 max-lg:[&>svg]:h-6 max-lg:[&>svg]:w-6"
        />
        {!isLast && (
          <>
            <ArrowRight
              className="absolute top-1/2 -right-2.5 hidden h-4 w-4 -translate-y-1/2 translate-x-1/2 text-[#8aa4c4] lg:block"
              aria-hidden="true"
            />
            <span className="mt-2 w-[2px] flex-1 rounded-full bg-[#c9d9ec] lg:hidden" aria-hidden="true" />
          </>
        )}
      </div>

      <div className={`min-w-0 flex-1 pb-8 lg:w-full lg:pb-0 ${!isLast ? 'lg:border-r lg:border-line' : ''}`}>
        <h3 className="mt-3.5 text-[17px] font-bold lg:mt-7 lg:text-[16px] lg:text-center">
          <span className="sr-only">Step {index + 1}: </span>
          {step.title}
        </h3>
        <CheckList
          items={step.items}
          className="mt-3 space-y-2! lg:mt-5 lg:px-3"
          itemClassName="text-[15px]! text-ink lg:text-[13px]!"
        />
      </div>
    </li>
  )
}
