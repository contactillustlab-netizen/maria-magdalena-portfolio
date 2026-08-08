import HeroSection from '../../components/HeroSection';
import MasonryGallery from '../../components/MasonryGallery';
import { illustrationProjects } from '../../data/illustrationProjects';

function IllustrationPage() {
  return (
    <>
      <HeroSection
        title="Illustration"
        subtitle="Character-driven fantasy art and narrative scenes"
        image="/pictures/diablo-fbackground.webp"
        variant="illustration"
      />

      <section className="section section--gallery">
        <MasonryGallery items={illustrationProjects} />
      </section>
    </>
  );
}

export default IllustrationPage;
