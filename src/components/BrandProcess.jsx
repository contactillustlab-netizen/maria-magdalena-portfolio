import { useEffect } from 'react';

const phases = [
  {
    id: 'understanding',
    numeral: '01',
    title: 'Understanding',
    text: 'Before anything gets designed, we get clear on who this is for and why it matters.',
    detail: 'Background details, vision & values, target personas, stakeholder insights.',
    icon: 'understanding'
  },
  {
    id: 'research',
    numeral: '02',
    title: 'Research & discovery',
    text: 'Then we look outward — at the market, the competitors, what has already been tried.',
    detail: 'Customer research, competitive analysis, expert audits & insights, market positioning.',
    icon: 'research'
  },
  {
    id: 'strategy',
    numeral: '03',
    title: 'Strategy',
    text: 'The findings become a position: what to say, and why it is different.',
    detail: 'Story & personality, market opportunity, positioning & messaging, creative brief.',
    icon: 'strategy'
  },
  {
    id: 'creative',
    numeral: '04',
    title: 'Creative',
    text: 'The name, the mark, the system — the strategy becomes something visible.',
    detail: 'Naming, logo development, graphic standards, messaging framework.',
    icon: 'creative'
  },
  {
    id: 'deliver',
    numeral: '05',
    title: 'Deliver & integrate',
    text: 'Everything gets packaged so it works everywhere the brand shows up.',
    detail: 'Brand book & style guide, print integration, online & mobile, further brand extension.',
    icon: 'deliver'
  }
];

const strategyPills = [
  { label: 'Strategy', accent: true },
  { label: 'Positioning & messaging' },
  { label: 'Target personas' },
  { label: 'Market opportunity' },
  { label: 'Competitive analysis' },
  { label: 'Stakeholder insights' }
];

// One small animated line-art icon per phase, in the same restrained visual
// language as the contact page's signal field and the Visual Ecosystem
// steps — "Creative" and "Deliver" reuse those exact icons since they're
// literally the same moments in the process.
const phaseIcons = {
  understanding: (
    <svg viewBox="0 0 32 32" className="brand-process__icon brand-process__icon--understanding" focusable="false">
      <circle cx="16" cy="16" r="11" className="brand-process__icon-ring" />
      <circle cx="16" cy="16" r="6" />
      <circle cx="16" cy="16" r="1.6" fill="currentColor" stroke="none" />
    </svg>
  ),
  research: (
    <svg viewBox="0 0 32 32" className="brand-process__icon brand-process__icon--research" focusable="false">
      <circle cx="13" cy="13" r="8" />
      <line x1="18.7" y1="18.7" x2="27" y2="27" />
    </svg>
  ),
  strategy: (
    <svg viewBox="0 0 32 32" className="brand-process__icon brand-process__icon--strategy" focusable="false">
      <circle cx="16" cy="16" r="11" />
      <path className="brand-process__icon-needle" d="M16,8 L19,16 L16,24 L13,16 Z" fill="currentColor" stroke="none" />
    </svg>
  ),
  creative: (
    <svg viewBox="0 0 64 64" className="step-illustration step-illustration--brand" focusable="false">
      <g className="step-illustration__rays">
        <path d="M32 6V26" /><path d="M32 38V58" /><path d="M10 32H26" /><path d="M38 32H54" />
        <path d="M16 16L27 27" /><path d="M37 37L48 48" /><path d="M48 16L37 27" /><path d="M27 37L16 48" />
      </g>
      <circle cx="32" cy="32" r="7" className="step-illustration__core" />
    </svg>
  ),
  deliver: (
    <svg viewBox="0 0 64 64" className="step-illustration step-illustration--product" focusable="false">
      <rect x="11" y="7" width="42" height="50" rx="5" className="step-illustration__frame" />
      <line x1="18" y1="19" x2="46" y2="19" className="step-illustration__row step-illustration__row--1" />
      <line x1="18" y1="29" x2="38" y2="29" className="step-illustration__row step-illustration__row--2" />
      <line x1="18" y1="39" x2="42" y2="39" className="step-illustration__row step-illustration__row--3" />
      <rect x="18" y="47" width="18" height="6" rx="3" className="step-illustration__row step-illustration__row--4" />
    </svg>
  )
};

