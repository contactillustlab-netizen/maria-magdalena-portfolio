import HeroSection from '../../components/HeroSection';
import ScrollGallery from '../../components/ScrollGallery';
import VisualEcosystem from '../../components/VisualEcosystem';
import BrandProcess from '../../components/BrandProcess';
import StatsRow from '../../components/StatsRow';
import { graphicDesignProjects, graphicDesignTags } from '../../data/graphicDesignProjects';

const stats = [
  { number: '10+', label: 'Years in design field' },
  { number: '50+', label: 'Projects completed' },
  { number: '30+', label: 'Happy clients' }
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

        <VisualEcosystem />
      </section>
    </>
  );
}

export default GraphicDesignPage;
