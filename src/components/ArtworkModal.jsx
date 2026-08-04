import { X } from 'lucide-react';

function ArtworkModal({ item, onClose }) {
  if (!item) return null;

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label={item.title}>
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__content">
        <button className="modal__close" onClick={onClose} type="button" aria-label="Close modal">
          <X size={20} />
        </button>
        <img src={item.image} alt={item.title} />
        <div className="modal__body">
          <p className="modal__eyebrow">{item.category}</p>
          <h3>{item.title}</h3>
          {item.year ? <p className="modal__year">{item.year}</p> : null}
          <p>{item.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ArtworkModal;
