import { useEffect, useRef, useState } from 'react';
import lottie from 'lottie-web';
import scrollDownAnimation from '../assets/scroll-down.json';

function HeroSection({ eyebrow, title, subtitle, image, variant = 'illustration' }) {
  const [showImage, setShowImage] = useState(false);
  const scrollIconRef = useRef(null);

  useEffect(() => {
    const anim = lottie.loadAnimation({
      container: scrollIconRef.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: scrollDownAnimation
    });
    return () => anim.destroy();
  }, []);

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
        <div ref={scrollIconRef} className="hero__scroll-icon" />
      </div>
    </section>
  );
}

export default HeroSection;
