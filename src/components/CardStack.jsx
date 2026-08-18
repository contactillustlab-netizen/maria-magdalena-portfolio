import { useEffect, useLayoutEffect, useRef, useState } from 'react';

const DEFAULT_TONES = [
  { bg: '#FFFFFF', fg: '#111111', border: 'rgba(0,0,0,.12)' },
  { bg: '#E8E8E8', fg: '#161616', border: 'rgba(0,0,0,.12)' },
  { bg: '#BDBDBD', fg: '#1a1a1a', border: 'rgba(0,0,0,.14)' },
  { bg: '#666666', fg: '#FFFFFF', border: 'rgba(255,255,255,.18)' },
  { bg: '#111111', fg: '#FFFFFF', border: 'rgba(255,255,255,.16)' }
];

// A deck of cards that fans out into a row on desktop hover/focus, or on
// tap for touch devices — see the pointer-capability media queries in
// global.css for how the two are kept from fighting each other.
function CardStack({ cards, tones = DEFAULT_TONES, label = 'Process steps' }) {
  const [expanded, setExpanded] = useState(false);
  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const scrollingRef = useRef(false);
  const scrollTimeoutRef = useRef(null);

  // Card height is fixed (not auto), since the fan/stack transforms rely on
  // a stable box to translate around — so the tallest card's natural
  // content height has to be measured and applied to all of them, or
  // shorter cards clip their own text and longer ones overflow the deck.
  // Only ever measure while collapsed: on touch, collapsed is always the
  // narrowest width the card renders at, so it wraps the most and needs
  // the most height — that safely covers the expanded (wider, shorter-
  // wrapped) state too. Measuring mid-transition would catch whatever
  // width the animation happens to be interpolating through and could
  // undersize the final layout, so a resize while expanded is skipped
  // rather than risking that.
  useLayoutEffect(() => {
    function measure() {
      const container = containerRef.current;
      const track = trackRef.current;
      if (!container || !track) return;
      const surfaces = track.querySelectorAll('.card-stack__card-surface');
      if (!surfaces.length) return;
      const tallest = Math.max(...Array.from(surfaces, (el) => el.scrollHeight));
      if (tallest > 0) container.style.setProperty('--stack-h', `${tallest}px`);
    }
    if (!expanded) measure();
    // Collapsing narrows the cards back down over --stack-duration (560ms);
    // measuring only at the instant the transition starts would catch
    // whatever width it's still animating through, not the final narrow
    // one, so re-measure again once it's had time to settle.
    const settleTimeout = expanded ? null : setTimeout(measure, 650);
    let resizeTimeout;
    function handleResize() {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(() => {
        if (!expanded) measure();
      }, 120);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
      clearTimeout(resizeTimeout);
      clearTimeout(settleTimeout);
    };
  }, [cards, expanded]);

  useEffect(() => {
    if (!expanded) return;
    function handleOutsideClick(event) {
      if (scrollingRef.current) return;
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setExpanded(false);
      }
    }
    document.addEventListener('click', handleOutsideClick);
    return () => document.removeEventListener('click', handleOutsideClick);
  }, [expanded]);

  function isFinePointer() {
    return typeof window !== 'undefined' && window.matchMedia('(hover: hover) and (pointer: fine)').matches;
  }

  function handleContainerClick(event) {
    // Desktop hover already drives the expand/collapse visually — a click
    // toggling React state on top of that would leave it stuck open once
    // the mouse leaves, so touch is the only device that acts on taps.
    if (isFinePointer()) return;
    if (!expanded) {
      setExpanded(true);
      return;
    }
    if (scrollingRef.current) return;
    if (event.target.closest('[data-card-front="true"]')) {
      setExpanded(false);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      setExpanded((value) => !value);
    }
  }

  function handleTrackScroll() {
    scrollingRef.current = true;
    clearTimeout(scrollTimeoutRef.current);
    scrollTimeoutRef.current = setTimeout(() => {
      scrollingRef.current = false;
    }, 150);
  }

  return (
    <div
      ref={containerRef}
      className={`card-stack${expanded ? ' is-expanded' : ''}`}
      role="group"
      aria-expanded={expanded}
      aria-label={label}
      tabIndex={0}
      onClick={handleContainerClick}
      onKeyDown={handleKeyDown}
    >
      <div className="card-stack__track" ref={trackRef} onScroll={handleTrackScroll}>
        {cards.map((card, index) => {
          const tone = tones[index % tones.length];
          return (
            <div
              key={card.number}
              className="card-stack__card"
              data-card-front={index === cards.length - 1 ? 'true' : undefined}
            >
              <div
                className="card-stack__card-surface"
                style={{ '--card-bg': tone.bg, '--card-fg': tone.fg, '--card-border': tone.border }}
              >
                <div className="card-stack__card-top">
                  <p className="card-stack__number">{card.number}</p>
                  {card.icon && <span className="card-stack__icon" aria-hidden="true">{card.icon}</span>}
                </div>
                <div>
                  <h3 className="card-stack__title">{card.title}</h3>
                  <div className="card-stack__divider" />
                  <p className="card-stack__description">{card.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CardStack;
