import { ArrowUpRight } from 'lucide-react';
import SmartImage from './SmartImage';

function GalleryItem({ item, onSelect }) {
  if (item.video) {
    return (
      <article className="gallery-item">
        <div className="gallery-item__video">
          <iframe
            src={item.video}
            title={item.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </article>
    );
  }

  return (
    <article className="gallery-item">
      <button className="gallery-item__button" onClick={() => onSelect(item)} type="button" aria-label={`View ${item.title}`}>
        <SmartImage src={item.image} alt={item.title} orientation={item.orientation} loading="lazy" />
        <span className="gallery-item__overlay">
          <span className="gallery-item__overlay-text">
            <span className="gallery-item__title">{item.title}</span>
            <span className="gallery-item__category">
              {item.category}
              {item.year ? ` · ${item.year}` : ''}
            </span>
          </span>
          <span className="gallery-item__label">
            View project <ArrowUpRight size={16} />
          </span>
        </span>
      </button>
    </article>
  );
}

export default GalleryItem;
