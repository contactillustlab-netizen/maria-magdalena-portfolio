import { useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Pause, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import SmartImage from './SmartImage';

const SCROLL_SPEED = 0.6;

function ProjectSlider({ items, basePath }) {
  const trackRef = useRef(null);
  const interactingRef = useRef(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const loopItems = [...items, ...items];

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) return;

    let frameId;
    const step = () => {
      if (isPlaying && !interactingRef.current) {
        const half = track.scrollWidth / 2;
        track.scrollLeft += SCROLL_SPEED;
        if (track.scrollLeft >= half) {
          track.scrollLeft -= half;
        }
      }
      frameId = requestAnimationFrame(step);
    };
    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [isPlaying]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const pause = () => { interactingRef.current = true; };
    const resume = () => { interactingRef.current = false; };
    track.addEventListener('pointerenter', pause);
    track.addEventListener('pointerleave', resume);
    track.addEventListener('pointerdown', pause);
    track.addEventListener('pointerup', resume);
    return () => {
      track.removeEventListener('pointerenter', pause);
      track.removeEventListener('pointerleave', resume);
      track.removeEventListener('pointerdown', pause);
      track.removeEventListener('pointerup', resume);
    };
  }, []);

  const scrollByCard = (direction) => {
    const track = trackRef.current;
    if (!track) return;
    setIsPlaying(false);
    const cardWidth = track.firstElementChild?.getBoundingClientRect().width || 0;
    track.scrollBy({ left: direction * cardWidth, behavior: 'smooth' });
  };

  return (
    <div className="project-slider">
      <div className="project-slider__track" ref={trackRef}>
        {loopItems.map((item, index) => (
          <Link
            key={`${item.id}-${index}`}
            to={`${basePath}/${item.slug}`}
            className="project-slider__card"
            aria-label={`View ${item.title}`}
            tabIndex={index < items.length ? 0 : -1}
          >
            <SmartImage src={item.image} alt={item.title} loading="lazy" />
            <span className="project-slider__overlay">
              <span className="project-slider__title">{item.title}</span>
              <span className="project-slider__description">{item.description}</span>
            </span>
          </Link>
        ))}
      </div>

      <div className="project-slider__nav" aria-hidden="false">
        <button
          type="button"
          className="project-slider__control project-slider__control--prev"
          onClick={() => scrollByCard(-1)}
          aria-label="Previous projects"
        >
          <ChevronLeft size={20} />
        </button>
        <button
          type="button"
          className="project-slider__control project-slider__control--next"
          onClick={() => scrollByCard(1)}
          aria-label="Next projects"
        >
          <ChevronRight size={20} />
        </button>
      </div>

      <button
        type="button"
        className="project-slider__control project-slider__play"
        onClick={() => setIsPlaying((prev) => !prev)}
        aria-label={isPlaying ? 'Pause slider' : 'Play slider'}
        aria-pressed={!isPlaying}
      >
        {isPlaying ? <Pause size={18} /> : <Play size={18} />}
      </button>
    </div>
  );
}

export default ProjectSlider;
