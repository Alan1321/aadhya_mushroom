import { growingNotes } from '../data/site'

export default function Growing() {
  return (
    <section className="section" id="growing">
      <div className="wrap">
        <div className="section__head">
          <span className="eyebrow">How it works</span>
          <h2 className="section__title">From substrate to harvest</h2>
          <p className="section__lede">
            A short overview of the cycle, for anyone considering mushrooms as a
            crop for the first time.
          </p>
        </div>

        <div className="steps">
          {growingNotes.map((n) => (
            <article className="step" key={n.step}>
              <span className="step__num">{n.step}</span>
              <h3 className="step__title">{n.title}</h3>
              <p className="step__body">{n.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
