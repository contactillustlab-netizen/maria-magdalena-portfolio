import { ArrowUpRight } from 'lucide-react';

function GalleryItem({ item, onSelect }) {
  return (
    <article className="gallery-item">
      <button className="gallery-item__button" onClick={() => onSelect(item)} type="button" aria-label={`View ${item.title}`}>
        <img src={item.image} alt={item.title} loading="lazy" />
        <span className="gallery-item__overlay">
          <span className="gallery-item__label">View project</span>
          <ArrowUpRight size={16} />
        </span>
      </button>
      <div className="gallery-item__meta">
        <h3>{item.title}</h3>
        <p>{item.category}</p>
        {item.year ? <p>{item.year}</p> : null}
      </div>
    </article>
  );
}

export default GalleryItem;
