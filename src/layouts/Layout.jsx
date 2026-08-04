import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

function Layout({ children }) {
  const location = useLocation();
  const isDesign = location.pathname.startsWith('/design');

  return (
    <div className="app-shell">
      <Navbar mode={isDesign ? 'design' : 'illustration'} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
