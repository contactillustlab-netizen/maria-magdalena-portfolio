import { useCallback, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Maximize2, X } from 'lucide-react';
import { createPortal } from 'react-dom';
import SmartImage from './SmartImage';

function ArtworkModal({ items, index, onClose, onNavigate }) {
  const item = index !== null && index !== undefined ? items[index] : null;
  const hasSiblings = item && items.length > 1;

  const goPrev = useCallback(() => {
    if (!hasSiblings) return;
    onNavigate((index - 1 + items.length) % items.length);
  }, [hasSiblings, index, items.length, onNavigate]);

  const goNext = useCallback(() => {
    if (!hasSiblings) return;
    onNavigate((index + 1) % items.length);
  }, [hasSiblings, index, items.length, onNavigate]);

  useEffect(() => {
    if (!item) return;
    const handleKey = (event) => {
      if (event.key === 'Escape') onClose();
      if (event.key === 'ArrowLeft') goPrev();
      if (event.key === 'ArrowRight') goNext();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [item, onClose, goPrev, goNext]);

  if (!item) return null;

  const handleExpand = (event) => {
    const stage = event.currentTarget.closest('.modal__content').querySelector('.modal__stage');
    if (!stage) return;
    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      stage.requestFullscreen?.();
    }
  };

  const prevItem = hasSiblings ? items[(index - 1 + items.length) % items.length] : null;
  const nextItem = hasSiblings ? items[(index + 1) % items.length] : null;

  return createPortal(
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__icon-btn modal__expand" onClick={handleExpand} type="button" aria-label="Toggle fullscreen">
          <Maximize2 size={20} />
        </button>
        <button className="modal__icon-btn modal__close" onClick={onClose} type="button" aria-label="Close modal">
          <X size={20} />
        </button>

        {hasSiblings ? (
          <button type="button" className="modal__control modal__control--prev" onClick={goPrev} aria-label="Previous artwork">
            <ChevronLeft size={20} />
          </button>
        ) : null}

        <div className="modal__viewer">
          <div className="modal__stage">
            <SmartImage src={item.image} alt={item.title} orientation={item.orientation} />
          </div>
        </div>

        {hasSiblings ? (
          <button type="button" className="modal__control modal__control--next" onClick={goNext} aria-label="Next artwork">
            <ChevronRight size={20} />
          </button>
        ) : null}

        <h3 className="modal__title">{item.title}</h3>

        {hasSiblings ? (
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
