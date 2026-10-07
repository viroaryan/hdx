import ContactForm from "@/components/ContactForm";
import DrawnArrow from "@/components/DrawnArrow";
import Reveal from "@/components/Reveal";
import { GitHubIcon, InstagramIcon, LinkedInIcon, MailIcon } from "@/components/icons";
import { EMAIL_PRIMARY, FOOTER_LEGAL, SOCIALS } from "@/lib/data";
import type { Social } from "@/lib/data";

function SocialIcon({ kind }: { kind: Social["key"] }) {
  switch (kind) {
    case "github":
      return <GitHubIcon />;
    case "linkedin":
      return <LinkedInIcon />;
    case "instagram":
      return <InstagramIcon />;
    case "mail":
      return <MailIcon />;
  }
}

/** §5 — FOOTER / CONTACT: charcoal, cream type, giant cropped ANTON name. */
export default function FooterContact() {
  return (
    <footer className="section footer" id="contact">
      {/* Giant cropped background name */}
      <div className="footer__giant" aria-hidden="true">
        <span>AMAN</span>
        <span>HDX</span>
      </div>

      <div className="section__inner footer__grid">
        <Reveal className="footer__col">
          <p className="footer__kicker">The developer from Kolkata</p>
          <p className="footer__mono">West Bengal, India</p>
          <nav className="footer__socials" aria-label="Social links">
            {SOCIALS.map((social) => (
              <a
                key={social.key}
                className="social-btn"
                href={social.href}
                aria-label={social.label}
                {...(social.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : undefined)}
              >
                <SocialIcon kind={social.key} />
              </a>
            ))}
          </nav>
        </Reveal>

        <Reveal className="footer__col" stagger={1}>
          <div className="footer__note">
            <p className="note-hand footer__note-text">
              Go on... you know you want to send a note!
            </p>
            <DrawnArrow className="footer__note-arrow" />
          </div>
          <ContactForm />
        </Reveal>
      </div>

      <div className="section__inner footer__bottom">
        <p className="footer__legal">{FOOTER_LEGAL}</p>
        <nav className="footer__links" aria-label="Footer links">
          <a className="footer__link" href="https://github.com/hdxpyy" target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          <a
            className="footer__link"
            href="https://www.linkedin.com/in/hdx-aman-3b2505434/"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="footer__link"
            href="https://www.instagram.com/hdx.py/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram
          </a>
          <a className="footer__link" href={`mailto:${EMAIL_PRIMARY}`}>
            Mail
          </a>
        </nav>
      </div>
    </footer>
  );
}
