import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultSteps = [
  {
    number: '01', label: 'Brand', icon: 'brand',
    text: 'I turn brand vision, research and strategy into a distinctive visual identity built to stay consistent and recognizable across every touchpoint.',
    cta: 'Explore Branding', href: '/design/branding'
  },
  {
    number: '02', label: 'Product', icon: 'product',
    text: 'I translate the brand into clear, intuitive digital experiences where usability, hierarchy and visual consistency work together.',
    cta: 'Explore UI Design', href: '/design/ui-design'
  },
  {
    number: '03', label: 'Marketing', icon: 'marketing',
    text: 'I extend the brand into campaigns and communication that stay consistent, engaging and recognizable across every channel.',
    cta: 'Explore Marketing Design', href: '/design/marketing-design'
  }
];

// Small looping line-art illustrations in the same visual language as the
// contact page's signal field (thin strokes, glowing traveling dots) — each
// one echoes what its step actually does rather than acting as a generic icon.
const stepIllustrations = {
  brand: (
    <svg viewBox="0 0 64 64" className="step-illustration step-illustration--brand" focusable="false">
      <g className="step-illustration__rays">
        <path d="M32 6V26" />
        <path d="M32 38V58" />
        <path d="M10 32H26" />
        <path d="M38 32H54" />
        <path d="M16 16L27 27" />
        <path d="M37 37L48 48" />
        <path d="M48 16L37 27" />
        <path d="M27 37L16 48" />
      </g>
      <circle cx="32" cy="32" r="7" className="step-illustration__core" />
    </svg>
  ),
  product: (
    <svg viewBox="0 0 64 64" className="step-illustration step-illustration--product" focusable="false">
      <rect x="11" y="7" width="42" height="50" rx="5" className="step-illustration__frame" />
      <line x1="18" y1="19" x2="46" y2="19" className="step-illustration__row step-illustration__row--1" />
      <line x1="18" y1="29" x2="38" y2="29" className="step-illustration__row step-illustration__row--2" />
      <line x1="18" y1="39" x2="42" y2="39" className="step-illustration__row step-illustration__row--3" />
      <rect x="18" y="47" width="18" height="6" rx="3" className="step-illustration__row step-illustration__row--4" />
    </svg>
  ),
  marketing: (
    <svg viewBox="0 0 64 64" className="step-illustration step-illustration--marketing" focusable="false">
      <path id="visual-ecosystem-signal-path" className="step-illustration__path" d="M12,50 C 24,46 36,34 46,16" />
      <circle cx="12" cy="50" r="4" className="step-illustration__source" />
      <circle cx="46" cy="16" r="10" className="step-illustration__ring step-illustration__ring--1" />
      <circle cx="46" cy="16" r="10" className="step-illustration__ring step-illustration__ring--2" />
      <circle r="3" className="step-illustration__signal">
        <animateMotion dur="2.8s" repeatCount="indefinite">
          <mpath href="#visual-ecosystem-signal-path" xlinkHref="#visual-ecosystem-signal-path" />
        </animateMotion>
        <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.1;0.85;1" dur="2.8s" repeatCount="indefinite" />
      </circle>
    </svg>
  )
};

function VisualEcosystem({
  title = 'One visual language. Everywhere.',
  steps = defaultSteps,
  note = 'I can work on each area independently or help build a complete visual ecosystem from brand identity to product and communication.'
}) {
  return (
    <div className="visual-ecosystem">
      <h2 className="visual-ecosystem__title">{title}</h2>
      <ol className="visual-ecosystem__steps">
        {steps.map((step, index) => (
          <li key={step.number} className="visual-ecosystem__step">
            <Link to={step.href} className="visual-ecosystem__step-body">
              <span className="visual-ecosystem__icon" aria-hidden="true">
                {stepIllustrations[step.icon]}
              </span>
              <span className="visual-ecosystem__label">{step.number} {step.label}</span>
              <p className="visual-ecosystem__text">{step.text}</p>
              <span className="visual-ecosystem__cta">
                {step.cta} <ArrowRight size={16} />
              </span>
            </Link>
            {index < steps.length - 1 && (
              <ArrowRight className="visual-ecosystem__arrow" size={22} aria-hidden="true" />
            )}
          </li>
        ))}
      </ol>
      <p className="visual-ecosystem__note">{note}</p>
    </div>
  );
}

export default VisualEcosystem;
