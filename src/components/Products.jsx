import { business, products } from '../data/site'

export default function Products() {
  const hasCatalogue = products.length > 0

  return (
    <section className="section section--tint" id="products">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">Products</span>
          <h2 className="section__title">Mushroom spawn</h2>
          <p className="section__lede">
            Availability changes with the season and with what is currently
            growing out at the center.
          </p>
        </div>

        {hasCatalogue ? (
          <div className="grid">
            {products.map((p) => (
              <article className="product" key={p.name}>
                <h3 className="product__name">{p.name}</h3>
                {p.nepali && <p className="product__nepali">{p.nepali}</p>}
                {p.note && <p className="product__note">{p.note}</p>}
                {p.price && <span className="product__price">{p.price}</span>}
              </article>
            ))}
          </div>
        ) : (
          // Rendered while src/data/site.js has an empty `products` array —
          // better an honest prompt to get in touch than a made-up catalogue.
          <div className="empty">
            <h3 className="empty__title">Ask us what is available</h3>
            <p className="empty__body">
              Our current spawn list is not published here yet. Send us a
              message with the variety and quantity you need and we will tell
              you what we have ready.
            </p>
            <a className="btn btn--primary" href={`mailto:${business.email}`}>
              Email {business.email}
            </a>
          </div>
        )}
      </div>
    </section>
  )
}
