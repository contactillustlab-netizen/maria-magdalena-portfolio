import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CtaBanner from '../components/CtaBanner';
import BackToTop from '../components/BackToTop';
import WhatsAppWidget from '../components/WhatsAppWidget';

function Layout({ children }) {
  const location = useLocation();
  const isLanding = location.pathname === '/';
  const isContact = location.pathname === '/contact';
  const [mode, setMode] = useState(() => (location.pathname.startsWith('/design') ? 'design' : 'art'));

  useEffect(() => {
    if (location.pathname.startsWith('/design')) setMode('design');
    else if (location.pathname.startsWith('/art')) setMode('art');
  }, [location.pathname]);

  useEffect(() => {
    document.body.dataset.theme = mode;
  }, [mode]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  if (isLanding) {
    return (
      <div className="app-shell app-shell--landing">
        {children}
        <WhatsAppWidget />
      </div>
    );
  }

  return (
    <div className="app-shell">
      <Navbar mode={mode} />
      <main>{children}</main>
      {isContact ? null : <CtaBanner />}
      <Footer />
      <BackToTop />
      <WhatsAppWidget />
    </div>
  );
}

export default Layout;
