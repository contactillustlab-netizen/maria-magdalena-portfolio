import { useEffect, useRef } from 'react';

// Full sequence: outline draws in, then crossfades into the solid mark, holds
// briefly, then the whole overlay fades out. All timing lives in CSS
// (see .intro-loader rules) — this timeout just unmounts the component once
// the fade-out finishes so it stops sitting in the DOM.
const FULL_MOTION_DURATION_MS = 2050;
const REDUCED_MOTION_DURATION_MS = 850;

function IntroLoader({ onFinished }) {
  const firedRef = useRef(false);

  useEffect(() => {
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const duration = reduceMotion ? REDUCED_MOTION_DURATION_MS : FULL_MOTION_DURATION_MS;
    const timeout = window.setTimeout(() => {
      if (firedRef.current) return;
      firedRef.current = true;
      onFinished();
    }, duration);
    return () => window.clearTimeout(timeout);
  }, [onFinished]);

  return (
    <div className="intro-loader" role="presentation" aria-hidden="true">
      <div className="intro-loader__marks">
        {/* Same viewBox/coordinates as the solid mark below (this outline was
            redrawn to match it), so the crossfade lines up with no shift. */}
        <svg
          className="intro-loader__mark intro-loader__mark--outline"
          viewBox="0 0 284 284"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path className="intro-loader__stroke" pathLength="1" style={{ animationDelay: '0ms' }} d="M280.659 225.624H243.904L207.743 160.397L225.569 129.733L280.659 225.624Z" />
          <path className="intro-loader__tip" style={{ animationDelay: '500ms' }} d="M222.28 91.153C222.28 91.153 239.93 55.318 271.861 60.601V58H241.268L222.28 91.153Z" />
          <path className="intro-loader__stroke" pathLength="1" style={{ animationDelay: '100ms' }} d="M240.461 58.5L144.69 225.135L102.676 154.808L121.227 123.591L157.997 187.45L158.432 188.205L158.865 187.449L232.688 58.5H240.461Z" />
          <path className="intro-loader__tip" style={{ animationDelay: '550ms' }} d="M51.522 192.972C51.522 192.972 33.872 228.807 1.94099 223.524V226.125H32.534L51.522 192.972Z" />
          <path className="intro-loader__stroke" pathLength="1" style={{ animationDelay: '200ms' }} d="M171.126 129.315L152.575 160.533L115.805 96.6748L115.371 95.9199L114.938 96.6758L41.1157 225.624H33.3423L129.113 58.9883L171.126 129.315Z" />
        </svg>

        <svg
          className="intro-loader__mark intro-loader__mark--fill"
          viewBox="0 0 283.465 283.465"
          xmlns="http://www.w3.org/2000/svg"
        >
          <polygon points="225.573,128.405 207.169,160.061 243.61,225.794 281.523,225.794" />
          <path d="M222.28,90.823c0,0,17.65-35.835,49.581-30.552V57.67h-30.593L222.28,90.823z" />
          <polygon points="158.431,186.871 232.398,57.67 241.325,57.67 144.698,225.794 102.094,154.479 121.234,122.271" />
          <path d="M51.522,192.642c0,0-17.65,35.835-49.581,30.552v2.601h30.593L51.522,192.642z" />
          <polygon points="115.372,96.594 41.405,225.794 32.478,225.794 129.105,57.67 171.709,128.986 152.568,161.194" />
        </svg>
      </div>
    </div>
  );
}

export default IntroLoader;
