import { Link } from 'react-router-dom'
import { Sparkles } from 'lucide-react'
import {
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
} from '@tabler/icons-react'

const socials = [
    { icon: IconBrandGithub, href: 'https://github.com', label: 'GitHub' },
    { icon: IconBrandLinkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: IconBrandX, href: 'https://x.com', label: 'Twitter' },
]

function Footer() {
    return (
        <footer className="border-t border-line px-6 py-10">
            <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
                <Link to="/" className="flex items-center gap-2">
                    <Sparkles className="h-4 w-4 text-accent" />                   
                      <span className="font-display font-bold">Mon Site</span>
                </Link>

                <div className="flex gap-4">
                    {socials.map((social) => {
                        const Icon = social.icon
                        return (
                            <a
                                key={social.label}
                                href={social.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={social.label}
                                className="text-muted transition-colors hover:text-accent"
                            >
                                <Icon className="h-5 w-5" />
                            </a>
                        )
                    })}
                </div>

                <p className="text-xs text-muted">© 2026 — Tous droits réservés</p>
            </div>
        </footer>
    )
}

export default Footer