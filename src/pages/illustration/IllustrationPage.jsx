import HeroSection from '../../components/HeroSection';
import MasonryGallery from '../../components/MasonryGallery';
import SectionHeader from '../../components/SectionHeader';
import { illustrationProjects } from '../../data/illustrationProjects';

function IllustrationPage() {
  return (
    <>
      <HeroSection
        title="VIZIREANU MARIA-MAGDALENA"
        subtitle="ILLUSTRATOR / GRAPHIC DESIGNER / CONCEPT ARTIST"
        image="/images/gallery/illustration/hero.webp"
        variant="illustration"
      />

      <section className="section section--gallery">
        <SectionHeader
          eyebrow="Selected Work"
          title="Editorial and cinematic illustrations"
          description="A curated collection of monochrome studies, concept pieces and visual narratives."
        />
        <MasonryGallery items={illustrationProjects} />
      </section>
    </>
  );
}

export default IllustrationPage;
