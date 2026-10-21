import IconCircle from './IconCircle.jsx'
import CheckList from './CheckList.jsx'

// One step of the journey flow (shown on a dark navy section).
// A plain 1px line links each step to the next (vertical on mobile, horizontal on desktop).
function Connector({ horizontal }) {
  return (
    <span
      aria-hidden="true"
      className={
        horizontal
          ? 'absolute top-[18px] left-[calc(50%+32px)] hidden h-px w-[calc(100%-64px)] bg-white/25 lg:block'
          : 'mt-2 w-px flex-1 bg-white/25 lg:hidden'
      }
    />
  )
}

export default function ProcessStep({ step, index, isLast }) {
  return (
    <li className="relative flex gap-4 sm:gap-5 lg:flex-col lg:items-center lg:gap-0">
      <div className="relative flex flex-col items-center lg:w-full lg:flex-row lg:justify-center">
        <IconCircle icon={step.icon} size="lg" tone="dark" className="relative z-10 max-lg:[&>svg]:h-7 max-lg:[&>svg]:w-7" />
        {!isLast && (
          <>
            <Connector horizontal />
            <Connector />
          </>
        )}
      </div>

      <div className="min-w-0 flex-1 pb-8 lg:w-full lg:pb-0">
        <h3 className="mt-3.5 text-[17px] font-bold text-white lg:mt-7 lg:text-[16px] lg:text-center">
          <span className="sr-only">Step {index + 1}: </span>
          {step.title}
        </h3>
        <CheckList
          items={step.items}
          variant="checkLight"
          className="mt-3 space-y-2! lg:mt-4 lg:px-2"
          itemClassName="text-[15px]! text-white/75 lg:text-[13px]!"
        />
      </div>
    </li>
  )
}
