import Icon from './Icon'
import { business, services } from '../data/site'

export default function About() {
  return (
    <section className="section" id="about">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">What we do</span>
          <h2 className="section__title">
            Spawn, research, and support for mushroom growers
          </h2>
        </div>

        <div className="about">
          <div className="about__body">
            <p>
              {business.fullName} is based in {business.city}, {business.country}
              . We supply mushroom seed &mdash; the spawn that growers mix
              through their substrate &mdash; and run a small research center
              alongside it.
            </p>
            <p>
              Mushrooms are a fast, compact crop: they grow on pasteurised
              agricultural waste, need no field, and produce several harvests
              from a single batch of bags. Good spawn is the part that decides
              whether a batch colonises cleanly or fails, which is why it is
              what we focus on.
            </p>
            <p>
              For current availability, pricing, or advice on getting started,
              get in touch &mdash; we are happy to talk through your setup.
            </p>
          </div>

          <div className="facts">
            <div className="facts__row">
              <span className="facts__key">Location</span>
              <span className="facts__val">
                {business.city}, {business.country}
              </span>
            </div>
            <div className="facts__row">
              <span className="facts__key">Focus</span>
              <span className="facts__val">Mushroom spawn</span>
            </div>
            <div className="facts__row">
              <span className="facts__key">Email</span>
              <span className="facts__val">
                <a href={`mailto:${business.email}`}>{business.email}</a>
              </span>
            </div>
            <div className="facts__row">
              <span className="facts__key">Find us</span>
              <span className="facts__val">
                <a
                  href={business.links.maps}
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  Google Maps
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="grid" style={{ marginTop: 'clamp(2rem, 5vw, 3.5rem)' }}>
          {services.map((s) => (
            <article className="card" key={s.title}>
              <div className="card__icon">
                <Icon name={s.icon} />
              </div>
              <h3 className="card__title">{s.title}</h3>
              <p className="card__body">{s.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
