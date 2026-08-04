import HeroSection from '../../components/HeroSection';
import SectionHeader from '../../components/SectionHeader';

function UiDesignPage() {
  return (
    <section className="section section--placeholder">
      <HeroSection
        eyebrow="Design"
        title="UI Design"
        subtitle="Digital products built with clarity and restraint"
        image="/images/placeholders/design-hero.jpg"
        variant="design"
      />
      <div className="placeholder-page">
        <SectionHeader title="Interface work" description="This section will be filled with product interfaces, design systems and prototypes." />
      </div>
    </section>
  );
}

export default UiDesignPage;
