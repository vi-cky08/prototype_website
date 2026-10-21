import { ChevronDown, CircleAlert } from 'lucide-react'

const inputCls = (err) =>
  `block w-full rounded-[4px] border bg-white px-3 text-base text-ink placeholder:text-[#8a929e] transition-colors focus:ring-1 focus:outline-none md:text-[14px] ${
    err ? 'border-danger focus:border-danger focus:ring-danger' : 'border-line hover:border-[#b9bfc8] focus:border-primary focus:ring-primary'
  }`

const heightCls = 'min-h-11 md:min-h-10'

/**
 * Label + control + error line for one entry in src/data/contactFormFields.js.
 * Labels sit above the control under 768px and to its left from 768px up;
 * `labelWidth` sets that left column (a CSS length, or "auto" for paired fields).
 */
export default function FormField({ name, field, value, error, onChange, onBlur, labelWidth = '9.5rem' }) {
  const { label, labelNote, required, type = 'text', options, counter, format, rows, ...attrs } = field
  const errorId = `${name}-error`
  const counterId = `${name}-count`

  const handleChange = (e) => onChange(name, format ? format(e.target.value) : e.target.value)

  const common = {
    id: name,
    name,
    value,
    onChange: handleChange,
    onBlur: () => onBlur(name),
    required,
    'aria-required': required || undefined,
    'aria-invalid': Boolean(error),
    'aria-describedby': [error && errorId, counter && counterId].filter(Boolean).join(' ') || undefined,
    autoComplete: attrs.autoComplete,
    maxLength: attrs.maxLength,
    placeholder: type === 'select' ? undefined : attrs.placeholder,
  }

  let control
  if (type === 'textarea') {
    control = <textarea rows={rows} {...common} className={`${inputCls(error)} resize-y py-2.5 leading-relaxed`} />
  } else if (type === 'select') {
    control = (
      <div className="relative">
        <select
          {...common}
          className={`${inputCls(error)} ${heightCls} appearance-none pr-9 ${value ? '' : 'text-[#8a929e]'}`}
        >
          <option value="" disabled>
            {attrs.placeholder}
          </option>
          {options.map((o) => (
            <option key={o} value={o} className="text-navy">
              {o}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-ink" aria-hidden="true" />
      </div>
    )
  } else {
    control = <input type={type} inputMode={attrs.inputMode} {...common} className={`${inputCls(error)} ${heightCls}`} />
  }

  return (
    <div
      className="min-w-0 md:grid md:grid-cols-[var(--label-w)_minmax(0,1fr)] md:items-start md:gap-x-3"
      style={{ '--label-w': labelWidth }}
    >
      <label htmlFor={name} className="mb-1.5 block text-[14px] leading-snug font-semibold text-navy md:mb-0 md:pt-2.5 md:text-[13px]">
        {label}
        {required && <span className="text-danger"> *</span>}
        {labelNote && <span className="block font-normal text-muted md:text-[12px]">{labelNote}</span>}
      </label>
      <div className="min-w-0">
        {control}
        {(error || counter) && (
          <div className="mt-1 flex items-start gap-3">
            {error && (
              <p id={errorId} className="flex flex-1 items-start gap-1.5 text-[13px] leading-snug text-danger">
                <CircleAlert className="mt-px h-4 w-4 shrink-0" strokeWidth={2} aria-hidden="true" />
                {error}
              </p>
            )}
            {counter && (
              <p id={counterId} className="ml-auto shrink-0 text-[12px] text-muted">
                {value.length}/{attrs.maxLength}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  )
}
