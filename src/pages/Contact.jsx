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
    const [sending, setSending] = useState(false)
    const [error, setError] = useState(false)

    function handleChange(e) {
        const { name, value } = e.target
        setForm((prev) => ({
            ...prev,
            [name]: value,
        }))
    }

    async function handleSubmit(e) {
        e.preventDefault()
        setSending(true)
        setError(false)

        const formData = new FormData(e.target)

        try {
            const response = await fetch('/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams(formData).toString(),
            })

            if (!response.ok) {
                throw new Error("Erreur lors de l'envoi")
            }

            // On laisse volontairement le bouton en chargement
            // pendant au moins 5 secondes
            await new Promise((resolve) => setTimeout(resolve, 5000))

            setSent(true)

            setForm({
                nom: '',
                email: '',
                message: '',
            })
        } catch (error) {
            console.error(error)
            setError(true)
        } finally {
            setSending(false)
        }
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
                    {/* Colonne informations */}
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
                                    type="button"
                                    onClick={() => setSent(false)}
                                    className="text-sm font-medium text-accent underline"
                                >
                                    Envoyer un autre message
                                </button>
                            </div>
                        ) : (
                            <form
                                name="contact"
                                method="POST"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                onSubmit={handleSubmit}
                                className="flex flex-col gap-4"
                            >
                                {/* Netlify */}
                                <input
                                    type="hidden"
                                    name="form-name"
                                    value="contact"
                                />

                                {/* Sujet du mail */}
                                <input
                                    type="hidden"
                                    name="subject"
                                    value="Nouveau message depuis Mon Site"
                                />

                                {/* Protection anti-spam */}
                                <div className="hidden">
                                    <label>
                                        Ne pas remplir ce champ :
                                        <input name="bot-field" />
                                    </label>
                                </div>

                                {/* Nom */}
                                <input
                                    name="nom"
                                    value={form.nom}
                                    onChange={handleChange}
                                    placeholder="Ton nom"
                                    className={inputClass}
                                    required
                                />

                                {/* Email */}
                                <input
                                    name="email"
                                    type="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="Ton email"
                                    className={inputClass}
                                    required
                                />

                                {/* Message */}
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Parle-moi de ton projet"
                                    rows="6"
                                    className={inputClass}
                                    required
                                />

                                {/* Message d'erreur */}
                                {error && (
                                    <p className="text-sm text-red-500">
                                        Une erreur est survenue. Vérifie ta connexion et
                                        réessaie.
                                    </p>
                                )}

                                {/* Bouton Envoyer */}
                                <button
                                    type="submit"
                                    disabled={sending}
                                    className="group mt-2 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-line bg-ink px-4 py-3.5 text-sm font-medium text-black cursor-pointer transition-transform hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-60"                >
                                    {sending ? 'Envoi en cours...' : 'Envoyer'}

                                    {!sending && (
                                        <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                                    )}
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