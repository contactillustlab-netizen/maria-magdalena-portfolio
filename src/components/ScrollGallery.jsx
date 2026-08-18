import { useEffect, useRef, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartImage from './SmartImage';
import SectionHeader from './SectionHeader';

// On desktop, vertical scroll through this section is mapped 1:1 to horizontal
// track movement (a "pinned" section, like Apple/Trionn-style project rails).
// The title is just the first slide in that same track, not a fixed sidebar —
// it scrolls away together with the cards, so there's no empty leading gap.
// Below the pin breakpoint, or with reduced motion, it degrades to a plain
// swipeable row so touch scroll and accessibility keep working natively.
// Floating prev/next buttons work in both modes for keyboard/mouse-only users.
function ScrollGallery({ eyebrow, title, items, basePath }) {
  const wrapperRef = useRef(null);
  const viewportRef = useRef(null);
  const trackRef = useRef(null);
  const maxTranslateRef = useRef(0);
  const [translateX, setTranslateX] = useState(0);
  const [pinned, setPinned] = useState(false);
  const [wrapperHeight, setWrapperHeight] = useState(null);
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
      return undefined;
    }
    const wrapper = wrapperRef.current;
    const track = trackRef.current;
    if (!wrapper || !track) return undefined;

    let ticking = false;

    const measure = () => {
      maxTranslateRef.current = Math.max(track.scrollWidth - window.innerWidth, 0);
      setWrapperHeight(window.innerHeight + maxTranslateRef.current);
    };

    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const scrollDistance = wrapper.offsetHeight - window.innerHeight;
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
      const scrollDistance = wrapper.offsetHeight - window.innerHeight;
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
      <div className={`scroll-gallery__viewport${pinned ? ' scroll-gallery__viewport--pinned' : ''}`} ref={viewportRef}>
        <div
          className="scroll-gallery__track"
          ref={trackRef}
          style={pinned ? { transform: `translateX(${translateX}px)` } : undefined}
        >
          <div className="scroll-gallery__intro">
            {/* Ambient "exploration map": a hub of curved branches reaching out to
                project nodes, echoing the contact page's signal field but fanning
                outward (many explorations) instead of converging on one target. */}
            <div className="scroll-gallery__intro-bg" aria-hidden="true">
              <svg
                className="scroll-gallery__intro-bg-svg"
                viewBox="0 0 500 500"
                preserveAspectRatio="xMidYMid slice"
                focusable="false"
              >
                <path id="explore-path-a" className="scroll-gallery__intro-path" d="M70,80 C 200,40 320,30 420,60" />
                <path id="explore-path-b" className="scroll-gallery__intro-path" d="M70,80 C 220,90 380,130 460,190" />
                <path id="explore-path-c" className="scroll-gallery__intro-path" d="M70,80 C 180,150 300,240 380,320" />
                <path id="explore-path-d" className="scroll-gallery__intro-path" d="M70,80 C 140,220 240,350 300,430" />
                <path id="explore-path-e" className="scroll-gallery__intro-path" d="M70,80 C 90,220 120,370 150,460" />
                <path className="scroll-gallery__intro-path scroll-gallery__intro-path--branch" d="M460,190 C 480,230 495,265 490,300" />
                <path className="scroll-gallery__intro-path scroll-gallery__intro-path--branch" d="M300,430 C 270,455 245,470 230,480" />

                <circle className="scroll-gallery__intro-hub" cx="70" cy="80" r="5" />
                <circle className="scroll-gallery__intro-node" cx="420" cy="60" r="4" style={{ animationDelay: '0s' }} />
                <circle className="scroll-gallery__intro-node" cx="460" cy="190" r="4" style={{ animationDelay: '.5s' }} />
                <circle className="scroll-gallery__intro-node" cx="380" cy="320" r="4" style={{ animationDelay: '1s' }} />
                <circle className="scroll-gallery__intro-node" cx="300" cy="430" r="4" style={{ animationDelay: '1.5s' }} />
                <circle className="scroll-gallery__intro-node" cx="150" cy="460" r="4" style={{ animationDelay: '2s' }} />
                <circle className="scroll-gallery__intro-node scroll-gallery__intro-node--sm" cx="490" cy="300" r="3" style={{ animationDelay: '2.5s' }} />
                <circle className="scroll-gallery__intro-node scroll-gallery__intro-node--sm" cx="230" cy="480" r="3" style={{ animationDelay: '3s' }} />

                <circle className="scroll-gallery__intro-signal" r="3">
                  <animateMotion dur="5.6s" begin="0s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#explore-path-a" xlinkHref="#explore-path-a" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="5.6s" begin="0s" repeatCount="indefinite" />
                </circle>
                <circle className="scroll-gallery__intro-signal" r="3">
                  <animateMotion dur="5.6s" begin="1.9s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#explore-path-c" xlinkHref="#explore-path-c" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="5.6s" begin="1.9s" repeatCount="indefinite" />
                </circle>
                <circle className="scroll-gallery__intro-signal" r="3">
                  <animateMotion dur="5.6s" begin="3.8s" repeatCount="indefinite" rotate="auto">
                    <mpath href="#explore-path-e" xlinkHref="#explore-path-e" />
                  </animateMotion>
                  <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.85;1" dur="5.6s" begin="3.8s" repeatCount="indefinite" />
                </circle>
              </svg>
            </div>

            <SectionHeader eyebrow={eyebrow} title={title} />
            <span className="scroll-gallery__hint">
              View projects
              <ArrowRight size={16} className="scroll-gallery__hint-icon" />
            </span>
          </div>

          {items.map((item) => (
            <Link key={item.id} to={`${basePath}/${item.slug}`} className="scroll-gallery__card">
              <div className="scroll-gallery__image">
                <SmartImage src={item.image} alt={item.title} loading="lazy" />
              </div>
              <div className="scroll-gallery__caption">
                <div>
                  <h3 className="scroll-gallery__title">{item.title}</h3>
                  <p className="scroll-gallery__description">{item.description}</p>
                </div>
                <span className="scroll-gallery__cta">
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
