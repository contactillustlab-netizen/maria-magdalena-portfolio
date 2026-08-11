import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ModeSwitchButton from './ModeSwitchButton';

function Navbar({ mode = 'art' }) {
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
  const sectionLinks = mode === 'art'
    ? [
        { to: '/art', label: 'Art' },
        { to: '/art/sketches', label: 'Sketches' },
        { to: '/art/concept', label: 'Concept' },
        { to: '/art/covers', label: 'Covers' }
      ]
    : [
        { to: '/design', label: 'Design' },
        { to: '/design/branding', label: 'Branding' },
        { to: '/design/ui-design', label: 'UI Design' },
        { to: '/design/marketing-design', label: 'Marketing Design' }
      ];
  const links = [
    ...sectionLinks,
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];
  const switchTo = mode === 'art' ? '/design' : '/art';
  const switchLabel = mode === 'art' ? 'Switch to Design' : 'Switch to Art';

  return (
    <header className={`site-header${hidden && !open ? ' site-header--hidden' : ''}`}>
      <div className="site-header__inner">
        <div className="nav-pill">
          <ModeSwitchButton to={switchTo} label={switchLabel} />

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
        </div>

        <button className="mobile-nav-toggle" type="button" onClick={() => setOpen((prev) => !prev)} aria-expanded={open} aria-label="Toggle navigation">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open ? createPortal(
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
        </div>,
        document.body
      ) : null}
    </header>
  );
}

export default Navbar;
