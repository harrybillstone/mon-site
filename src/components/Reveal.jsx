import { useScrollReveal } from '../hooks/useScrollReveal'

function Reveal({ children, delay = 0, className = '' }) {
  const { ref, visible } = useScrollReveal()

  return (
    <div
      ref={ref}
      style={{ animationDelay: `${delay}ms` }}
      className={`${visible ? 'animate-fade-up' : 'opacity-0'} ${className}`}
    >
      {children}
    </div>
  )
}

export default Reveal