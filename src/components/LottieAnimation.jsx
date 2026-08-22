import { useEffect, useRef } from 'react';

// Plays a Lottie JSON as a looping visual where a cover image would normally
// sit. Both the player and the animation file are heavy, so nothing is
// fetched until the element scrolls into view, and playback pauses again once
// it leaves. Visitors who prefer reduced motion get the last frame as a still.
function LottieAnimation({ src, label, className = '' }) {
  const hostRef = useRef(null);

  useEffect(() => {
    const host = hostRef.current;
    if (!host) return undefined;

    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    let animation = null;
    let cancelled = false;

    const load = async () => {
      const [{ default: lottie }, data] = await Promise.all([
        import('lottie-web/build/player/lottie_light'),
        fetch(src).then((response) => response.json())
      ]);
      if (cancelled) return;

      animation = lottie.loadAnimation({
        container: host,
        renderer: 'svg',
        loop: !still,
        autoplay: !still,
        animationData: data
      });

      if (still) {
        animation.addEventListener('DOMLoaded', () => animation.goToAndStop(animation.totalFrames - 1, true));
      }
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!animation) {
            if (entry.isIntersecting) load();
            return;
          }
          if (still) return;
          if (entry.isIntersecting) animation.play();
          else animation.pause();
        });
      },
      { threshold: 0.1 }
    );
    observer.observe(host);

    return () => {
      cancelled = true;
      observer.disconnect();
      animation?.destroy();
    };
  }, [src]);

  return <div ref={hostRef} className={`lottie-animation ${className}`.trim()} role="img" aria-label={label} />;
}

export default LottieAnimation;
