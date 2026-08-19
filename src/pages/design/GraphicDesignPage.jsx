import HeroSection from '../../components/HeroSection';
import ScrollGallery from '../../components/ScrollGallery';
import SkillsTimeline from '../../components/SkillsTimeline';
import VisualEcosystem from '../../components/VisualEcosystem';
import BrandProcess from '../../components/BrandProcess';
import StatsRow from '../../components/StatsRow';
import { graphicDesignProjects, graphicDesignTags } from '../../data/graphicDesignProjects';

const stats = [
  { number: '10+', label: 'Years in design field' },
  { number: '50+', label: 'Projects completed' },
  { number: '30+', label: 'Happy clients' }
];

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
        title="Design that makes brands look better, work better and sell better."
        subtitle="I help businesses build clear visual identities, intuitive digital experiences and marketing materials that feel consistent across every touchpoint."
        image="/pictures/design-hero.webp"
        video="/videos/design-hero.webm"
        variant="design"
        titleVariant="sentence"
        scrollLabel="Scroll to see"
      />

      <section className="section section--graphic-design">
        <ul className="graphic-design__tags">
          {graphicDesignTags.map((tag, index) => (
            <li
              key={tag}
              className="graphic-design__tag"
              style={{ '--tag-hue': Math.round((index / graphicDesignTags.length) * 360) }}
            >
              {tag}
            </li>
          ))}
        </ul>

        <StatsRow items={stats} />

        <ScrollGallery
          eyebrow="Portfolio"
          title={<>Selected work<br />&amp; explorations</>}
          items={graphicDesignProjects}
          basePath="/design/graphic-design"
        />

        <BrandProcess />

        <SkillsTimeline items={skills} />

        <VisualEcosystem />
      </section>
    </>
  );
}

export default GraphicDesignPage;
