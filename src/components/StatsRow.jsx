import { useEffect, useRef, useState } from 'react';

// Splits a written stat like '50+' into the number to count up to and whatever
// wraps it, so a suffix ('+', '%') or prefix survives the animation untouched.
const NUMBER_PATTERN = /^(\D*)([\d.,]+)(.*)$/;

function parseNumber(value) {
  const match = NUMBER_PATTERN.exec(String(value));
  if (!match) return null;
  const digits = match[2].replace(/,/g, '');
  const target = Number(digits);
  if (!Number.isFinite(target)) return null;
  return {
    prefix: match[1],
    target,
    decimals: digits.includes('.') ? digits.split('.')[1].length : 0,
    suffix: match[3]
  };
}

const DURATION = 1600;
const easeOut = (progress) => 1 - (1 - progress) ** 3;

// Counts from zero to the written value the first time the stat scrolls into
// view — so it runs on arrival if the row is already on screen, and waits if
// it isn't. Anything that doesn't start with a number is rendered as-is, and
// reduced-motion visitors get the final figure without the count.
function StatNumber({ value }) {
  const parsed = parseNumber(value);
  const ref = useRef(null);
  const [display, setDisplay] = useState(() => (parsed ? `${parsed.prefix}0${parsed.suffix}` : value));

  useEffect(() => {
    const target = parseNumber(value);
    const node = ref.current;
    if (!target || !node) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setDisplay(value);
      return undefined;
    }

    let frame = 0;
    let startedAt = 0;

    const step = (now) => {
      if (!startedAt) startedAt = now;
      const progress = Math.min((now - startedAt) / DURATION, 1);
      const current = target.target * easeOut(progress);
      setDisplay(`${target.prefix}${current.toFixed(target.decimals)}${target.suffix}`);
      if (progress < 1) frame = requestAnimationFrame(step);
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          observer.unobserve(entry.target);
          frame = requestAnimationFrame(step);
        });
      },
      { threshold: 0.4 }
    );
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [value]);

  return <p className="stats-row__number" ref={ref}>{display}</p>;
}

function StatsRow({ items }) {
  return (
    <ul className="stats-row">
      {items.map((item) => (
        <li key={item.label} className="stats-row__item">
          <StatNumber value={item.number} />
          <p className="stats-row__label">{item.label}</p>
        </li>
      ))}
    </ul>
  );
}

export default StatsRow;
