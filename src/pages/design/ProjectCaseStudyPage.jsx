import { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import Breadcrumbs from '../../components/Breadcrumbs';
import MasonryGallery from '../../components/MasonryGallery';

const CASE_STUDY_TABS = [
  { key: 'challenge', label: 'The Challenge' },
  { key: 'approach', label: 'Approach' },
  { key: 'outcome', label: 'Outcome' },
  { key: 'whatWeDid', label: 'What I Did' }
];

// Placeholder copy so the tabs have something to show before real case-study
// text is written per project — replace via each project's `caseStudy` field.
const MOCK_CASE_STUDY = {
  challenge: 'This project needed a clear, confident identity that could hold up across print, digital and real-world touchpoints, while staying true to the brand’s voice and standing out in a crowded market.',
  approach: 'I started with research into the audience and competitors, then developed a visual language — typography, color and imagery — that could flex across every application without losing consistency.',
  outcome: 'The final result gives the brand a distinctive, cohesive presence that’s easy to recognize and simple to apply consistently across new materials.',
  whatWeDid: 'Strategy, identity design, typography and color systems, plus templates for key applications.'
};

function ProjectCaseStudyPage({ projects, listPath, basePath, sectionLabel }) {
  const { slug } = useParams();
  const index = projects.findIndex((item) => item.slug === slug);
  const project = projects[index] ?? null;
  const caseStudy = project ? { ...MOCK_CASE_STUDY, ...project.caseStudy } : null;
  const availableTabs = CASE_STUDY_TABS.filter((tab) => caseStudy?.[tab.key]);
  const [activeTab, setActiveTab] = useState(availableTabs[0]?.key ?? null);

  if (!project) {
    return <Navigate to={listPath} replace />;
  }

  const previousProject = projects[(index - 1 + projects.length) % projects.length];
  const nextProject = projects[(index + 1) % projects.length];

  const galleryItems = [
    { id: 0, title: project.title, category: project.tag, image: project.image },
    ...(project.images
      ? project.images.map((src, i) => ({ id: i + 1, title: `${project.title} — Visual ${i + 1}`, category: project.tag, image: src }))
      : Array.from({ length: project.galleryCount ?? 0 }, (_, i) => ({ id: i + 1, title: `${project.title} — Visual ${i + 1}`, category: project.tag, image: null })))
  ];

  return (
    <div className="case-study">
      <div className="case-study__layout">
        <aside className="case-study__sidebar">
          <Breadcrumbs items={[{ label: sectionLabel, to: listPath }, { label: project.title }]} />

          <div className="case-study__intro">
            <h1 className="case-study__title">{project.title}</h1>
            <p className="case-study__description">{project.description}</p>
          </div>

          <ul className="case-study__meta">
            <li>{project.tag}</li>
            {project.role ? <li>{project.role}</li> : null}
            {project.client ? (
              <li>
                {project.clientUrl ? (
                  <a href={project.clientUrl} target="_blank" rel="noopener noreferrer">
                    {project.client}
                  </a>
                ) : (
                  project.client
                )}
              </li>
            ) : null}
            {project.year ? <li>{project.year}</li> : null}
          </ul>

          {availableTabs.length > 0 ? (
            <div className="case-study__tabs-block">
              <div className="case-study__tabs" role="tablist">
                {availableTabs.map((tab) => (
                  <button
                    key={tab.key}
                    type="button"
                    role="tab"
                    className={`case-study__tab${activeTab === tab.key ? ' is-active' : ''}`}
                    aria-selected={activeTab === tab.key}
                    onClick={() => setActiveTab(tab.key)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
              <p className="case-study__tab-content">{caseStudy[activeTab]}</p>
            </div>
          ) : null}

          <div className="case-study__pagination">
            <Link to={`${basePath}/${previousProject.slug}`} className="case-study__pagination-link">
              <ArrowLeft size={14} /> Previous
            </Link>
            <Link to={`${basePath}/${nextProject.slug}`} className="case-study__pagination-link">
              Next <ArrowRight size={14} />
            </Link>
          </div>
        </aside>

        <div className="case-study__main">
          <MasonryGallery items={galleryItems} />
        </div>
      </div>
    </div>
  );
}

export default ProjectCaseStudyPage;
