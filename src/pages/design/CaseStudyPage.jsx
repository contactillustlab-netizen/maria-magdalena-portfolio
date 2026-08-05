import { ArrowLeft } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import SmartImage from '../../components/SmartImage';
import { graphicDesignProjects } from '../../data/graphicDesignProjects';

function CaseStudyPage() {
  const { slug } = useParams();
  const project = graphicDesignProjects.find((item) => item.slug === slug);

  if (!project) {
    return <Navigate to="/design" replace />;
  }

  return (
    <section className="section case-study">
      <Link to="/design" className="case-study__back">
        <ArrowLeft size={16} /> Back to Graphic Design
      </Link>
      <p className="case-study__eyebrow">{project.tag}</p>
      <h1 className="case-study__title">{project.title}</h1>
      <p className="case-study__description">{project.description}</p>
      <div className="case-study__image">
        <SmartImage src={project.image} alt={project.title} />
      </div>
    </section>
  );
}

export default CaseStudyPage;
