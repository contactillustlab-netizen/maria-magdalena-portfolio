import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function HeroSection({ eyebrow, title, subtitle, image, video, variant = 'illustration', titleVariant, primaryCta, secondaryCta }) {
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
      {video ? (
        <video
          className="hero__image"
          src={video}
          poster={image}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
        />
      ) : (
        <div
          className={`hero__image ${showImage ? '' : 'hero__image--placeholder'}`}
          style={showImage ? { backgroundImage: `url(${image})` } : undefined}
        >
          {!showImage ? <span className="hero__image-label">Coming soon...</span> : null}
        </div>
      )}
      <div className="hero__overlay" />
      <div className="hero__content">
        {eyebrow ? <p className="hero__eyebrow">{eyebrow}</p> : null}
        <h1 className={titleVariant === 'sentence' ? 'hero__title--sentence' : undefined}>{title}</h1>
        {subtitle ? <p className="hero__subtitle">{subtitle}</p> : null}
        {primaryCta || secondaryCta ? (
          <div className="hero__ctas">
            {primaryCta ? (
              primaryCta.to ? (
                <Link to={primaryCta.to} className="hero__cta hero__cta--primary">{primaryCta.label}</Link>
              ) : (
                <a href={primaryCta.href} className="hero__cta hero__cta--primary">{primaryCta.label}</a>
              )
            ) : null}
            {secondaryCta ? (
              secondaryCta.to ? (
                <Link to={secondaryCta.to} className="hero__cta hero__cta--secondary">{secondaryCta.label}</Link>
              ) : (
                <a href={secondaryCta.href} className="hero__cta hero__cta--secondary">{secondaryCta.label}</a>
              )
            ) : null}
          </div>
        ) : null}
      </div>
      <div className="hero__scroll" aria-hidden="true">
        <span className="hero__scroll-icon">
          <span className="hero__scroll-dot" />
        </span>
      </div>
    </section>
  );
}

export default HeroSection;
