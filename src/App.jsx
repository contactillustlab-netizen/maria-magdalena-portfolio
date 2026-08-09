import { Route, Routes, useLocation } from 'react-router-dom';
import Layout from './layouts/Layout';
import LandingPage from './pages/LandingPage';
import IllustrationPage from './pages/illustration/IllustrationPage';
import SketchesPage from './pages/illustration/SketchesPage';
import ConceptPage from './pages/illustration/ConceptPage';
import CoversPage from './pages/illustration/CoversPage';
import GraphicDesignPage from './pages/design/GraphicDesignPage';
import ProjectCaseStudyPage from './pages/design/ProjectCaseStudyPage';
import BrandingPage from './pages/design/BrandingPage';
import UiDesignPage from './pages/design/UiDesignPage';
import MarketingDesignPage from './pages/design/MarketingDesignPage';
import { graphicDesignProjects } from './data/graphicDesignProjects';
import { brandingProjects } from './data/brandingProjects';
import { uiDesignProjects } from './data/uiDesignProjects';
import { marketingDesignProjects } from './data/marketingDesignProjects';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';
import PageTransition from './components/PageTransition';
import CursorGlow from './components/CursorGlow';

function App() {
  const location = useLocation();

  return (
    <Layout>
      <CursorGlow />
      <PageTransition key={location.pathname}>
        <Routes location={location}>
          <Route path="/" element={<LandingPage />} />
          <Route path="/illustration" element={<IllustrationPage />} />
          <Route path="/illustration/sketches" element={<SketchesPage />} />
          <Route path="/illustration/concept" element={<ConceptPage />} />
          <Route path="/illustration/covers" element={<CoversPage />} />
          <Route path="/design" element={<GraphicDesignPage />} />
          <Route path="/design/graphic-design/:slug" element={<ProjectCaseStudyPage projects={graphicDesignProjects} listPath="/design" sectionLabel="Graphic Design" />} />
          <Route path="/design/branding" element={<BrandingPage />} />
          <Route path="/design/branding/:slug" element={<ProjectCaseStudyPage projects={brandingProjects} listPath="/design/branding" sectionLabel="Branding" />} />
          <Route path="/design/ui-design" element={<UiDesignPage />} />
          <Route path="/design/ui-design/:slug" element={<ProjectCaseStudyPage projects={uiDesignProjects} listPath="/design/ui-design" sectionLabel="UI Design" />} />
          <Route path="/design/marketing-design" element={<MarketingDesignPage />} />
          <Route path="/design/marketing-design/:slug" element={<ProjectCaseStudyPage projects={marketingDesignProjects} listPath="/design/marketing-design" sectionLabel="Marketing Design" />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </PageTransition>
    </Layout>
  );
}

export default App;
