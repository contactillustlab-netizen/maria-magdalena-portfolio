import { ArrowRight, Facebook, FileText, Instagram, Linkedin } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionHeader from '../components/SectionHeader';
import SmartImage from '../components/SmartImage';
import ArtStationIcon from '../components/icons/ArtStationIcon';
import BehanceIcon from '../components/icons/BehanceIcon';

const tools = [
  { name: 'Adobe Creative Cloud', logo: '/logos/adobe-creative-cloud.svg' },
  { name: 'Affinity', logo: '/logos/affinity.svg' },
  { name: 'ChatGPT', logo: '/logos/chatgpt.svg' },
  { name: 'Claude', logo: '/logos/claude.svg' },
  { name: 'Figma', logo: '/logos/figma.svg' },
  { name: 'Illustrator', logo: '/logos/illustrator.svg' },
  { name: 'Lightroom', logo: '/logos/lightroom.svg' },
  { name: 'Photoshop', logo: '/logos/photoshop.svg' },
  { name: 'Premiere Pro', logo: '/logos/premiere.svg' },
  { name: 'Slack', logo: '/logos/slack.svg' }
];

const services = ['Illustration', 'Concept Art', 'Character Design', 'Brand Identity', 'UI Design', 'Marketing Materials', 'Pitch Deck Design'];

const experience = [
  { id: 1, start: '2021', end: 'Present', role: 'Illustrator & UI Designer', company: 'IVFuture SRL, Galati RO /  IT & SaaS Company' },
  { id: 2, start: '2017', end: 'Present', role: 'Illustrator & Graphic Designer', company: 'Freelancing' },
  { id: 3, start: '2016', end: '2017', role: 'Illustrator & T-Shirt Designer', company: 'Tshirt-Factory.ro RO' }
];

const testimonials = [
  {
    id: 1,
    quote: 'An absolute pleasure to work with! Created an awesome illustration for my coffee shop that I will be using for various different products.  A great talent!',
    name: 'Austin Fittock',
    role: 'AJF ESSEX LTD'
  },
  {
    id: 2,
    quote: "I've gotten over 30 designs from Vizireanu Maria Magdalena and will do more and more business with her. Her work is amazing, she is amazing and does everything she can to get you exactly what you need. Everything from t shirt designs to art for my videos, podcast and channels. She has countless styles and if she has never done a certain type of style she can pull it off after a little research. Im hoping to one day to get a real life physical work of art from her, thats how good she is and definetly deserves alot more notice for her abilities. I found her on a whim and i couldnt be more grateful.  Thank you Magda!!",
    name: 'Jason Young',
    role: 'STONER SOCIETY LIMITED CO.'
  },
  {
    id: 3,
    quote: 'Magda did an amazing job with all the info I gave her! Super professional and understanding of my needs! I love the illustration that she did for the hot sauce! Thank you again!!!',
    name: 'Lucinda Fortin',
    role: 'Tapesayeule'
  }
];

function AboutPage() {
  const socials = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maria-magdalena-vizireanu/', icon: <Linkedin size={18} /> },
    { label: 'Facebook', href: 'https://www.facebook.com/vmmartist', icon: <Facebook size={18} /> },
    { label: 'Instagram', href: 'https://www.instagram.com/magdamariav/', icon: <Instagram size={18} /> },
    { label: 'ArtStation', href: 'https://vizireanumariamagdalena.artstation.com/', icon: <ArtStationIcon size={18} /> },
    { label: 'Behance', href: 'https://www.behance.net/mady21v', icon: <BehanceIcon size={18} /> }
  ];

  return (
    <section className="section about-page">
      <div className="about-page__layout">
        <aside className="about-page__sidebar">
          <div className="about-page__portrait">
            <SmartImage src="/pictures/portrait.webp" alt="Vizireanu Maria-Magdalena portrait" orientation="portrait" />
          </div>
          <div className="about-page__tools" aria-hidden="true">
            <div className="about-page__tools-track">
              {[...tools, ...tools].map((tool, index) => (
                <span key={index} className="about-page__tool">
                  <img src={tool.logo} alt="" />
                  {tool.name}
                </span>
              ))}
            </div>
          </div>
        </aside>

        <div className="about-page__main">
          <section className="about-page__block">
            <SectionHeader eyebrow="About" title="Vizireanu Maria-Magdalena" description="Illustrator & Graphic Designer" />
            <p className="about-page__text">I am an illustrator, graphic designer, and concept artist focused on transforming ideas into distinctive visual experiences. My work combines storytelling, visual identity, digital design, and artistic exploration.</p>
            <h3>Services</h3>
            <div className="about-page__tags">
              {services.map((service) => (
                <span key={service} className="about-page__tag">{service}</span>
              ))}
            </div>
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
              <a href="https://www.linkedin.com/in/maria-magdalena-vizireanu/" target="_blank" rel="noreferrer" className="cta-pill">
                Check Linkedin
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
