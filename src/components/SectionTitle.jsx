import Reveal from './Reveal'

function SectionTitle({ eyebrow, title, subtitle, center = false }) {
  return (
    <Reveal className={center ? 'text-center' : ''}>
      {eyebrow && (
        <span className="text-xs font-semibold uppercase tracking-widest text-accent">
          {eyebrow}
        </span>
      )}

      <h2 className="font-display mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-muted ${center ? 'mx-auto' : ''} max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </Reveal>
  )
}

export default SectionTitle