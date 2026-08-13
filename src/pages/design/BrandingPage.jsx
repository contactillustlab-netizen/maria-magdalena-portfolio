import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../../components/HeroSection';
import SmartImage from '../../components/SmartImage';
import { brandingProjects } from '../../data/brandingProjects';

function BrandingPage() {
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
        eyebrow="Design"
        title="Branding"
        subtitle="Identity systems and editorial direction"
        image="/pictures/branding-hero.webp"
        variant="design"
      />

      <section className="section section--branding">
        <div className="branding-grid">
          {brandingProjects.map((project, index) => (
            <Link
              key={project.id}
              to={`/design/branding/${project.slug}`}
              className={`branding-grid__item ${index % 2 === 0 ? 'branding-grid__item--from-left' : 'branding-grid__item--from-right'}`}
            >
              <div className="branding-grid__image" style={{ aspectRatio: project.aspectRatio }}>
                <SmartImage src={project.image} alt={project.title} loading="lazy" />
                <span className="branding-grid__year">{project.year}</span>
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

export default BrandingPage;
