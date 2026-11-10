
export default function FormField({
  name,
  field,
  value,
  error,
  onChange,
  onBlur,
  labelWidth,
}) {
  const commonClasses = `
    w-full min-h-12 rounded-[4px] border bg-white
    px-4 py-3 text-base text-navy outline-none
    transition-colors
    placeholder:text-muted/70
    focus:border-primary focus:ring-1 focus:ring-primary
    disabled:cursor-not-allowed disabled:bg-grey
  `;

  const borderClass = error
    ? 'border-danger'
    : 'border-line';

  const handleChange = (event) => {
    const nextValue = field.format
      ? field.format(event.target.value)
      : event.target.value;

    onChange(name, nextValue);
  };

  const inputProps = {
    id: name,
    name,
    value: value ?? '',
    onChange: handleChange,
    onBlur: () => onBlur(name),
    required: Boolean(field.required),
    autoComplete: field.autoComplete || 'off',
    maxLength: field.maxLength,
    placeholder: field.placeholder || '',
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? `${name}-error` : undefined,
    className: `${commonClasses} ${borderClass}`,
  };

  return (
    <div
      className="min-w-0"
      style={
        labelWidth
          ? { '--field-label-width': labelWidth }
          : undefined
      }
    >
      <label
        htmlFor={name}
        className="mb-2 flex flex-wrap items-center gap-1 text-sm font-semibold text-navy"
      >
        {field.label}

        {field.labelNote && (
          <span className="font-normal text-muted">
            {field.labelNote}
          </span>
        )}

        {field.required && (
          <span className="text-danger" aria-hidden="true">
            *
          </span>
        )}
      </label>

      {field.type === 'select' ? (
        <select {...inputProps}>
          <option value="">
            {field.placeholder || 'Select an option'}
          </option>

          {field.options?.map((option) => (
            <option key={option} value={option}>
              {option}
            </option>
          ))}
        </select>
      ) : field.type === 'textarea' ? (
        <textarea
          {...inputProps}
          rows={field.rows || 4}
          className={`${commonClasses} ${borderClass} min-h-28 resize-y`}
        />
      ) : (
        <input
          {...inputProps}
          type={field.type || 'text'}
          inputMode={field.inputMode}
        />
      )}

      {field.counter && (
        <p className="mt-1 text-right text-xs text-muted">
          {value.length}/{field.maxLength}
        </p>
      )}

      {error && (
        <p
          id={`${name}-error`}
          className="mt-1.5 text-xs text-danger"
          role="alert"
        >
          {error}
        </p>
      )}
    </div>
  );
}
