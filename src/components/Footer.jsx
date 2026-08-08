import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react';
import { NavLink } from 'react-router-dom';
import ArtStationIcon from './icons/ArtStationIcon';
import BehanceIcon from './icons/BehanceIcon';

function Footer() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/maria-magdalena-vizireanu/', icon: <Linkedin size={18} /> },
    { label: 'Facebook', href: 'https://www.facebook.com/vmmartist', icon: <Facebook size={18} /> },
    { label: 'Instagram', href: 'https://www.instagram.com/magdamariav/', icon: <Instagram size={18} /> },
    { label: 'ArtStation', href: 'https://vizireanumariamagdalena.artstation.com/', icon: <ArtStationIcon size={18} /> },
    { label: 'Behance', href: 'https://www.behance.net/mady21v', icon: <BehanceIcon size={18} /> }
  ];

  const artLinks = [
    { to: '/illustration', label: 'Illustration' },
    { to: '/illustration/sketches', label: 'Sketches' },
    { to: '/illustration/concept', label: 'Concept' },
    { to: '/illustration/covers', label: 'Covers' }
  ];

  const designLinks = [
    { to: '/design', label: 'Design' },
    { to: '/design/branding', label: 'Branding' },
    { to: '/design/ui-design', label: 'UI Design' },
    { to: '/design/marketing-design', label: 'Marketing Design' }
  ];

  const infoLinks = [
    { to: '/about', label: 'About' },
    { to: '/contact', label: 'Contact' }
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <h2>Let’s Work<br />Together</h2>
        </div>
        <div className="site-footer__nav-groups">
          <nav className="site-footer__nav-group" aria-label="Art navigation">
            <span className="site-footer__nav-title">Art</span>
            <div className="site-footer__links">
              {artLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end className={({ isActive }) => isActive ? 'active' : ''}>{link.label}</NavLink>
              ))}
            </div>
          </nav>
          <nav className="site-footer__nav-group" aria-label="Design navigation">
            <span className="site-footer__nav-title">Design</span>
            <div className="site-footer__links">
              {designLinks.map((link) => (
                <NavLink key={link.to} to={link.to} end className={({ isActive }) => isActive ? 'active' : ''}>{link.label}</NavLink>
              ))}
            </div>
          </nav>
          <nav className="site-footer__nav-group" aria-label="Secondary navigation">
            <span className="site-footer__nav-title">Info</span>
            <div className="site-footer__links">
              {infoLinks.map((link) => (
                <NavLink key={link.to} to={link.to} className={({ isActive }) => isActive ? 'active' : ''}>{link.label}</NavLink>
              ))}
            </div>
          </nav>
        </div>
        <div className="site-footer__contact">
          <a href="mailto:contact.illustlab@gmail.com">contact.illustlab@gmail.com</a>
          <p>România, Galați</p>
        </div>
      </div>
      <div className="site-footer__bottom">
        <div className="site-footer__socials">
          {socialLinks.map((link) => (
            <a key={link.label} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
              {link.icon}
              <ArrowUpRight size={14} />
            </a>
          ))}
        </div>
        <p>© 2026 All rights reserved by Vizireanu Maria-Magdalena.</p>
      </div>
    </footer>
  );
}

export default Footer;
