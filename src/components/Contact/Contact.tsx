import "./Contact.scss";

export default function Contact() {
  return (
    <section className="contact" id="contact" aria-labelledby="contact-title">
      <h2 id="contact-title">CONTACT</h2>
      <div className="contact-layout">
        <p>
          Have a role or a project in mind?
          <br />
          I’d love to hear about it.
        </p>
        <a className="contact-email" href="mailto:info@resaki.de">
          <span>info@resaki.de</span>
          <span aria-hidden="true">↗</span>
        </a>
      </div>
      <ul className="contact-socials" aria-label="Social profiles">
        <li>
          <a
            href="https://www.linkedin.com/in/christianreski/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn (opens in a new tab)"
          >
            LinkedIn <span aria-hidden="true">↗</span>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/Resaki1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub (opens in a new tab)"
          >
            GitHub <span aria-hidden="true">↗</span>
          </a>
        </li>
      </ul>
    </section>
  );
}
