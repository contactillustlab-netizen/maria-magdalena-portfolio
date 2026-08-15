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
        {/* Custom-cropped viewBox so this outline's own ink is centered the
            same way as the solid mark below — the two source files have very
            different native margins, so aligning on their raw viewBoxes would
            make the crossfade jump. */}
        <svg
          className="intro-loader__mark intro-loader__mark--outline"
          viewBox="0.2 2.04 41.56 29.97"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path pathLength="1" d="M38.2949 28.0488H34.1436L29.3203 19.3477L31.3203 15.9062L38.2949 28.0488Z" />
          <path pathLength="1" d="M34.1455 5.50195C33.9734 5.5933 33.8056 5.68823 33.6455 5.79102L33.8115 5.50195H34.1455Z" />
          <path pathLength="1" d="M32.6641 5.50195L19.9863 27.5615L14.6094 18.5596L16.7002 15.04L21.4844 23.3477L21.9189 24.1025L22.3516 23.3467L32.5674 5.50195H32.6641Z" />
          <path pathLength="1" d="M3.99609 28.0518H3.66211C3.83413 27.9605 4.00107 27.8644 4.16113 27.7617L3.99609 28.0518Z" />
          <path pathLength="1" d="M23.1963 14.9902L21.1035 18.5107L16.3213 10.2041L15.8867 9.44922L15.4541 10.2051L5.23828 28.0498H5.1416L17.8193 5.99121L23.1963 14.9902Z" />
          <mask id="intro-loader-tip-mask" fill="white">
            <path d="M14.4907 19.3416L9.21711 28.5494H8.30469L14.0242 18.5605L14.4907 19.3416Z" />
          </mask>
          <path
            className="intro-loader__mark--outline-tip"
            d="M14.4907 19.3416L15.3585 19.8386L15.6492 19.331L15.3492 18.8288L14.4907 19.3416ZM9.21711 28.5494V29.5494H9.79678L10.0849 29.0464L9.21711 28.5494ZM8.30469 28.5494L7.43688 28.0525L6.57977 29.5494H8.30469V28.5494ZM14.0242 18.5605L14.8827 18.0478L14.006 16.5799L13.1564 18.0636L14.0242 18.5605ZM14.4907 19.3416L13.623 18.8446L8.34936 28.0524L9.21711 28.5494L10.0849 29.0464L15.3585 19.8386L14.4907 19.3416ZM9.21711 28.5494V27.5494H8.30469V28.5494V29.5494H9.21711V28.5494ZM8.30469 28.5494L9.1725 29.0463L14.892 19.0574L14.0242 18.5605L13.1564 18.0636L7.43688 28.0525L8.30469 28.5494ZM14.0242 18.5605L13.1657 19.0733L13.6322 19.8544L14.4907 19.3416L15.3492 18.8288L14.8827 18.0478L14.0242 18.5605Z"
            mask="url(#intro-loader-tip-mask)"
          />
        </svg>

        <svg
          className="intro-loader__mark intro-loader__mark--fill"
          viewBox="-26.02 27.03 335.50 229.41"
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
