import HeroSection from '../../components/HeroSection';
import MasonryGallery from '../../components/MasonryGallery';
import { illustrationProjects, illustrationTags } from '../../data/illustrationProjects';

function IllustrationPage() {
  return (
    <>
      <HeroSection
        title="Enter a world shaped by imagination."
        subtitle="Character-driven fantasy art and narrative scenes"
        image="/pictures/diablo-fbackground.webp"
        variant="illustration"
        titleVariant="sentence"
      />

      <section className="section section--gallery">
        <ul className="graphic-design__tags">
          {illustrationTags.map((tag, index) => (
            <li
              key={tag}
              className="graphic-design__tag"
              style={{ '--tag-hue': Math.round((index / illustrationTags.length) * 360) }}
            >
              {tag}
            </li>
          ))}
        </ul>

        <MasonryGallery items={illustrationProjects} />
      </section>
    </>
  );
}

export default IllustrationPage;
