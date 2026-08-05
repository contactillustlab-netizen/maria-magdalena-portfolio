import HeroSection from '../../components/HeroSection';
import MasonryGallery from '../../components/MasonryGallery';
import SectionHeader from '../../components/SectionHeader';
import { sketchesProjects } from '../../data/sketchesProjects';

function SketchesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Illustration"
        title="Sketches"
        subtitle="A collection of studies in atmosphere and gesture"
        image="/images/gallery/sketches/raven-cloak-study.webp"
        variant="illustration"
      />

      <section className="section section--gallery">
        <SectionHeader
          eyebrow="Studies"
          title="Value studies and gesture work"
          description="Early-stage sketches exploring pose, silhouette and light before a piece moves to color."
        />
        <MasonryGallery items={sketchesProjects} />
      </section>
    </>
  );
}

export default SketchesPage;
