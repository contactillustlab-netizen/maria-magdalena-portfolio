import ConceptGallery from '../../components/ConceptGallery';
import SectionHeader from '../../components/SectionHeader';
import { conceptProjects } from '../../data/conceptProjects';

function ConceptPage() {
  return (
    <section className="section section--gallery">
      <SectionHeader
        eyebrow="Development"
        title="Character and environment concepts"
        description="Design sheets pairing full-color renders with their value studies, built for narrative worlds."
      />
      <ConceptGallery items={conceptProjects} />
    </section>
  );
}

export default ConceptPage;
