import { useEffect, useState } from 'react';
import SmartImage from './SmartImage';
import ArtworkModal from './ArtworkModal';

function ConceptGallery({ items }) {
  const [selection, setSelection] = useState(null);

  useEffect(() => {
    const overflow = selection ? 'hidden' : '';
    document.documentElement.style.overflow = overflow;
    document.body.style.overflow = overflow;
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [selection]);

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
      { threshold: 0.12 }
    );

    const nodes = document.querySelectorAll('.concept-project');
    nodes.forEach((node) => observer.observe(node));

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <div className="concept-gallery">
        {items.map((item, index) => {
          const details = (item.images || []).filter((src) => src !== item.image).slice(0, 4);

          return (
            <div key={item.id} className="concept-project">
              <div className={`concept-project__grid${details.length ? '' : ' concept-project__grid--solo'}`}>
                <div className="concept-project__cover-cell">
                  <button
                    type="button"
                    className="concept-project__cover gallery-item__button"
                    onClick={() => setSelection({ index, image: item.image })}
                    aria-label={`View ${item.title}`}
                  >
                    <SmartImage src={item.image} alt={item.title} orientation={item.orientation} loading="lazy" />
                    <span className="gallery-item__overlay">
                      <span className="gallery-item__overlay-text">
                        <span className="gallery-item__title">{item.title}</span>
                        <span className="gallery-item__category">{item.category}</span>
                      </span>
                    </span>
                  </button>
                </div>

                {details.length ? (
                  <div className="concept-project__details">
                    {Array.from({ length: 4 }, (_, i) => details[i] || null).map((src, i) =>
                      src ? (
                        <button
                          key={src}
                          type="button"
                          className="concept-project__detail gallery-item__button"
                          onClick={() => setSelection({ index, image: src })}
                          aria-label={`View detail ${i + 1} of ${item.title}`}
                        >
                          <SmartImage src={src} alt={`${item.title} detail ${i + 1}`} loading="lazy" />
                        </button>
                      ) : (
                        <span key={`empty-${i}`} className="concept-project__detail concept-project__detail--empty" aria-hidden="true" />
                      )
                    )}
                  </div>
                ) : null}
              </div>

              <p className="concept-project__description">{item.description}</p>

              {index < items.length - 1 ? <div className="concept-divider" /> : null}
            </div>
          );
        })}
      </div>
      <ArtworkModal
        items={items}
        index={selection?.index ?? null}
        startImage={selection?.image}
        onClose={() => setSelection(null)}
        onNavigate={(newIndex) => setSelection({ index: newIndex, image: items[newIndex].image })}
      />
    </>
  );
}

export default ConceptGallery;
