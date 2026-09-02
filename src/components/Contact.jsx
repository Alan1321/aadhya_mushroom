import { business } from '../data/site'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">Get in touch</span>
          <h2 className="section__title">Talk to us about your batch</h2>
          <p className="section__lede">
            Tell us the variety, the quantity, and when you need it &mdash; we
            will come back to you with what we can supply.
          </p>
        </div>

        <div className="contact__grid">
          <a className="contact__item" href={`mailto:${business.email}`}>
            <span className="contact__label">Email</span>
            <span className="contact__value">{business.email}</span>
          </a>

          {/* Rows below appear only once the value is filled in in site.js,
              so the page never shows a blank or placeholder contact detail. */}
          {business.phone && (
            <a
              className="contact__item"
              href={`tel:${business.phone.replace(/\s+/g, '')}`}
            >
              <span className="contact__label">Phone</span>
              <span className="contact__value">{business.phone}</span>
            </a>
          )}

          <a
            className="contact__item"
            href={business.links.facebook}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact__label">Facebook</span>
            <span className="contact__value">{business.name}</span>
          </a>

          <a
            className="contact__item"
            href={business.links.maps}
            target="_blank"
            rel="noreferrer noopener"
          >
            <span className="contact__label">Visit</span>
            <span className="contact__value">
              {business.address || `${business.city}, ${business.country}`}
            </span>
          </a>

          {business.hours && (
            <div className="contact__item">
              <span className="contact__label">Hours</span>
              <span className="contact__value">{business.hours}</span>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
