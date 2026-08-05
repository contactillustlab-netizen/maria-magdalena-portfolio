import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function SkillsTimeline({ items }) {
  return (
    <ol className="skills-timeline">
      {items.map((item) => (
        <li key={item.label} className="skills-timeline__item">
          <span className="skills-timeline__label">{item.label}</span>
          <div className="skills-timeline__content">
            <h3>{item.title}</h3>
            <p>{item.text}</p>
            <Link to={item.cta} className="about-page__cta">
              Explore {item.label} <ArrowRight size={16} />
            </Link>
          </div>
        </li>
      ))}
    </ol>
  );
}

export default SkillsTimeline;
