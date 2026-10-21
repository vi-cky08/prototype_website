// Base card: flat white surface, 1px border, 4px radius. `hover` turns the border blue.
export default function Card({ as: Tag = 'div', hover = false, className = '', children, ...props }) {
  return (
    <Tag className={`card ${hover ? 'card-hover' : ''} ${className}`} {...props}>
      {children}
    </Tag>
  )
}
