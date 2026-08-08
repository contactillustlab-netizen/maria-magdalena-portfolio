import { useEffect, useRef, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ModeSwitchButton from './ModeSwitchButton';

function Navbar({ mode = 'illustration' }) {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    lastScrollY.current = window.scrollY;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const delta = currentScrollY - lastScrollY.current;
      if (currentScrollY < 88 || delta < 0) {
        setHidden(false);
      } else if (delta > 0) {
        setHidden(true);
      }
      lastScrollY.current = currentScrollY;
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (open) setHidden(false);
  }, [open]);
  const sectionLinks = mode === 'illustration'
    ? [
        { to: '/illustration', label: 'Illustration' },
        { to: '/illustration/sketches', label: 'Sketches' },
        { to: '/illustration/concept', label: 'Concept' },
        { to: '/illustration/covers', label: 'Covers' }
      ]
    : [
        { to: '/design', label: 'Graphic Design' },
        { to: '/design/branding', label: 'Branding' },
        { to: '/design/ui-design', label: 'UI Design' },
        { to: '/design/marketing-design', label: 'Marketing Design' }
      ];
  const links = [
    ...sectionLinks,
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <header className={`site-header${hidden && !open ? ' site-header--hidden' : ''}`}>
      <div className="site-header__inner">
        <NavLink to={mode === 'illustration' ? '/illustration' : '/design'} className="site-logo" aria-label="Go to homepage">
          {mode === 'illustration' ? <img src="/images/logos/mm-mark-white.svg" alt="MM logo" /> : <img src="/images/logos/illustlab-mark-white.svg" alt="Illustlab logo" />}
        </NavLink>

        <nav className="site-nav" aria-label="Primary navigation">
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end className={({ isActive }) => isActive ? 'active' : ''}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        <ModeSwitchButton to={mode === 'illustration' ? '/design' : '/illustration'} label={mode === 'illustration' ? 'Switch to Design' : 'Switch to Art'} />

        <button className="mobile-nav-toggle" type="button" onClick={() => setOpen((prev) => !prev)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? (
        <div className="mobile-nav-panel">
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink to={link.to} end onClick={() => setOpen(false)} className={({ isActive }) => isActive ? 'active' : ''}>
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="mobile-nav-panel__switch" onClick={() => setOpen(false)}>
            <ModeSwitchButton to={mode === 'illustration' ? '/design' : '/illustration'} label={mode === 'illustration' ? 'Switch to Design' : 'Switch to Art'} />
          </div>
        </div>
      ) : null}
    </header>
  );
}

export default Navbar;
