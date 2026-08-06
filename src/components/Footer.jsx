import { ArrowUpRight, Facebook, Instagram, Linkedin, Send, PenTool } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Footer() {
  const socialLinks = [
    { label: 'LinkedIn', href: 'https://www.linkedin.com', icon: <Linkedin size={18} /> },
    { label: 'Facebook', href: 'https://www.facebook.com', icon: <Facebook size={18} /> },
    { label: 'Instagram', href: 'https://www.instagram.com', icon: <Instagram size={18} /> },
    { label: 'ArtStation', href: 'https://www.artstation.com', icon: <Send size={18} /> },
    { label: 'Behance', href: 'https://www.behance.net', icon: <PenTool size={18} /> }
  ];

  return (
    <footer className="site-footer">
      <div className="site-footer__top">
        <div>
          <h2>Let’s Work<br />Together</h2>
        </div>
        <nav className="site-footer__links" aria-label="Secondary navigation">
          <NavLink to="/about" className={({ isActive }) => isActive ? 'active' : ''}>About</NavLink>
          <NavLink to="/contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
        </nav>
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
