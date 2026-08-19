import { useEffect, useState } from 'react';

// Reusable stack → fan-out interaction: a loose deck of cards that spreads
// into a clean row on hover/focus. Desktop-only (hover-capable, >=1025px) —
// below that, or on touch devices, this renders as an inert wrapper so the
// consumer's own responsive layout (e.g. a plain grid) is left untouched.
function CardStack({ cards, className = '' }) {
  const [isInteractive, setIsInteractive] = useState(false);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(hover: hover) and (pointer: fine) and (min-width: 1025px)');
    const update = () => setIsInteractive(media.matches);
    update();
    media.addEventListener('change', update);
    return () => media.removeEventListener('change', update);
  }, []);

  const interactiveProps = isInteractive
    ? {
        role: 'button',
        tabIndex: 0,
        'aria-expanded': expanded,
        onMouseEnter: () => setExpanded(true),
        onMouseLeave: () => setExpanded(false),
        onFocus: () => setExpanded(true),
        onBlur: () => setExpanded(false),
        onKeyDown: (event) => {
          if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            setExpanded((value) => !value);
          }
          if (event.key === 'Escape') setExpanded(false);
        }
      }
    : {};

  return (
    <div
      className={`card-stack${className ? ` ${className}` : ''}${isInteractive && expanded ? ' is-expanded' : ''}`}
      {...interactiveProps}
    >
      {cards.map((card) => (
        <div key={card.id} className="card-stack__item">
          {card.content}
        </div>
      ))}
    </div>
  );
}

export default CardStack;
