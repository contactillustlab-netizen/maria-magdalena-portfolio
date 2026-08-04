import { useEffect, useState } from 'react';

function PageTransition({ children, keyName }) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => setVisible(true), 20);
    return () => window.clearTimeout(timeout);
  }, [keyName]);

  return <div className={`page-transition ${visible ? 'is-visible' : ''}`}>{children}</div>;
}

export default PageTransition;
