import { ArrowUpRight } from 'lucide-react';
import LottieAnimation from './LottieAnimation';
import SmartImage from './SmartImage';

function GalleryItem({ item, onSelect }) {
  if (item.animation) {
    return (
      <article className="gallery-item">
        <div className="gallery-item__animation">
          <LottieAnimation src={item.animation} label={item.title} />
        </div>
      </article>
    );
  }

  if (item.video) {
    // `video` is either a YouTube embed URL or a path to a file in /public —
    // the latter plays inline, muted and looping, like the hero videos do.
    const isVideoFile = /\.(mp4|webm|mov)$/i.test(item.video);

    return (
      <article className="gallery-item">
        <div className={`gallery-item__video${isVideoFile ? ' gallery-item__video--file' : ''}`}>
          {isVideoFile ? (
            <video
              src={item.video}
              aria-label={item.title}
              autoPlay
              loop
              muted
              playsInline
              preload="metadata"
            />
          ) : (
            <iframe
              src={item.video}
              title={item.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              loading="lazy"
            />
          )}
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