function BrandProcess() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );
    document
      .querySelectorAll('.brand-process__col, .brand-process__payoff')
      .forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="brand-process">
      <span className="brand-process__eyebrow">
        <span className="brand-process__eyebrow-dot" />
        Branding
      </span>
      <h2 className="brand-process__heading">From a blank page to a mark that means something.</h2>
      <p className="brand-process__desc">
        Every identity moves through the same five moments before it's ready to carry a name — the mark itself
        gets there step by step, from a loose idea to something confident enough to stand alone.
      </p>

      <div className="brand-process__columns">
        {phases.map((phase, index) => (
          <div
            key={phase.id}
            className="brand-process__col"
            tabIndex={0}
            style={{ '--tag-hue': Math.round((index / phases.length) * 360) }}
          >
            <div className="brand-process__col-head">
              <p className="brand-process__col-numeral">{phase.numeral}</p>
              <span className="brand-process__col-icon" aria-hidden="true">{phaseIcons[phase.icon]}</span>
            </div>
            <h3 className="brand-process__col-title">{phase.title}</h3>
            <div className="brand-process__col-explain">
              <p className="brand-process__col-text">{phase.text}</p>
              <p className="brand-process__col-detail">{phase.detail}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="brand-process__payoff">
        <h3 className="brand-process__payoff-heading">A mark that only "looks nice" doesn't hold its weight.</h3>
        <p className="brand-process__payoff-text">
          Everything in the four steps before Creative — understanding, research and strategy — is what earns a
          mark the right to look the way it does.
        </p>

        <svg
          className="brand-process__balance-svg"
          viewBox="0 0 1200 500"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
          aria-hidden="true"
        >
          <line x1="120" y1="400" x2="1080" y2="400" stroke="var(--color-border)" strokeWidth="1" />
          <text x="600" y="432" textAnchor="middle" className="brand-process__balance-caption">Whether a brand earns trust</text>

          <path d="M600,320 L575,400 L625,400 Z" fill="none" stroke="var(--color-muted)" strokeWidth="1.5" />

          <line x1="285" y1="375.6" x2="915" y2="264.4" stroke="var(--color-contrast)" strokeWidth="2" strokeLinecap="round" />
          <circle cx="600" cy="320" r="6" fill="var(--color-contrast)" />

          <g transform="translate(285,375.6) rotate(-10)">
            <line x1="-70" y1="0" x2="70" y2="0" stroke="var(--color-contrast)" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="-14" stroke="var(--color-muted)" strokeWidth="1.3" />

            <g className="brand-process__pill-stack">
              {strategyPills.map((pill, index) => {
                const y = -50 - index * 42;
                return (
                  <g key={pill.label} className={`brand-process__pill${pill.accent ? ' brand-process__pill--accent' : ''}`}>
                    <rect x="-115" y={y} width="230" height="34" rx="10" />
                    <text x="0" y={y + 22} textAnchor="middle">{pill.label}</text>
                  </g>
                );
              })}
            </g>
          </g>

          <g transform="translate(915,264.4) rotate(-10)">
            <line x1="-70" y1="0" x2="70" y2="0" stroke="var(--color-contrast)" strokeWidth="2" strokeLinecap="round" />
            <line x1="0" y1="0" x2="0" y2="-14" stroke="var(--color-muted)" strokeWidth="1.3" />
            <g className="brand-process__pill brand-process__pill--ghost brand-process__ghost-pill">
              <rect x="-58" y="-104" width="146" height="34" rx="17" />
              <text x="15" y="-82" textAnchor="middle">Looks nice</text>
            </g>
          </g>
        </svg>
      </div>
    </div>
  );
}

export default BrandProcess;
