import { business, logoUrl } from '../data/site'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="wrap hero__inner">
        <div>
          <h1 className="hero__title">
            Aadhya Mushroom Seeds
            <span>&amp; Research Center</span>
          </h1>

          <p className="hero__lede">{business.tagline}</p>

          <div className="hero__actions">
            <a className="btn btn--primary" href={`mailto:${business.email}`}>
              Enquire about spawn
            </a>
            <a
              className="btn btn--ghost"
              href={business.links.facebook}
              target="_blank"
              rel="noreferrer noopener"
            >
              See us on Facebook
            </a>
          </div>

          <p className="hero__meta">
            <span>
              {business.city}, {business.country}
            </span>
            <span>Mushroom spawn supplier</span>
            <span>Cultivation research</span>
          </p>
        </div>

        <div className="hero__badge">
          <img
            src={logoUrl}
            alt={`${business.fullName} logo`}
            width="340"
            height="340"
            fetchPriority="high"
          />
        </div>
      </div>
    </section>
  )
}
