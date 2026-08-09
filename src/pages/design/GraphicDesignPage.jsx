import HeroSection from '../../components/HeroSection';
import ProjectSlider from '../../components/ProjectSlider';
import SkillsTimeline from '../../components/SkillsTimeline';
import { graphicDesignProjects, graphicDesignTags } from '../../data/graphicDesignProjects';

const skills = [
  {
    label: 'Branding',
    title: 'Brand identity systems',
    text: 'I build visual identities — logo systems, typography, color and voice — that stay consistent and confident across every touchpoint.',
    cta: '/design/branding'
  },
  {
    label: 'Marketing Design',
    title: 'Campaigns that convert',
    text: 'I design promotional materials, social campaigns and pitch decks that feel cinematic while staying tightly on-brand.',
    cta: '/design/marketing-design'
  },
  {
    label: 'UI Design',
    title: 'Interfaces with clarity',
    text: 'I design digital products and interfaces focused on usability, hierarchy and quiet, confident restraint.',
    cta: '/design/ui-design'
  }
];

function GraphicDesignPage() {
  return (
    <>
      <HeroSection
        eyebrow="Design"
        title="Design"
        subtitle="Identity systems and editorial direction"
        image="/pictures/design-hero.webp"
        variant="design"
      />

      <section className="section section--graphic-design">
        <ul className="graphic-design__tags">
          {graphicDesignTags.map((tag) => (
            <li key={tag} className="graphic-design__tag">{tag}</li>
          ))}
        </ul>

        <ProjectSlider items={graphicDesignProjects} basePath="/design/graphic-design" />

        <SkillsTimeline items={skills} />
      </section>
    </>
  );
}

export default GraphicDesignPage;
