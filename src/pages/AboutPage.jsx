import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

function AboutPage() {
  return (
    <section className="section about-page">
      <div className="about-page__intro">
        <SectionHeader eyebrow="About" title="A multidisciplinary practice shaped by narrative and form" description="" />
        <p className="about-page__text">I am an illustrator, graphic designer, and concept artist focused on transforming ideas into distinctive visual experiences. My work combines storytelling, visual identity, digital design, and artistic exploration.</p>
      </div>
      <div className="about-page__content">
        <div className="about-page__portrait">
          <div className="image-placeholder" aria-label="Portrait placeholder" />
        </div>
        <div className="about-page__details">
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
