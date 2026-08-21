import HeroSection from '../../components/HeroSection';
import MasonryGallery from '../../components/MasonryGallery';
import { sketchesProjects } from '../../data/sketchesProjects';

function SketchesPage() {
  return (
    <>
      <HeroSection
        eyebrow="Studies"
        title="Sketches"
        subtitle="Early-stage sketches exploring pose, silhouette and light before a piece moves to color"
        image="/pictures/kallista-alchimistul-umbrelor.webp"
        variant="illustration"
      />

      <section className="section section--gallery">
        <MasonryGallery items={sketchesProjects} />
      </section>
    </>
  );
}

export default SketchesPage;
