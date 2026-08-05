import { designProjects } from '../../data/designProjects';
import HeroSection from '../../components/HeroSection';
import ProjectCard from '../../components/ProjectCard';
import SectionHeader from '../../components/SectionHeader';

function DesignPage() {
  return (
    <>
      <HeroSection
        eyebrow="Design"
        title="HELLO!"
        subtitle="At Illustlab, I turn ideas into bold, meaningful visuals — from brand identities and UI design to promotional materials, pitch decks, and everything in between."
        image="/images/gallery/design/hero.webp"
        variant="design"
      />

      <section className="section section--design-cards">
        <SectionHeader eyebrow="Selected disciplines" title="Design categories" description="A curated framework for future branding, interface and campaign projects." />
        <div className="project-grid">
          {designProjects.map((project) => (
            <ProjectCard key={project.id} {...project} link={`/design/${project.title.toLowerCase().replace(/\s+/g, '-')}`} />
          ))}
        </div>
      </section>
    </>
  );
}

export default DesignPage;
