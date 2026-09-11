import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

const stats = [
  { value: '5+', label: 'Années d\'expérience' },
  { value: '50+', label: 'Projets livrés' },
  { value: '100%', label: 'Clients satisfaits' },
]

function About() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-4xl">
        <SectionTitle
          eyebrow="À propos"
          title="Derrière l'écran"
          subtitle="Développeur web passionné par les interfaces soignées et le code qui dure."
        />

        <Reveal delay={100}>
          <div className="mt-10 space-y-5 leading-relaxed text-muted">
            <p>
              Je conçois et développe des sites web depuis plusieurs années,
              avec une conviction simple : un bon site n'est pas seulement
              beau, il est rapide, clair et pensé pour son visiteur.
            </p>
            <p>
              Mon approche est directe. On cadre ensemble le besoin, je
              propose une direction, puis je construis. Tu suis l'avancement
              à chaque étape, sans jargon inutile.
            </p>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-5 sm:grid-cols-3">
          {stats.map((stat, index) => (
            <Reveal key={stat.label} delay={index * 100}>
              <div className="rounded-3xl bg-subtle p-7 text-center">
                <p className="font-display text-4xl font-extrabold text-accent">
                  {stat.value}
                </p>
                <p className="mt-2 text-sm text-muted">{stat.label}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={300}>
          <Link
            to="/contact"
            className="group mt-14 inline-flex items-center gap-2 text-sm font-medium text-accent"
          >
            Travaillons ensemble
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>
      </div>
    </section>
  )
}

export default About