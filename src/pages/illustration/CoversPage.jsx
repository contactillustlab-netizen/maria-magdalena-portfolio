import HeroSection from '../../components/HeroSection';
import MasonryGallery from '../../components/MasonryGallery';
import SectionHeader from '../../components/SectionHeader';
import { coversProjects } from '../../data/coversProjects';

function CoversPage() {
  return (
    <>
      <HeroSection
        eyebrow="Illustration"
        title="Covers"
        subtitle="Editorial and publication design work"
        image="/images/gallery/covers/pans-labyrinth.webp"
        variant="illustration"
      />

      <section className="section section--gallery">
        <SectionHeader
          eyebrow="Editorial"
          title="Cover and poster illustration"
          description="Cinematic single-image compositions built for book covers, tributes and personal poster work."
        />
        <MasonryGallery items={coversProjects} />
      </section>
    </>
  );
}

export default CoversPage;
