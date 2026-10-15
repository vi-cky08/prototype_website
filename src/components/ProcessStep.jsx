import { m, useReducedMotion } from 'framer-motion'
import IconCircle from './IconCircle.jsx'
import CheckList from './CheckList.jsx'
import { EASE } from './Motion.jsx'

// One step of the journey flow (shown on a dark navy section).
// The connector to the next step draws in (vertical on mobile, horizontal on desktop) once it scrolls into view.
function Connector({ index, horizontal }) {
  const reduce = useReducedMotion()
  const axis = horizontal ? 'scaleX' : 'scaleY'
  return (
    <m.span
      aria-hidden="true"
      initial={reduce ? false : { [axis]: 0 }}
      whileInView={{ [axis]: 1 }}
      viewport={{ once: true, amount: 0.6 }}
      transition={{ duration: 0.5, ease: EASE, delay: horizontal ? 0.15 + index * 0.12 : 0.1 }}
      className={
        horizontal
          ? 'absolute top-9 left-[calc(50%+44px)] hidden h-[2px] w-[calc(100%-88px)] origin-left rounded-full bg-gradient-to-r from-accent to-primary-400 lg:block'
          : 'mt-2 w-[2px] flex-1 origin-top rounded-full bg-gradient-to-b from-accent to-primary-400/30 lg:hidden'
      }
    />
  )
}

export default function ProcessStep({ step, index, isLast }) {
  return (
    <li className="group relative flex gap-4 sm:gap-5 lg:flex-col lg:items-center lg:gap-0">
      <div className="relative flex flex-col items-center lg:w-full lg:flex-row lg:justify-center">
        <IconCircle
          icon={step.icon}
          size="lg"
          tone="dark"
          className="relative z-10 transition-[transform,background-color,box-shadow] duration-300 ease-out group-hover:bg-white/15 group-hover:shadow-[0_0_0_6px_rgb(34_184_240/0.12)] motion-safe:group-hover:scale-110 max-lg:h-14 max-lg:w-14 max-lg:[&>svg]:h-6 max-lg:[&>svg]:w-6"
        />
        {!isLast && (
          <>
            <Connector index={index} horizontal />
            <Connector index={index} />
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
