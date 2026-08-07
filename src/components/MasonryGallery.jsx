import { useEffect, useState } from 'react';
import GalleryItem from './GalleryItem';
import ArtworkModal from './ArtworkModal';

function MasonryGallery({ items }) {
  const [selectedItem, setSelectedItem] = useState(null);
  const [visibleItems, setVisibleItems] = useState([]);

  useEffect(() => {
    const overflow = selectedItem ? 'hidden' : '';
    document.documentElement.style.overflow = overflow;
    document.body.style.overflow = overflow;
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [selectedItem]);

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
        {items.map((item) => (
          <div key={item.id} role="listitem">
            <GalleryItem item={item} onSelect={setSelectedItem} />
          </div>
        ))}
      </div>
      <ArtworkModal item={selectedItem} onClose={() => setSelectedItem(null)} />
    </>
  );
}

export default MasonryGallery;
