import BrowserMockup from "@/components/BrowserMockup";
import DrawnArrow from "@/components/DrawnArrow";
import Reveal from "@/components/Reveal";

/** §2 — DOWN BAD: orange gradient, mega Anton word, tilted dashboard mockup. */
export default function DownBad() {
  return (
    <section className="section downbad" id="downbad">
      <div className="section__inner">
        <div className="downbad__grid">
          <div>
            <Reveal>
              <p className="eyebrow">YOUR STACK IS</p>
            </Reveal>
            <Reveal stagger={1}>
              <p className="mega downbad__mega">DOWN BAD?</p>
            </Reveal>
            <Reveal stagger={2}>
              <p className="downbad__help display-2">We can help.</p>
            </Reveal>
            <Reveal stagger={3}>
              <p className="body-justified downbad__body">
                You are busy building products — shipping features, fixing bugs, keeping the
                lights on. Somewhere in there, your stack got left behind. It deserves better
                than boring templates and bolted-together boilerplate. HDX builds functional,
                high-performance software with direct purpose: clean architecture, reliable
                protocols, and genuine user utility.
              </p>
            </Reveal>
          </div>

          {/* className marks this Reveal as the grid item so CSS can center it
              (.downbad__mockup) — .mockup-wrap itself is not the grid item. */}
          <Reveal stagger={2} className="downbad__mockup">
            <div className="mockup-wrap">
              <p className="note-hand mockup-note">OMG! This stack is sleepy...</p>
              <DrawnArrow className="mockup-note-arrow" />
              <BrowserMockup />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
