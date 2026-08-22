import { useCallback, useEffect, useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import SmartImage from './SmartImage';
import { useMountTransition } from '../lib/useMountTransition';

function ArtworkModal({ items, index, startImage, onClose, onNavigate }) {
  const isOpen = index !== null && index !== undefined;
  const { mounted, visible } = useMountTransition(isOpen);

  // Keep showing the last artwork while the close transition plays, instead
  // of the content vanishing the instant the parent clears `index`.
  const lastIndexRef = useRef(index);
  if (isOpen) lastIndexRef.current = index;
  const activeIndex = isOpen ? index : lastIndexRef.current;

  const item = activeIndex !== null && activeIndex !== undefined ? items[activeIndex] : null;
  const projectImages = item?.images?.length > 1 ? item.images : null;
  const [subIndex, setSubIndex] = useState(0);

  useEffect(() => {
    if (!item || !projectImages) {
      setSubIndex(0);
      return;
    }
    const startPosition = projectImages.indexOf(startImage || item.image);
    setSubIndex(startPosition >= 0 ? startPosition : 0);
  }, [item, projectImages, startImage]);

  const hasSiblingProjects = item && items.length > 1;
  const canNavigate = projectImages ? projectImages.length > 1 : hasSiblingProjects;

  // Video and animation entries aren't viewable inside this image modal — step
  // past them when cycling through siblings instead of landing on a blank stage.
  const stepIndex = useCallback((from, direction) => {
    let next = from;
    for (let i = 0; i < items.length; i += 1) {
      next = (next + direction + items.length) % items.length;
      if (!items[next]?.video && !items[next]?.animation) return next;
    }
    return from;
  }, [items]);

  const goPrev = useCallback(() => {
    if (!canNavigate) return;
    if (projectImages) {
      setSubIndex((current) => (current - 1 + projectImages.length) % projectImages.length);
    } else {
      onNavigate(stepIndex(activeIndex, -1));
    }
  }, [canNavigate, projectImages, activeIndex, stepIndex, onNavigate]);

  const goNext = useCallback(() => {
    if (!canNavigate) return;
    if (projectImages) {
      setSubIndex((current) => (current + 1) % projectImages.length);
    } else {
      onNavigate(stepIndex(activeIndex, 1));
    }
  }, [canNavigate, projectImages, activeIndex, stepIndex, onNavigate]);

  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [isOpen, onClose, goPrev, goNext]);

  if (!mounted || !item) return null;

  const handleExpand = (event) => {
    const stage = event.currentTarget.closest('.modal__content').querySelector('.modal__stage');
    if (!stage) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      stage.requestFullscreen?.();
    }
  };

  const currentSrc = projectImages ? projectImages[subIndex] : item.image;
  const prevItem = !projectImages && hasSiblingProjects ? items[stepIndex(activeIndex, -1)] : null;
  const nextItem = !projectImages && hasSiblingProjects ? items[stepIndex(activeIndex, 1)] : null;

  return createPortal(
    <div className={`modal${visible ? ' is-open' : ''}`} role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__icon-btn modal__expand" onClick={handleExpand} type="button" aria-label="Toggle fullscreen">
          <Maximize2 size={20} />
        </button>
        <button className="modal__icon-btn modal__close" onClick={onClose} type="button" aria-label="Close modal">
          <X size={20} />
        </button>

        {canNavigate ? (
          <button type="button" className="modal__control modal__control--prev" onClick={goPrev} aria-label="Previous artwork">
            <ChevronLeft size={20} />
          </button>
        ) : null}

        <div className="modal__viewer">
          <div className="modal__stage">
            <SmartImage src={currentSrc} alt={item.title} orientation={item.orientation} />
          </div>
        </div>

        {canNavigate ? (
          <button type="button" className="modal__control modal__control--next" onClick={goNext} aria-label="Next artwork">
            <ChevronRight size={20} />
          </button>
        ) : null}

        <h3 className="modal__title">
          {item.title}
          {projectImages ? <span className="modal__title-count">{subIndex + 1} / {projectImages.length}</span> : null}
        </h3>

        {projectImages ? (
          <div className="modal__thumbs">
            {projectImages.map((src, i) => (
              <button
                key={src}
                type="button"
                className={`modal__thumb${i === subIndex ? ' modal__thumb--active' : ''}`}
                onClick={() => setSubIndex(i)}
                aria-label={`View image ${i + 1} of ${item.title}`}
                aria-current={i === subIndex}
              >
                <SmartImage src={src} alt={`${item.title} ${i + 1}`} orientation={item.orientation} />
              </button>
            ))}
          </div>
        ) : hasSiblingProjects ? (
          <div className="modal__thumbs">
            <button type="button" className="modal__thumb" onClick={goPrev} aria-label={`View ${prevItem.title}`}>
              <SmartImage src={prevItem.image} alt={prevItem.title} orientation={prevItem.orientation} />
            </button>
            <button type="button" className="modal__thumb modal__thumb--active" aria-label={item.title} aria-current="true">
              <SmartImage src={item.image} alt={item.title} orientation={item.orientation} />
            </button>
            <button type="button" className="modal__thumb" onClick={goNext} aria-label={`View ${nextItem.title}`}>
              <SmartImage src={nextItem.image} alt={nextItem.title} orientation={nextItem.orientation} />
            </button>
          </div>
        ) : null}
      </div>
    </div>,
    document.body
  );
}

export default ArtworkModal;
