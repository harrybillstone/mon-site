import { Link } from 'react-router-dom'
import {
  ArrowRight,
  Code2,
  Palette,
  Gauge,
  Smartphone,
  Sparkles,
} from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

function Home() {
  return (
    <>
      {/* — Hero — */}
      <section className="relative overflow-hidden px-6 pb-24 pt-20 sm:pt-28">
        {/* Halo décoratif en arrière-plan */}
        <div className="animate-float pointer-events-none absolute left-1/2 top-0 -z-10 h-105 w-105 -translate-x-1/2 rounded-full bg-accent/20 blur-[110px]" />

        <div className="mx-auto max-w-4xl text-center">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-line bg-subtle px-4 py-1.5 text-xs font-medium text-muted">
              <Sparkles className="h-3.5 w-3.5 text-accent" />
              Disponible pour de nouveaux projets
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h1 className="font-display mt-8 text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-6xl">
              Des sites web qui donnent
              <span className="text-accent"> envie de rester</span>
            </h1>
          </Reveal>

          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
              Design soigné, code propre et performances au rendez-vous.
              Je conçois des vitrines qui convertissent.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                to="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-white transition-transform hover:scale-105"
              >
                Démarrer un projet
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                to="/services"
                className="rounded-full border border-line px-7 py-3.5 text-sm font-medium transition-colors hover:bg-subtle"
              >
                Voir les services
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* — Grille bento — */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <SectionTitle
            eyebrow="Ce que j'apporte"
            title="Une approche complète"
            subtitle="Chaque projet est traité du cadrage à la mise en ligne, sans zone d'ombre."
            center
          />

          <div className="mt-14 grid auto-rows-55 grid-cols-1 gap-5 md:grid-cols-3">
            {/* Bloc large : 2 colonnes, 2 rangées */}
            <Reveal className="md:col-span-2 md:row-span-2">
              <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-8 text-white">
                <Code2 className="h-8 w-8 text-accent" />

                <div>
                  <h3 className="font-display text-2xl font-bold">
                    Développement sur mesure
                  </h3>
                  <p className="mt-3 max-w-md text-sm text-white/60">
                    Pas de template générique. Chaque composant est écrit
                    pour ton besoin, maintenable et évolutif.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={100}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-line bg-subtle p-7">
                <Palette className="h-7 w-7 text-accent" />
                <div>
                  <h3 className="font-display font-bold">Design system</h3>
                  <p className="mt-2 text-sm text-muted">
                    Couleurs, typographies et espacements cohérents.
                  </p>
                </div>
              </div>
            </Reveal>

            <Reveal delay={200}>
              <div className="flex h-full flex-col justify-between rounded-3xl border border-line p-7">
                <Gauge className="h-7 w-7 text-accent" />
                <div>
                  <h3 className="font-display font-bold">Performance</h3>
                  <p className="mt-2 text-sm text-muted">
                    Chargement rapide et SEO technique soigné.
                  </p>
                </div>
              </div>
            </Reveal>

            {/* Bloc large horizontal */}
            <Reveal delay={300} className="md:col-span-3">
              <div className="flex h-full flex-col items-start justify-between gap-6 rounded-3xl bg-accent-soft p-8 sm:flex-row sm:items-center">
                <div className="flex items-center gap-5">
                  <Smartphone className="h-8 w-8 shrink-0 text-accent" />

                  <div>
                    <h3 className="font-display text-xl font-bold">
                      Responsive par défaut
                    </h3>
                    <p className="mt-1 text-sm text-muted">
                      Testé sur mobile, tablette et desktop avant livraison.
                    </p>
                  </div>
                </div>

                <Link
                  to="/services"
                  className="shrink-0 rounded-full bg-ink px-6 py-3 text-sm font-medium text-white"
                >
                  En savoir plus
                </Link>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home