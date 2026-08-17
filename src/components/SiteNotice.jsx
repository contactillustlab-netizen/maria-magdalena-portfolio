import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { X } from 'lucide-react';
import { applyStoredConsent, updateConsent } from '../lib/analytics';
import { useMountTransition } from '../lib/useMountTransition';

const STORAGE_KEY = 'site-notice-choice';

function SiteNotice() {
  const [visible, setVisible] = useState(false);
  const { mounted, visible: shown } = useMountTransition(visible);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) setVisible(true);
    else applyStoredConsent(stored);

    const reopen = () => setVisible(true);
    window.addEventListener('open-cookie-preferences', reopen);
    return () => window.removeEventListener('open-cookie-preferences', reopen);
  }, []);

  const choose = (value) => {
    localStorage.setItem(STORAGE_KEY, value);
    updateConsent(value === 'accepted');
    setVisible(false);
  };

  if (!mounted) return null;

  return (
    <div className={`site-notice${shown ? ' is-open' : ''}`} role="dialog" aria-label="Site preferences">
      <div className="site-notice__header">
        <h2 className="site-notice__title">Cookie settings</h2>
        <button type="button" className="site-notice__close" aria-label="Close" onClick={() => setVisible(false)}>
          <X size={18} />
        </button>
      </div>
      <p className="site-notice__text">
        This site doesn&apos;t set any cookies by default. If you accept, it turns on Google Analytics to help us understand how the site is used.
      </p>
      <div className="site-notice__actions">
        <button type="button" className="site-notice__button site-notice__button--accept" onClick={() => choose('accepted')}>
          Accept
        </button>
        <button type="button" className="site-notice__button site-notice__button--decline" onClick={() => choose('declined')}>
          Decline
        </button>
      </div>
      <div className="site-notice__links">
        <Link to="/cookies">Cookie Policy</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
}

export default SiteNotice;
