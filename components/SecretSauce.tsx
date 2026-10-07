import Reveal from "@/components/Reveal";
import { ABOUT, SAUCE_WORDS, STACK_NOTE, STATS } from "@/lib/data";

/** §3 — SECRET SAUCE: blush pink, giant serif, vertical tech marquee, stats. */
export default function SecretSauce() {
  return (
    <section className="section sauce" id="sauce">
      {/* Vertical infinite marquee of technologies along the right edge */}
      <div className="sauce__marquee" aria-hidden="true">
        <div className="sauce__track">
          {[0, 1].map((copy) => (
            <ul key={copy}>
              {SAUCE_WORDS.map((word) => (
                <li className="sauce__word" key={word}>
                  <span className="sauce__star">✳</span>
                  {word}
                </li>
              ))}
            </ul>
          ))}
        </div>
      </div>

      <div className="section__inner sauce__inner">
        <Reveal>
          <p className="eyebrow">OUR SECRET SAUCE</p>
        </Reveal>
        <Reveal stagger={1}>
          <h2 className="display-2">We love what we build.</h2>
        </Reveal>
        <Reveal stagger={2}>
          <p className="body-justified sauce__body">{ABOUT}</p>
        </Reveal>

        <div className="sauce__more">
          <Reveal>
            <p className="sauce__more-title">But that&apos;s just the beginning...</p>
          </Reveal>
          <Reveal stagger={1}>
            <p className="sauce__more-body">{STACK_NOTE}</p>
          </Reveal>
          <Reveal stagger={2}>
            <ul className="stats-row">
              {STATS.map((stat) => (
                <li className="stat" key={stat.label}>
                  <span className="stat__value">{stat.value}</span>
                  <span className="stat__label">{stat.label}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
