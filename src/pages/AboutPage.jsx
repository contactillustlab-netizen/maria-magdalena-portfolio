import { ArrowRight, Facebook, FileText, Instagram, Linkedin, PenTool, Send } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';

const tools = ['Tool 01', 'Tool 02', 'Tool 03', 'Tool 04', 'Tool 05', 'Tool 06'];

const experience = [
  { id: 1, start: '2023', end: 'Present', role: 'Illustrator & Graphic Designer', company: 'Independent Practice' },
  { id: 2, start: '2021', end: '2023', role: 'Role title', company: 'Company / Studio' },
  { id: 3, start: '2019', end: '2021', role: 'Role title', company: 'Company / Studio' },
  { id: 4, start: '2018', end: '2019', role: 'Role title', company: 'Company / Studio' }
];

const testimonials = [
  { id: 1, quote: 'Add a testimonial from a client or collaborator here.', name: 'Client name', role: 'Role, Company' },
  { id: 2, quote: 'Swap this in for real feedback about working together.', name: 'Client name', role: 'Role, Company' },
  { id: 3, quote: 'A short quote about your work goes here.', name: 'Client name', role: 'Role, Company' }
];

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
      <div className="about-page__layout">
        <aside className="about-page__sidebar">
          <div className="about-page__portrait">
            <div className="image-placeholder" aria-label="Portrait placeholder" />
          </div>
          <div className="about-page__tools" aria-hidden="true">
            <div className="about-page__tools-track">
              {[...tools, ...tools].map((tool, index) => (
                <span key={index} className="about-page__tool">{tool}</span>
              ))}
            </div>
          </div>
        </aside>

        <div className="about-page__main">
          <section className="about-page__block">
            <SectionHeader eyebrow="About" title="A multidisciplinary practice shaped by narrative and form" description="" />
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
            <div className="about-page__socials">
              {socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" aria-label={social.label}>
                  {social.icon}
                </a>
              ))}
            </div>
          </section>

          <section className="about-page__block">
            <p className="section-header__eyebrow">Experience</p>
            <ol className="about-page__timeline">
              {experience.map((item) => (
                <li key={item.id} className="about-page__timeline-item">
                  <p className="about-page__timeline-years">
                    {item.start}
                    <span className="about-page__timeline-dot" />
                    {item.end}
                  </p>
                  <h4 className="about-page__timeline-role">{item.role}</h4>
                  <p className="about-page__timeline-company">{item.company}</p>
                </li>
              ))}
            </ol>
            <div className="about-page__block-footer">
              <a href="/cv.pdf" download className="cta-pill">
                Download CV
                <span className="cta-pill__icon"><FileText size={18} /></span>
              </a>
            </div>
          </section>

          <section className="about-page__block">
            <p className="section-header__eyebrow">Testimonials</p>
            <div className="about-page__testimonials">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="about-page__testimonial">
                  <p className="about-page__testimonial-quote">&ldquo;{testimonial.quote}&rdquo;</p>
                  <p className="about-page__testimonial-name">{testimonial.name}</p>
                  <p className="about-page__testimonial-role">{testimonial.role}</p>
                </div>
              ))}
            </div>
            <div className="about-page__block-footer">
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" className="cta-pill">
                Read on Linkedin
                <span className="cta-pill__icon"><Linkedin size={18} /></span>
              </a>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

export default AboutPage;
