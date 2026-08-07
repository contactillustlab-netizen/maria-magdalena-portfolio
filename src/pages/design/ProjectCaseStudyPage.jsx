import { Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import SmartImage from '../../components/SmartImage';
import MasonryGallery from '../../components/MasonryGallery';

function ProjectCaseStudyPage({ projects, listPath, sectionLabel }) {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to={listPath} replace />;
  }

  const galleryItems = Array.from({ length: project.galleryCount }, (_, index) => ({
    id: index + 1,
    title: `${project.title} — Visual ${index + 1}`,
    category: project.tag,
    image: null
  }));

  return (
    <div className="branding-case-study">
      <Breadcrumbs items={[{ label: sectionLabel, to: listPath }, { label: project.title }]} />

      <section className="branding-case-study__banner">
        <div className="branding-case-study__heading">
          <h1 className="branding-case-study__title">{project.title}</h1>
        </div>
      </section>

      <div className="branding-case-study__hero">
        <SmartImage src={project.image} alt={project.title} />
      </div>

      <section className="branding-case-study__overview">
        <div className="branding-case-study__overview-inner">
          <p className="branding-case-study__eyebrow">Project overview</p>
          <p className="branding-case-study__text">{project.description}</p>
          <div className="branding-case-study__meta">
            <div className="branding-case-study__meta-item">
              <span className="branding-case-study__meta-label">Project type</span>
              <p className="branding-case-study__meta-value">{project.tag}</p>
            </div>
            <div className="branding-case-study__meta-item">
              <span className="branding-case-study__meta-label">Year</span>
              <p className="branding-case-study__meta-value">{project.year}</p>
            </div>
            <div className="branding-case-study__meta-item">
              <span className="branding-case-study__meta-label">My role</span>
              <p className="branding-case-study__meta-value">{project.role}</p>
            </div>
            <div className="branding-case-study__meta-item">
              <span className="branding-case-study__meta-label">Client</span>
              <p className="branding-case-study__meta-value">{project.client}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--gallery">
        <MasonryGallery items={galleryItems} />
      </section>
    </div>
  );
}

export default ProjectCaseStudyPage;
