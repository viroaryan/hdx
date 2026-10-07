import Reveal from "@/components/Reveal";
import TechIcon from "@/components/TechIcon";
import { ArrowRightIcon, GitHubIcon } from "@/components/icons";
import { GITHUB_PROFILE_URL, PROJECTS } from "@/lib/data";

/** Abstract browser-window mock shown on each project card. */
function PreviewShot({ slug }: { slug: string }) {
  return (
    <div className={`shot shot--${slug}`} aria-hidden="true">
      <span className="shot__bar" />
      {slug === "device-inspector" && (
        <span className="shot__body">
          <span className="shot__side" />
          <span className="shot__main">
            <span className="shot__row" style={{ width: "72%" }} />
            <span className="shot__row" style={{ width: "56%" }} />
            <span className="shot__meter" />
            <span className="shot__row" style={{ width: "64%" }} />
            <span className="shot__row" style={{ width: "48%" }} />
          </span>
        </span>
      )}
      {slug === "cloud-dashboard" && (
        <span className="shot__body">
          <span className="shot__side" />
          <span className="shot__main">
            <span className="shot__stats">
              <span className="shot__stat" />
              <span className="shot__stat" />
              <span className="shot__stat" />
            </span>
            <span className="shot__chart">
              <i style={{ height: "38%" }} />
              <i style={{ height: "62%" }} />
              <i style={{ height: "48%" }} />
              <i style={{ height: "80%" }} />
              <i style={{ height: "58%" }} />
              <i style={{ height: "72%" }} />
            </span>
          </span>
        </span>
      )}
      {slug === "greensmp" && (
        <span className="shot__body">
          <span className="shot__banner" />
          <span className="shot__main">
            <span className="shot__player">
              <i />
              <span style={{ width: "58%" }} />
            </span>
            <span className="shot__player">
              <i />
              <span style={{ width: "42%" }} />
            </span>
            <span className="shot__player">
              <i />
              <span style={{ width: "50%" }} />
            </span>
          </span>
        </span>
      )}
      {slug === "minerift" && (
        <span className="shot__body">
          <span className="shot__main">
            <span className="shot__headline" style={{ width: "74%" }} />
            <span className="shot__headline" style={{ width: "52%" }} />
            <span className="shot__cards">
              <span />
              <span />
              <span />
            </span>
          </span>
        </span>
      )}
    </div>
  );
}

/** §4 — CASE STUDIES: sky blue, giant overlapping cream serif project lines. */
export default function CaseStudies() {
  return (
    <section className="section cases" id="work">
      <div className="section__inner">
        <Reveal>
          <p className="eyebrow">CASE STUDIES</p>
        </Reveal>
        <Reveal stagger={1}>
          <h2 className="display-2 cases__title">Mind if we brag a bit?</h2>
        </Reveal>

        <ul className="cases__list">
          {PROJECTS.map((project, i) => (
            <li key={project.name}>
              <Reveal stagger={i + 2}>
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-link"
                  aria-label={`${project.name} — ${project.status} (opens GitHub profile in a new tab)`}
                >
                  <span className="case-link__text">{project.name}</span>
                  <span className="case-link__status">{project.status}</span>
                </a>
              </Reveal>
            </li>
          ))}
        </ul>

        <div className="cases__grid">
          {PROJECTS.map((project, i) => (
            <Reveal key={project.name} stagger={i}>
              <article className="case-card">
                <a
                  href={GITHUB_PROFILE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="case-card__preview"
                  aria-label={`Open ${project.name} on GitHub`}
                >
                  <span className="case-card__window">
                    <span className="case-card__chrome" aria-hidden="true">
                      <i />
                      <i />
                      <i />
                    </span>
                    <PreviewShot slug={project.slug} />
                  </span>
                </a>
                <div className="case-card__head">
                  <h3 className="case-card__name">{project.name}</h3>
                  <a
                    href={GITHUB_PROFILE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="case-card__btn"
                  >
                    <GitHubIcon size={13} />
                    Code
                  </a>
                </div>
                <p className="case-card__status">{project.status}</p>
                <p className="case-card__summary">{project.summary}</p>
                <ul className="case-card__chips" aria-label={`${project.name} technologies`}>
                  {project.tech.map((tech) => (
                    <li className="case-card__chip" key={tech}>
                      <TechIcon tech={tech} />
                      {tech}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div className="cases__more">
            <a
              href={GITHUB_PROFILE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="cases__all-btn"
            >
              See all projects
              <ArrowRightIcon size={14} />
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
