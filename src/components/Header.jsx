import { useEffect, useState } from 'react'
import { business, logoUrl } from '../data/site'

const LINKS = [
  { href: '#about', label: 'About' },
  { href: '#products', label: 'Products' },
  { href: '#growing', label: 'Growing' },
]

export default function Header() {
  // Narrow screens have no room for the link row beside the brand, so they get
  // a disclosure menu instead. Above 720px the panel styles don't apply and the
  // links sit inline as usual.
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="brand" href="#top" onClick={close}>
          <img
            className="brand__mark"
            src={logoUrl}
            alt=""
            width="40"
            height="40"
          />
          <span className="brand__text">
            <span className="brand__name">{business.name}</span>
            <span className="brand__sub">&amp; Research Center</span>
          </span>
        </a>

        <button
          className="nav__toggle"
          type="button"
          aria-expanded={open}
          aria-controls="site-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span className="nav__bars" aria-hidden="true" />
          {open ? 'Close' : 'Menu'}
        </button>

        <nav
          className={open ? 'nav nav--open' : 'nav'}
          id="site-nav"
          aria-label="Main"
        >
          {LINKS.map((l) => (
            <a
              className="nav__link"
              href={l.href}
              key={l.href}
              onClick={close}
            >
              {l.label}
            </a>
          ))}
          <a className="btn btn--outline nav__cta" href="#contact" onClick={close}>
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
