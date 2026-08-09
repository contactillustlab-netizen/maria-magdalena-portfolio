import ContactForm from '../components/ContactForm';

function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="contact-page__media" aria-hidden="true">
        <span className="contact-page__media-label">Video Placeholder</span>
      </div>
      <div className="contact-page__form-wrap">
        <p className="section-header__eyebrow">Contact</p>
        <h2 className="contact-page__form-title">Send a message</h2>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
