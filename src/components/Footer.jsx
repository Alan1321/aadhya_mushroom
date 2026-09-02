import { business } from '../data/site'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="wrap footer__inner">
        <p>
          <span className="footer__name">{business.fullName}</span>
          <br />
          {business.city}, {business.country}
        </p>
        <p>
          <a href={`mailto:${business.email}`}>{business.email}</a>
          {' · '}
          <a
            href={business.links.facebook}
            target="_blank"
            rel="noreferrer noopener"
          >
            Facebook
          </a>
        </p>
        <p>&copy; {new Date().getFullYear()} {business.fullName}</p>
      </div>
    </footer>
  )
}
