import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import SmartImage from '../../components/SmartImage';
import { coversProjects } from '../../data/coversProjects';

function CoversPage() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    document.querySelectorAll('.branding-grid__item').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <HeroSection
        eyebrow="Editorial"
        title="Covers"
        subtitle="Cinematic single-image compositions built for book covers, tributes and personal poster work"
        image="/pictures/animal-world-cover-vol1.webp"
        variant="illustration"
      />

      <section className="section section--covers">
        <div className="branding-grid">
          {coversProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/art/covers/${project.slug}`}
              className={`branding-grid__item ${index % 2 === 0 ? 'branding-grid__item--from-left' : 'branding-grid__item--from-right'}`}
            >
              <div className="branding-grid__image" style={{ aspectRatio: project.aspectRatio }}>
                <SmartImage src={project.image} alt={project.title} loading="lazy" />
                {project.year ? <span className="branding-grid__year">{project.year}</span> : null}
              </div>
              <div className="branding-grid__caption">
                <h3 className="branding-grid__title">{project.title}</h3>
                <p className="branding-grid__tag">{project.tag}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}

export default CoversPage;
