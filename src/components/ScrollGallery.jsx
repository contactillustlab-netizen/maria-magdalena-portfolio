import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartImage from './SmartImage';
import SectionHeader from './SectionHeader';
import LottieAnimation from './LottieAnimation';

// On desktop, vertical scroll through this section is mapped 1:1 to horizontal
// track movement (a "pinned" section, like Apple/Trionn-style project rails).
// The title is just the first slide in that same track, not a fixed sidebar —
// it scrolls away together with the cards, so there's no empty leading gap.
// Below the pin breakpoint, or with reduced motion, it degrades to a plain
// swipeable row so touch scroll and accessibility keep working natively.
// Floating prev/next buttons work in both modes for keyboard/mouse-only users.
// The pinned viewport only needs to be as tall as its content (plus a capped
// outer gap) instead of the full viewport height — a fixed 64px top/bottom
// breathing room regardless of how much taller the screen is than the cards.
const PINNED_OUTER_GAP = 64;

function ScrollGallery({ eyebrow, title, items, basePath }) {
  const wrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const maxTranslateRef = useRef(0);
  const viewportHeightRef = useRef(0);
  const [translateX, setTranslateX] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState(null);
  const [viewportHeight, setViewportHeight] = useState(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(min-width: 1025px)');
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setPinned(media.matches && !reduceMotion.matches);
    update();
    media.addEventListener('change', update);
    reduceMotion.addEventListener('change', update);
    return () => {
      media.removeEventListener('change', update);
      reduceMotion.removeEventListener('change', update);
    };
  }, []);

  useEffect(() => {
    if (!pinned) {
      setTranslateX(0);
      setWrapperHeight(null);
      setViewportHeight(null);
      return undefined;
    }
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return undefined;

    let ticking = false;

    const measure = () => {
      maxTranslateRef.current = Math.max(track.scrollWidth - window.innerWidth, 0);
      const navHeight = parseFloat(getComputedStyle(document.documentElement).getPropertyValue('--nav-height')) || 0;
      const available = window.innerHeight - navHeight;
      const fitted = Math.min(available, track.offsetHeight + PINNED_OUTER_GAP * 2);
      viewportHeightRef.current = fitted;
      setViewportHeight(fitted);
      setWrapperHeight(fitted + maxTranslateRef.current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollDistance = wrapper.offsetHeight - viewportHeightRef.current;
        if (scrollDistance > 0) {
          const rect = wrapper.getBoundingClientRect();
          const progress = Math.min(Math.max(-rect.top / scrollDistance, 0), 1);
          setTranslateX(-progress * maxTranslateRef.current);
          setAtStart(progress <= 0.001);
          setAtEnd(progress >= 0.999);
        }
        ticking = false;
      });
    };

    const onResize = () => {
      measure();
      onScroll();
    };

    measure();
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
    };
  }, [pinned, items]);

  useEffect(() => {
    if (pinned) return undefined;
    const track = trackRef.current;
    if (!track) return undefined;
    const onScroll = () => {
      setAtStart(track.scrollLeft <= 1);
      setAtEnd(track.scrollLeft >= track.scrollWidth - track.clientWidth - 1);
    };
    onScroll();
    track.addEventListener('scroll', onScroll, { passive: true });
    return () => track.removeEventListener('scroll', onScroll);
  }, [pinned, items]);

  useEffect(() => {
    const root = pinned ? viewportRef.current : trackRef.current;
    const track = trackRef.current;
    if (!root || !track) return undefined;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return undefined;

    const cards = track.querySelectorAll('.scroll-gallery__card');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { root, threshold: 0.2 }
    );
    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, [pinned, items]);

  const stepBy = (direction) => {
    const track = trackRef.current;
    const wrapper = wrapperRef.current;
    if (!track) return;
    const step = track.children[1] || track.firstElementChild;
    const cardWidth = step?.getBoundingClientRect().width || 0;
    const gap = parseFloat(getComputedStyle(track).columnGap || '0') || 0;
    const cardStep = cardWidth + gap;

    if (pinned && wrapper) {
      if (maxTranslateRef.current <= 0) return;
      const scrollDistance = wrapper.offsetHeight - viewportHeightRef.current;
      if (scrollDistance <= 0) return;
      const deltaScroll = (cardStep / maxTranslateRef.current) * scrollDistance * direction;
      window.scrollBy({ top: deltaScroll, behavior: 'smooth' });
    } else {
      track.scrollBy({ left: cardStep * direction, behavior: 'smooth' });
    }
  };

  return (
    <div
      className="scroll-gallery"
      ref={wrapperRef}
      style={pinned && wrapperHeight ? { height: `${wrapperHeight}px` } : undefined}
    >
      {/* Mobile only (see CSS): the title sits above the track as a normal
          block instead of being the track's first swipeable slide, so the
          peek layout below can start right on the first project card. */}
      <div className="scroll-gallery__intro--mobile">
        <SectionHeader eyebrow={eyebrow} title={title} />
      </div>

      <div
        className={`scroll-gallery__viewport${pinned ? ' scroll-gallery__viewport--pinned' : ''}`}
        ref={viewportRef}
        style={pinned && viewportHeight ? { height: `${viewportHeight}px` } : undefined}
      >
        <div
          className="scroll-gallery__track"
          ref={trackRef}
          style={pinned ? { transform: `translateX(${translateX}px)` } : undefined}
        >
          <div className="scroll-gallery__intro">
            <SectionHeader eyebrow={eyebrow} title={title} />
            <span className="scroll-gallery__hint">
              View projects
              <ArrowRight size={16} className="scroll-gallery__hint-icon" />
            </span>
          </div>

          {items.map((item) => (
            <Link key={item.id} to={`${basePath}/${item.slug}`} className="scroll-gallery__card">
              <div className="scroll-gallery__image">
                {item.animation ? (
                  <LottieAnimation
                    src={Array.isArray(item.animation) ? item.animation[0] : item.animation}
                    label={item.title}
                  />
                ) : (
                  <SmartImage src={item.image} alt={item.title} loading="lazy" />
                )}
                <span className="scroll-gallery__image-overlay">
                  <span className="scroll-gallery__cta scroll-gallery__cta--overlay">
                    Explore project <ArrowRight size={16} />
                  </span>
                </span>
              </div>
              <div className="scroll-gallery__caption">
                <div>
                  <h3 className="scroll-gallery__title">{item.title}</h3>
                  <p className="scroll-gallery__description">{item.description}</p>
                  {item.tag ? <span className="scroll-gallery__tag">{item.tag}</span> : null}
                </div>
                <span className="scroll-gallery__cta scroll-gallery__cta--inline">
                  Explore project <ArrowRight size={16} />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="scroll-gallery__controls">
          <button
            type="button"
            className="scroll-gallery__control"
            onClick={() => stepBy(-1)}
            disabled={atStart}
            aria-label="Previous project"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            className="scroll-gallery__control"
            onClick={() => stepBy(1)}
            disabled={atEnd}
            aria-label="Next project"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ScrollGallery;
