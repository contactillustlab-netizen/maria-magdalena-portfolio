import React from 'react';

function ImagePlaceholder({ alt = 'Placeholder artwork', className = '' }) {
  return (
    <div className={`image-placeholder ${className}`.trim()} role="img" aria-label={alt}>
      <span>Coming soon...</span>
    </div>
  );
}

export default ImagePlaceholder;
