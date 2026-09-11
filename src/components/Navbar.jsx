import { useState, useEffect } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'
import { Menu, X, Sparkles } from 'lucide-react'

const links = [
  { to: '/', label: 'Accueil' },
  { to: '/services', label: 'Services' },
  { to: '/a-propos', label: 'À propos' },
  { to: '/contact', label: 'Contact' },
]

function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { pathname } = useLocation()

  // Ferme le menu mobile quand on change de page
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  // Détecte le scroll pour densifier la navbar
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = ({ isActive }) =>
    `text-sm transition-colors ${
      isActive
        ? 'text-accent font-semibold'
        : 'text-muted hover:text-link'
    }`

  return (
    <header
      className={`sticky top-0 z-50 transition-all ${
        scrolled
          ? 'border-b border-line bg-surface/80 backdrop-blur-md'
          : 'bg-transparent'
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link to="/" className="flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-accent" />
          <span className="font-display text-lg font-bold">Mon Site</span>
        </Link>

        {/* Navigation desktop */}
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={linkClass}
            >
              {link.label}
            </NavLink>
          ))}

          <Link
            to="/contact"
            className="rounded-full bg-ink px-5 py-2 text-sm font-medium text-white transition-transform hover:scale-105"
          >
            Démarrer un projet
          </Link>
        </nav>

        {/* Bouton hamburger (mobile uniquement) */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden"
          aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
        >
          {open ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </div>

      {/* Panneau mobile */}
      {open && (
        <nav className="animate-fade-up border-t border-line bg-surface px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={linkClass}
              >
                {link.label}
              </NavLink>
            ))}

            <Link
              to="/contact"
              className="rounded-full bg-ink px-5 py-3 text-center text-sm font-medium text-white"
            >
              Démarrer un projet
            </Link>
          </div>
        </nav>
      )}
    </header>
  )
}

export default Navbar