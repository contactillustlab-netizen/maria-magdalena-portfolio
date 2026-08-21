import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const defaultSteps = [
  {
    number: '01', label: 'Brand', reversed: true,
    illustration: '/illustrations/ecosystem-brand.webp',
    text: 'I turn brand vision, research and strategy into a distinctive visual identity built to stay consistent and recognizable across every touchpoint.',
    cta: 'Explore Branding', href: '/design/branding'
  },
  {
    number: '02', label: 'Product',
    illustration: '/illustrations/ecosystem-product.webp',
    text: 'I translate the brand into clear, intuitive digital experiences where usability, hierarchy and visual consistency work together.',
    cta: 'Explore UI Design', href: '/design/ui-design'
  },
  {
    number: '03', label: 'Marketing', reversed: true,
    illustration: '/illustrations/ecosystem-marketing.webp',
    text: 'I extend the brand into campaigns and communication that stay consistent, engaging and recognizable across every channel.',
    cta: 'Explore Marketing Design', href: '/design/marketing-design'
  }
];

function VisualEcosystem({
  title = 'One visual language. Everywhere.',
  steps = defaultSteps,
  note = 'I can work on each area independently or help build a complete visual ecosystem from brand identity to product and communication.'
}) {
  return (
    <div className="visual-ecosystem">
      <h2 className="visual-ecosystem__title">{title}</h2>
      <p className="visual-ecosystem__note">{note}</p>
      <ol className="visual-ecosystem__steps">
        {steps.map((step, index) => (
          <li key={step.number} className="visual-ecosystem__step">
            <Link to={step.href} className={`visual-ecosystem__step-link${step.reversed ? ' visual-ecosystem__step-link--reversed' : ''}`}>
              <div className="visual-ecosystem__step-body">
                <span className="visual-ecosystem__number">{step.number}</span>
                <span className="visual-ecosystem__label">{step.label}</span>
                <p className="visual-ecosystem__text">{step.text}</p>
                <span className="visual-ecosystem__cta">
                  {step.cta} <ArrowRight size={16} />
                </span>
              </div>
              <div className="visual-ecosystem__scene">
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
