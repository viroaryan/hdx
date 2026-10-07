import CubeLogo from "@/components/CubeLogo";
import LetsTalk from "@/components/LetsTalk";
import DrawnArrow from "@/components/DrawnArrow";
import Reveal from "@/components/Reveal";
import { INTRO_LINE, TAGLINE } from "@/lib/data";

/** §1 — HERO: warm off-white, giant serif headline over a pink highlight bar. */
export default function Hero() {
  return (
    <section className="section hero" id="top">
      <header className="hero__top">
        <a href="#top" className="hero__brand" aria-label="HDX — back to top">
          <CubeLogo />
          <span className="hero__brand-name">HDX</span>
        </a>
        <LetsTalk />
      </header>

      <div className="section__inner hero__center">
        <Reveal>
          <p className="label hero__tagline">{TAGLINE}</p>
        </Reveal>

        <Reveal stagger={1}>
          <h1 className="hero__headline">
            <span className="display-1">
              <span className="hero__bar" aria-hidden="true" />
              Because
              <br />
              boring is
              <br />
              bad for software.
            </span>
          </h1>
        </Reveal>

        <Reveal stagger={2}>
          <p className="hero__intro">{INTRO_LINE}</p>
        </Reveal>

        <Reveal stagger={3}>
          <div className="hero__arrows">
            <DrawnArrow className="hero__arrow-a" />
            <DrawnArrow className="hero__arrow-b" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
