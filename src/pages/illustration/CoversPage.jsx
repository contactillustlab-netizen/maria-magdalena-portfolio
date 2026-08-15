import ConceptGallery from '../../components/ConceptGallery';
import SectionHeader from '../../components/SectionHeader';
import { coversProjects } from '../../data/coversProjects';

function CoversPage() {
  return (
    <section className="section section--gallery">
      <SectionHeader
        eyebrow="Editorial"
        title="Cover and poster illustration"
        description="Cinematic single-image compositions built for book covers, tributes and personal poster work."
      />
      <ConceptGallery items={coversProjects} />
    </section>
  );
}

export default CoversPage;
