import { Check, Layout, Server, Search, Wrench } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

const services = [
  {
    icon: Layout,
    title: 'Site vitrine',
    price: 'à partir de 350 000 F',
    features: [
      'Design sur mesure',
      'Jusqu’à 5 pages',
      'Responsive',
      'Formulaire de contact',
    ],
  },
  {
    icon: Server,
    title: 'Application web',
    price: 'sur devis',
    features: [
      'Base de données',
      'Espace administrateur',
      'Authentification',
      'API sur mesure',
    ],
  },
  {
    icon: Search,
    title: 'SEO & Performance',
    price: 'à partir de 150 000 F',
    features: [
      'Audit technique',
      'Optimisation vitesse',
      'Balises et métadonnées',
      'Rapport détaillé',
    ],
  },
  {
    icon: Wrench,
    title: 'Maintenance',
    price: '50 000 F / mois',
    features: [
      'Mises à jour',
      'Sauvegardes',
      'Corrections de bugs',
      'Support prioritaire',
    ],
  },
]

function Services() {
  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-6xl">
        <SectionTitle
          eyebrow="Prestations"
          title="Services et tarifs"
          subtitle="Des offres claires, sans surprise. Chaque projet démarre par un échange gratuit."
          center
        />

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => {
            const Icon = service.icon

            return (
              <Reveal key={service.title} delay={index * 100}>
                <div className="flex h-full flex-col rounded-3xl border border-line p-7 transition-all hover:-translate-y-1 hover:border-accent hover:shadow-lg">
                  <Icon className="h-7 w-7 text-accent" />

                  <h3 className="font-display mt-5 text-lg font-bold">
                    {service.title}
                  </h3>

                  <p className="mt-1 text-sm text-accent">
                    {service.price}
                  </p>

                  <ul className="mt-5 flex flex-col gap-2.5">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-start gap-2 text-sm text-muted"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Services