import { business, logoUrl } from '../data/site'

export default function Header() {
  return (
    <header className="header">
      <div className="wrap header__inner">
        <a className="brand" href="#top">
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

        <nav className="nav" aria-label="Main">
          <a className="nav__link" href="#about">
            About
          </a>
          <a className="nav__link" href="#products">
            Products
          </a>
          <a className="nav__link" href="#growing">
            Growing
          </a>
          <a className="btn btn--outline" href="#contact">
            Contact
          </a>
        </nav>
      </div>
    </header>
  )
}
