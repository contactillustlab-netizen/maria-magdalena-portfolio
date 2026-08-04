import { ArrowDown } from 'lucide-react';

function HeroSection({ eyebrow, title, subtitle, image, variant = 'illustration' }) {
  return (
    <section className={`hero hero--${variant}`}>
      <div className="hero__image" style={{ backgroundImage: `url(${image})` }} />
      <div className="hero__overlay" />
      <div className="hero__content">
        {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span>Scroll</span>
        <ArrowDown size={18} />
      </div>
    </section>
  );
}

export default HeroSection;
