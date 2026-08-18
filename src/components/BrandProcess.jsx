import { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const phases = [
  {
    id: 'understanding',
    numeral: '01',
    title: 'Understanding',
    text: 'Before anything gets designed, we get clear on who this is for and why it matters.',
    detail: 'Background details, vision & values, target personas, stakeholder insights.'
  },
  {
    id: 'research',
    numeral: '02',
    title: 'Research & discovery',
    text: 'Then we look outward — at the market, the competitors, what has already been tried.',
    detail: 'Customer research, competitive analysis, expert audits & insights, market positioning.'
  },
  {
    id: 'strategy',
    numeral: '03',
    title: 'Strategy',
    text: 'The findings become a position: what to say, and why it is different.',
    detail: 'Story & personality, market opportunity, positioning & messaging, creative brief.'
  },
  {
    id: 'creative',
    numeral: '04',
    title: 'Creative',
    text: 'The name, the mark, the system — the strategy becomes something visible.',
    detail: 'Naming, logo development, graphic standards, messaging framework.'
  },
  {
    id: 'deliver',
    numeral: '05',
    title: 'Deliver & integrate',
    text: 'Everything gets packaged so it works everywhere the brand shows up.',
    detail: 'Brand book & style guide, print integration, online & mobile, further brand extension.'
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

function BrandProcess() {
  const [expandedId, setExpandedId] = useState(null);

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
      .querySelectorAll('.brand-process__evolution, .brand-process__col, .brand-process__payoff')
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
        gets there step by step, from a loose idea to something confident enough to stand alone. Click a step
        to see what happens inside it.
      </p>

      <div className="brand-process__evolution" aria-hidden="true">
        <svg
          className="brand-process__evolution-svg"
          viewBox="0 0 1200 220"
          preserveAspectRatio="xMidYMid meet"
          focusable="false"
        >
          <path className="brand-process__thread" strokeDasharray="260" d="M120,70 L360,70">
            <animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" keyTimes="0;0.11;1" values="260;0;0" />
          </path>
          <path className="brand-process__thread" strokeDasharray="260" d="M360,70 L600,70">
            <animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" keyTimes="0;0.22;0.33;1" values="260;260;0;0" />
          </path>
          <path className="brand-process__thread" strokeDasharray="260" d="M600,70 L840,70">
            <animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" keyTimes="0;0.44;0.55;1" values="260;260;0;0" />
          </path>
          <path className="brand-process__thread" strokeDasharray="260" d="M840,70 L1080,70">
            <animate attributeName="stroke-dashoffset" dur="6s" repeatCount="indefinite" keyTimes="0;0.66;0.77;1" values="260;260;0;0" />
          </path>

          {/* Stage 1 — Understanding: barely-there, scratchy, uncertain */}
          <g className="brand-process__mark brand-process__mark--1" transform="translate(72,12) scale(1.25)" strokeWidth="1.1" opacity=".4">
            <path d="M32 21L32 27" /><path d="M32 37L32 43" /><path d="M21 32L27 32" /><path d="M37 32L43 32" />
            <path d="M24 24L27.5 27.5" /><path d="M36.5 36.5L40 40" /><path d="M40 24L36.5 27.5" /><path d="M27.5 36.5L24 40" />
            <path d="M27 19L29 23" /><path d="M35 19L33 23" /><path d="M19 27L23 29" /><path d="M19 35L23 33" />
            <path d="M45 27L41 29" /><path d="M45 35L41 33" /><path d="M27 45L29 41" /><path d="M35 45L33 41" />
            <path d="M25,32 C25,27.5 28,24.5 32,25 C36,24.5 39,28 38.7,32.5 C39,37 35.5,39.5 32,39 C28,39.5 25,36.5 25,32 Z" />
          </g>

          {/* Stage 2 — Research & Discovery: fewer strokes, still loose */}
          <g className="brand-process__mark brand-process__mark--2" transform="translate(312,12) scale(1.25)" strokeWidth="1.2" opacity=".55">
            <path d="M32 18L32 26" /><path d="M32 38L32 46" /><path d="M22 32L26 32" /><path d="M38 32L42 32" />
            <path d="M24 24L27 27" /><path d="M37 37L40 40" /><path d="M40 24L37 27" /><path d="M27 37L24 40" />
            <path d="M26 16L29 21" /><path d="M38 16L35 21" /><path d="M16 26L21 29" /><path d="M16 38L21 35" />
            <path d="M26.5,32 C26.5,28.5 29,26 32,26.3 C35.5,26 38,29 37.8,32.3 C38,36 35,38.5 32,38 C28.5,38.3 26,35.5 26.5,32 Z" />
          </g>

          {/* Stage 3 — Strategy: converging toward the eight main directions */}
          <g className="brand-process__mark brand-process__mark--3" transform="translate(552,12) scale(1.25)" strokeWidth="1.3" opacity=".7">
            <path d="M32 14L32 26" /><path d="M32 38L32 50" /><path d="M18 32L26 32" /><path d="M38 32L46 32" />
            <path d="M21 21L27 27" /><path d="M37 37L43 43" /><path d="M43 21L37 27" /><path d="M27 37L21 43" />
            <path d="M24 12L27 19" /><path d="M40 12L37 19" />
            <circle className="brand-process__mark-core" cx="32" cy="32" r="6.4" fill="var(--color-contrast)" stroke="none" />
          </g>

          {/* Stage 4 — Creative: nearly resolved, one stray mark still settling */}
          <g className="brand-process__mark brand-process__mark--4" transform="translate(792,12) scale(1.25)" strokeWidth="1.4" opacity=".88">
            <path d="M32 10L32 26" /><path d="M32 38L32 54" /><path d="M14 32L26 32" /><path d="M38 32L50 32" />
            <path d="M18 18L27 27" /><path d="M37 37L46 46" /><path d="M46 18L37 27" /><path d="M27 37L18 46" />
            <path d="M30 9L30 24" opacity=".35" />
            <circle className="brand-process__mark-core" cx="32" cy="32" r="6.8" fill="var(--color-contrast)" stroke="none" />
          </g>

          {/* Stage 5 — Deliver & Integrate: the resolved mark, calm and alive */}
          <g className="brand-process__mark brand-process__mark--5" transform="translate(1032,12) scale(1.25)" strokeWidth="1.5">
            <g className="brand-process__mark-rays">
              <path d="M32 6L32 26" /><path d="M32 38L32 58" /><path d="M10 32L26 32" /><path d="M38 32L54 32" />
              <path d="M16 16L27 27" /><path d="M37 37L48 48" /><path d="M48 16L37 27" /><path d="M27 37L16 48" />
            </g>
            <circle className="brand-process__mark-core" cx="32" cy="32" r="7" />
          </g>
        </svg>
      </div>

      <div className="brand-process__columns">
        {phases.map((phase) => {
          const expanded = expandedId === phase.id;
          return (
            <button
              key={phase.id}
              type="button"
              className="brand-process__col"
              onClick={() => setExpandedId(expanded ? null : phase.id)}
              aria-expanded={expanded}
            >
              <p className="brand-process__col-numeral">{phase.numeral}</p>
              <div className="brand-process__col-title">
                <h3>{phase.title}</h3>
                <ChevronDown
                  className="brand-process__col-chevron"
                  size={14}
                  style={{ transform: expanded ? 'rotate(180deg)' : 'rotate(0deg)' }}
                />
              </div>
              <p className="brand-process__col-text">{phase.text}</p>
              {expanded ? <p className="brand-process__col-detail">{phase.detail}</p> : null}
            </button>
          );
        })}
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
