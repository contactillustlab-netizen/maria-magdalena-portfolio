import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Menu, X } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ModeSwitchButton from './ModeSwitchButton';
import { useMountTransition } from '../lib/useMountTransition';

function Navbar({ mode = 'art' }) {
  const [open, setOpen] = useState(false);
  const { mounted: panelMounted, visible: panelVisible } = useMountTransition(open);
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
  const sectionLinksByMode = {
    art: [
      { to: '/art', label: 'Art' },
      { to: '/art/sketches', label: 'Sketches' },
      { to: '/art/concept', label: 'Concept' },
      { to: '/art/covers', label: 'Covers' }
    ],
    design: [
      { to: '/design', label: 'Design' },
      { to: '/design/branding', label: 'Branding' },
      { to: '/design/ui-design', label: 'UI Design' },
      { to: '/design/marketing-design', label: 'Marketing Design' }
    ]
  };
  const otherMode = mode === 'art' ? 'design' : 'art';
  const links = [
    ...sectionLinksByMode[mode],
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];
  // Same-index labels from the other mode, stacked invisibly behind each tab so its
  // rendered width is max(this label, the other mode's label) — the art and design
  // pills land on the same total width without hardcoding either one.
  const ghostLabels = [
    ...sectionLinksByMode[otherMode].map((link) => link.label),
    'About',
    'Contact'
  ];
  const switchTo = mode === 'art' ? '/design' : '/art';
  const switchLabel = mode === 'art' ? 'Switch to Design' : 'Switch to Art';
  const otherSwitchLabel = mode === 'art' ? 'Switch to Art' : 'Switch to Design';

  return (
    <header className={`site-header${hidden && !open ? ' site-header--hidden' : ''}`}>
      <div className="site-header__inner">
        <div className="nav-pill">
          <ModeSwitchButton to={switchTo} label={switchLabel} ghostLabel={otherSwitchLabel} />

          <nav className="site-nav" aria-label="Primary navigation">
            <ul>
              {links.map((link, index) => (
                <li key={link.to}>
                  <NavLink to={link.to} end className={({ isActive }) => isActive ? 'active' : ''}>
                    <span className="nav-tab-stack">
                      <span className="nav-tab-label">{link.label}</span>
                      <span className="nav-tab-label nav-tab-label--ghost" aria-hidden="true">{ghostLabels[index]}</span>
                    </span>
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

      {panelMounted ? createPortal(
        <div className={`mobile-nav-panel${panelVisible ? ' is-open' : ''}`}>
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
