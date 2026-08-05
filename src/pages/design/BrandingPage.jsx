import HeroSection from '../../components/HeroSection';
import SectionHeader from '../../components/SectionHeader';

function BrandingPage() {
  return (
    <section className="section section--placeholder">
      <HeroSection
        eyebrow="Design"
        title="Branding"
        subtitle="Identity systems and editorial direction"
        image="/images/gallery/design/hero.webp"
        variant="design"
      />
      <div className="placeholder-page">
        <SectionHeader title="Branding projects" description="This page will host brand identities, visual systems and campaign direction." />
      </div>
    </section>
  );
}

export default BrandingPage;
