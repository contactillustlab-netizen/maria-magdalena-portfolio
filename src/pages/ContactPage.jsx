import ContactForm from '../components/ContactForm';
import SectionHeader from '../components/SectionHeader';
import { Facebook, Instagram, Linkedin, PenTool, Send } from 'lucide-react';

function ContactPage() {
  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: <Linkedin size={18} /> },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: <Facebook size={18} /> },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: <Instagram size={18} /> },
    { label: 'ArtStation', href: 'https://www.artstation.com', icon: <Send size={18} /> },
    { label: 'Behance', href: 'https://www.behance.net', icon: <PenTool size={18} /> }
  ];

  return (
    <section className="section contact-page">
      <div className="contact-page__header">
        <SectionHeader eyebrow="Contact" title="Let’s Work Together" description="For commissions, collaborations, and portfolio inquiries." />
        <div className="contact-page__details">
          <a href="mailto:contact.illustlab@gmail.com">contact.illustlab@gmail.com</a>
          <p>România, Galați</p>
        </div>
      </div>
      <div className="contact-page__content">
        <div className="contact-page__socials">
          {socials.map((social) => (
            <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
              {social.icon}
            </a>
          ))}
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default ContactPage;
