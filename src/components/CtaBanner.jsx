import { Link } from 'react-router-dom';

function CtaBanner() {
  return (
    <section className="cta-banner">
      <span className="cta-banner__label">Contact</span>
      <h2 className="cta-banner__title">
        I&apos;m not just here to design products;<br />I&apos;m here to connect with people.
      </h2>
      <p className="cta-banner__subtitle">
        Feel free to contact me for any questions,<br />feedback, or further assistance.
      </p>
      <Link to="/contact" className="cta-banner__button">Let&apos;s talk</Link>
    </section>
  );
}

export default CtaBanner;
