import { Navigate, Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import IllustrationPage from './pages/illustration/IllustrationPage';
import SketchesPage from './pages/illustration/SketchesPage';
import ConceptPage from './pages/illustration/ConceptPage';
import CoversPage from './pages/illustration/CoversPage';
import GraphicDesignPage from './pages/design/GraphicDesignPage';
import CaseStudyPage from './pages/design/CaseStudyPage';
import BrandingPage from './pages/design/BrandingPage';
import UiDesignPage from './pages/design/UiDesignPage';
import MarketingDesignPage from './pages/design/MarketingDesignPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PageTransition from './components/PageTransition';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/illustration" replace />} />
          <Route path="/illustration" element={<IllustrationPage />} />
          <Route path="/illustration/sketches" element={<SketchesPage />} />
          <Route path="/illustration/concept" element={<ConceptPage />} />
          <Route path="/illustration/covers" element={<CoversPage />} />
          <Route path="/design" element={<GraphicDesignPage />} />
          <Route path="/design/graphic-design/:slug" element={<CaseStudyPage />} />
          <Route path="/design/branding" element={<BrandingPage />} />
          <Route path="/design/ui-design" element={<UiDesignPage />} />
          <Route path="/design/marketing-design" element={<MarketingDesignPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
    </Layout>
  );
}

export default App;
