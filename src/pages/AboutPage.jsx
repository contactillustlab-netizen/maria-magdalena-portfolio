import { ArrowRight, Facebook, Instagram, Linkedin, PenTool, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

function AboutPage() {
  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: <Linkedin size={18} /> },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: <Facebook size={18} /> },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: <Instagram size={18} /> },
    { label: 'ArtStation', href: 'https://www.artstation.com', icon: <Send size={18} /> },
    { label: 'Behance', href: 'https://www.behance.net', icon: <PenTool size={18} /> }
  ];

  return (
    <section className="section about-page">
      <div className="about-page__intro">
        <SectionHeader eyebrow="About" title="A multidisciplinary practice shaped by narrative and form" description="" />
      </div>
      <div className="about-page__content">
        <div className="about-page__portrait">
          <div className="about-page__portrait-heading">
            <h2>Vizireanu Maria-Magdalena</h2>
            <p>Illustrator &amp; Graphic Designer</p>
          </div>
          <div className="image-placeholder" aria-label="Portrait placeholder" />
          <div className="about-page__socials">
            {socials.map((social) => (
              <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                {social.icon}
              </a>
            ))}
          </div>
        </div>
        <div className="about-page__details">
          <p className="about-page__text">I am an illustrator, graphic designer, and concept artist focused on transforming ideas into distinctive visual experiences. My work combines storytelling, visual identity, digital design, and artistic exploration.</p>
          <h3>Services</h3>
          <ul>
            <li>Illustration</li>
            <li>Concept Art</li>
            <li>Character Design</li>
            <li>Brand Identity</li>
            <li>UI Design</li>
            <li>Marketing Materials</li>
            <li>Pitch Deck Design</li>
          </ul>
          <h3>Selected clients</h3>
          <p>Editorial, cultural and independent projects in development.</p>
          <Link to="/contact" className="about-page__cta">
            Start a conversation <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
