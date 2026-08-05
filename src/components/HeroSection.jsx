import { useEffect, useState } from 'react';
import { ArrowDown } from 'lucide-react';

function HeroSection({ eyebrow, title, subtitle, image, variant = 'illustration' }) {
  const [showImage, setShowImage] = useState(false);

  useEffect(() => {
    if (!image) {
      setShowImage(false);
      return;
    }
    let cancelled = false;
    const preload = new Image();
    preload.onload = () => { if (!cancelled) setShowImage(true); };
    preload.onerror = () => { if (!cancelled) setShowImage(false); };
    preload.src = image;
    return () => { cancelled = true; };
  }, [image]);

  return (
    <section className={`hero hero--${variant}`}>
      <div
        className={`hero__image ${showImage ? '' : 'hero__image--placeholder'}`}
        style={showImage ? { backgroundImage: `url(${image})` } : undefined}
      >
        {!showImage ? <span className="hero__image-label">Visual Placeholder</span> : null}
      </div>
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
