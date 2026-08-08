import { useState } from 'react';
import ImagePlaceholder from './ImagePlaceholder';

function SmartImage({ src, alt, orientation, ...imgProps }) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return <ImagePlaceholder alt={alt} className={orientation ? `image-placeholder--${orientation}` : ''} />;
  }

  return <img src={src} alt={alt} onError={() => setFailed(true)} {...imgProps} />;
}

export default SmartImage;
