// Base card: glass-like white surface, thin border, layered shadow.
// `accent` adds the gradient line on top, `hover` adds lift + stronger shadow + blue border glow.
export default function Card({ as: Tag = 'div', accent = false, hover = false, className = '', children, ...props }) {
  return (
    <Tag className={`card ${accent ? 'card-accent' : ''} ${hover ? 'card-hover' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
