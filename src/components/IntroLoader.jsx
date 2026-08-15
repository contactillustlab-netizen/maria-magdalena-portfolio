import { useEffect, useRef } from 'react';

// Timings mirror the CSS keyframes below (intro-loader-converge-a/b run 0-1200ms,
// the lock accent fires at 1050ms). onComplete fires at the moment the site's own
// clip-path reveal should start, so the two stay in lockstep with what's on screen.
const REVEAL_START_MS = 1450;
const REDUCED_MOTION_HOLD_MS = 500;

function IntroLoader({ onComplete }) {
  const firedRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const delay = reduceMotion ? REDUCED_MOTION_HOLD_MS : REVEAL_START_MS;
    const timeout = window.setTimeout(() => {
      if (firedRef.current) return;
      firedRef.current = true;
      onComplete();
    }, delay);
    return () => window.clearTimeout(timeout);
  }, [onComplete]);

  return (
    <div className="intro-loader" role="presentation" aria-hidden="true">
      <svg
        className="intro-loader__mark"
        viewBox="0 0 283.465 283.465"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="intro-loader__group intro-loader__group--a">
          <polygon points="225.573,128.405 207.169,160.061 243.61,225.794 281.523,225.794" />
          <path d="M222.28,90.823c0,0,17.65-35.835,49.581-30.552V57.67h-30.593L222.28,90.823z" />
          <polygon points="158.431,186.871 232.398,57.67 241.325,57.67 144.698,225.794 102.094,154.479 121.234,122.271" />
        </g>
        <g className="intro-loader__group intro-loader__group--b">
          <path d="M51.522,192.642c0,0-17.65,35.835-49.581,30.552v2.601h30.593L51.522,192.642z" />
          <polygon points="115.372,96.594 41.405,225.794 32.478,225.794 129.105,57.67 171.709,128.986 152.568,161.194" />
        </g>
      </svg>
      <span className="intro-loader__accent" />
    </div>
  );
}

export default IntroLoader;
