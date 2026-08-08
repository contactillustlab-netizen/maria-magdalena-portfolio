import { useEffect, useState } from 'react';
import GalleryItem from './GalleryItem';
import ArtworkModal from './ArtworkModal';

function MasonryGallery({ items }) {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const overflow = selectedIndex !== null ? 'hidden' : '';
    document.documentElement.style.overflow = overflow;
    document.body.style.overflow = overflow;
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [selectedIndex]);

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

    const nodes = document.querySelectorAll('.gallery-item');
    nodes.forEach((node) => observer.observe(node));
    setVisibleItems(items);

    return () => observer.disconnect();
  }, [items]);

  return (
    <>
      <div className="masonry-gallery" role="list">
        {items.map((item, index) => (
          <div key={item.id} role="listitem">
            <GalleryItem item={item} onSelect={() => setSelectedIndex(index)} />
          </div>
        ))}
      </div>
      <ArtworkModal
        items={items}
        index={selectedIndex}
        onClose={() => setSelectedIndex(null)}
        onNavigate={setSelectedIndex}
      />
    </>
  );
}

export default MasonryGallery;
