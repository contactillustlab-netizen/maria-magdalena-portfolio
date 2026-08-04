import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ProjectCard({ title, description, image, link }) {
  return (
    <article className="project-card">
      <img src={image} alt={title} loading="lazy" />
      <div className="project-card__content">
        <h3>{title}</h3>
        <p>{description}</p>
        <Link to={link}>
          Explore projects <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default ProjectCard;
