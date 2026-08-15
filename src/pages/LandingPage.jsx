import { useState } from 'react';
import { Link } from 'react-router-dom';
import IntroLoader from '../components/IntroLoader';

const INTRO_SESSION_KEY = 'introLoaderShown';

function LandingPage() {
  const [showIntro] = useState(() => {
    if (typeof window === 'undefined' || typeof window.sessionStorage === 'undefined') return false;
    return window.sessionStorage.getItem(INTRO_SESSION_KEY) !== '1';
  });
  const [revealed, setRevealed] = useState(() => !showIntro);
  const [introMounted, setIntroMounted] = useState(showIntro);

  const handleIntroComplete = () => {
    window.sessionStorage.setItem(INTRO_SESSION_KEY, '1');
    setRevealed(true);
  };

  return (
    <div className="landing-shell">
      {introMounted ? <IntroLoader onComplete={handleIntroComplete} /> : null}

      <div
        className={`landing-reveal${revealed ? ' is-revealed' : ''}`}
        onTransitionEnd={(event) => {
          if (introMounted && (event.propertyName === 'clip-path' || event.propertyName === 'opacity')) {
            setIntroMounted(false);
          }
        }}
      >
        <div className="landing">
          <Link to="/design" className="landing__panel landing__panel--design" aria-label="Enter Design">
            <div className="landing__panel-content">
              <h2>Design</h2>
              <p>Graphic design. Branding. UI design. Marketing design.</p>
              <span className="landing__panel-cta">Enter</span>
            </div>
          </Link>

          <Link to="/art" className="landing__panel landing__panel--art" aria-label="Enter Art">
            <div className="landing__panel-content">
              <h2>Art</h2>
              <p>Illustration. Sketches. Concept art</p>
              <span className="landing__panel-cta">Enter</span>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
