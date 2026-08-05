import HeroSection from '../../components/HeroSection';
import SectionHeader from '../../components/SectionHeader';

function MarketingDesignPage() {
  return (
    <section className="section section--placeholder">
      <HeroSection
        eyebrow="Design"
        title="Marketing Design"
        subtitle="Promotional storytelling and polished campaigns"
        image="/images/gallery/design/hero.webp"
        variant="design"
      />
      <div className="placeholder-page">
        <SectionHeader title="Marketing material" description="A place for decks, campaigns and promotional visuals that are ready to evolve." />
      </div>
    </section>
  );
}

export default MarketingDesignPage;
