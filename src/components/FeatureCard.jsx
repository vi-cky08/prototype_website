import IconCircle from './IconCircle.jsx'

export default function FeatureCard({ icon, title, text }) {
  return (
    <div className="group flex items-start gap-4 rounded-xl p-3 sm:gap-5 sm:p-4 transition-colors duration-200 hover:bg-white/70">
      <IconCircle icon={icon} className="transition-transform duration-200 group-hover:-translate-y-0.5" />
      <div className="min-w-0 pt-1">
        <h3 className="text-[16px] font-bold">{title}</h3>
        <p className="mt-1.5 text-[15px] leading-relaxed lg:max-w-[15rem] lg:text-[14px]">{text}</p>
      </div>
    </div>
  )
}
