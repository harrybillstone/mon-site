import { useState } from 'react'
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react'
import Reveal from '../components/Reveal'
import SectionTitle from '../components/SectionTitle'

const infos = [
  { icon: Mail, label: 'Email', value: 'contact@monsite.com' },
  { icon: Phone, label: 'Téléphone', value: '+229 00 00 00 00' },
  { icon: MapPin, label: 'Localisation', value: 'Cotonou, Bénin' },
]

function Contact() {
  const [form, setForm] = useState({
    nom: '',
    email: '',
    message: '',
  })

  const [sent, setSent] = useState(false)

  function handleChange(e) {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    console.log(form)
    setSent(true)
    setForm({ nom: '', email: '', message: '' })
  }

  const inputClass =
    'w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm outline-none transition-colors focus:border-accent'

  return (
    <section className="px-6 py-20">
      <div className="mx-auto max-w-5xl">
        <SectionTitle
          eyebrow="Contact"
          title="Parlons de ton projet"
          subtitle="Réponse sous 24h. Le premier échange est toujours gratuit."
          center
        />

        <div className="mt-14 grid gap-10 md:grid-cols-5">
          {/* Colonne infos */}
          <Reveal className="md:col-span-2">
            <div className="flex flex-col gap-6">
              {infos.map((info) => {
                const Icon = info.icon

                return (
                  <div
                    key={info.label}
                    className="flex items-start gap-4"
                  >
                    <div className="rounded-xl bg-accent-soft p-3">
                      <Icon className="h-5 w-5 text-accent" />
                    </div>

                    <div>
                      <p className="text-xs uppercase tracking-wide text-muted">
                        {info.label}
                      </p>
                      <p className="mt-0.5 text-sm font-medium">
                        {info.value}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>
          </Reveal>

          {/* Colonne formulaire */}
          <Reveal delay={150} className="md:col-span-3">
            {sent ? (
              <div className="flex flex-col items-center gap-4 rounded-3xl bg-accent-soft p-10 text-center">
                <CheckCircle2 className="h-10 w-10 text-accent" />

                <div>
                  <h3 className="font-display text-xl font-bold">
                    Message envoyé
                  </h3>

                  <p className="mt-1 text-sm text-muted">
                    Merci, je reviens vers toi rapidement.
                  </p>
                </div>

                <button
                  onClick={() => setSent(false)}
                  className="text-sm font-medium text-accent underline"
                >
                  Envoyer un autre message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4"
              >
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  placeholder="Ton nom"
                  className={inputClass}
                  required
                />

                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Ton email"
                  className={inputClass}
                  required
                />

                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Parle-moi de ton projet"
                  rows="6"
                  className={inputClass}
                  required
                />

                <button
                  type="submit"
                  className="group inline-flex items-center justify-center gap-2 rounded-xl bg-ink py-3.5 text-sm font-medium text-white transition-transform hover:scale-[1.02]"
                >
                  Envoyer
                  <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </button>
              </form>
            )}
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default Contact