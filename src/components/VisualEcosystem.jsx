import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultSteps = [
  {
    number: '01', label: 'Brand', reversed: true,
    illustration: '/illustrations/ecosystem-brand.svg',
    text: 'I turn brand vision, research and strategy into a distinctive visual identity built to stay consistent and recognizable across every touchpoint.',
    cta: 'Explore Branding', href: '/design/branding'
  },
  {
    number: '02', label: 'Product',
    illustration: '/illustrations/ecosystem-product.svg',
    text: 'I understand the product and business plan first, then research, structure and translate requirements into intuitive flows, scalable components and consistent digital experiences.',
    cta: 'Explore UI Design', href: '/design/ui-design'
  },
  {
    number: '03', label: 'Marketing', reversed: true,
    illustration: '/illustrations/ecosystem-marketing.svg',
    text: 'I create campaign visuals that improve clarity and visibility. Including infographics, illustrations, flyers, social assets and other branded communication materials.',
    cta: 'Explore Marketing Design', href: '/design/marketing-design'
  }
];

function VisualEcosystem({
  title = 'One visual language. Everywhere.',
  steps = defaultSteps,
  note = 'I can work on each area independently or help build a complete visual ecosystem from brand identity to product and communication.'
}) {
  const rootRef = useRef(null);

  // Same reveal as the branding grid: each half slides in from its own side
  // the first time the pair scrolls into view.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      // The cards are tall, so a small threshold would fire while the pair is
      // still below the fold and the slide would be over before it's on
      // screen. Waiting for a third of the card to sit above the lower edge
      // of the viewport puts the animation right where it's being looked at.
      { threshold: 0.35, rootMargin: '0px 0px -12% 0px' }
    );
    root.querySelectorAll('.visual-ecosystem__reveal').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, [steps]);

  return (
    <div className="visual-ecosystem" ref={rootRef}>
      <span className="hairline" aria-hidden="true" />
      <h2 className="visual-ecosystem__title">{title}</h2>
      <p className="visual-ecosystem__note">{note}</p>
      <ol className="visual-ecosystem__steps">
        {steps.map((step, index) => (
          <li key={step.number} className="visual-ecosystem__step">
            <Link to={step.href} className={`visual-ecosystem__step-link${step.reversed ? ' visual-ecosystem__step-link--reversed' : ''}`}>
              <div className={`visual-ecosystem__step-body visual-ecosystem__reveal visual-ecosystem__reveal--from-${step.reversed ? 'right' : 'left'}`}>
                <span className="visual-ecosystem__number">{step.number}</span>
                <span className="visual-ecosystem__label">{step.label}</span>
                <p className="visual-ecosystem__text">{step.text}</p>
                <span className="visual-ecosystem__cta">
                  {step.cta} <ArrowRight size={16} />
                </span>
              </div>
              <div className={`visual-ecosystem__scene visual-ecosystem__reveal visual-ecosystem__reveal--from-${step.reversed ? 'left' : 'right'}`}>
                <img className="visual-ecosystem__art" src={step.illustration} alt="" loading="lazy" />
              </div>
            </Link>
            {index < steps.length - 1 && (
              <ArrowRight className="visual-ecosystem__arrow" size={22} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
    </div>
  );
}

export default VisualEcosystem;
