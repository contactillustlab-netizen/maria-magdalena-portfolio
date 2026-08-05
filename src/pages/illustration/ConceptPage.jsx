import HeroSection from '../../components/HeroSection';
import MasonryGallery from '../../components/MasonryGallery';
import SectionHeader from '../../components/SectionHeader';
import { conceptProjects } from '../../data/conceptProjects';

function ConceptPage() {
  return (
    <>
      <HeroSection
        eyebrow="Illustration"
        title="Concept"
        subtitle="Mood, character and narrative direction"
        image="/images/gallery/concept/desert-camp.webp"
        variant="illustration"
      />

      <section className="section section--gallery">
        <SectionHeader
          eyebrow="Development"
          title="Character and environment concepts"
          description="Design sheets pairing full-color renders with their value studies, built for narrative worlds."
        />
        <MasonryGallery items={conceptProjects} />
      </section>
    </>
  );
}

export default ConceptPage;
