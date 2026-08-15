import { useState } from 'react';
import { Link } from 'react-router-dom';
import IntroLoader from '../components/IntroLoader';

const INTRO_SESSION_KEY = 'introLoaderShown';

function LandingPage() {
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined' || typeof window.sessionStorage === 'undefined') return false;
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== '1';
  });

  const handleIntroFinished = () => {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1');
    setShowIntro(false);
  };

  return (
    <div className="landing">
      {showIntro ? <IntroLoader onFinished={handleIntroFinished} /> : null}

      <div className="landing__background" />

      <div className="landing__actions">
        <Link to="/design" className="landing__cta">Design</Link>
        <Link to="/art" className="landing__cta">Art</Link>
      </div>
    </div>
  );
}

export default LandingPage;
