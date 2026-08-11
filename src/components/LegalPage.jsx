import Breadcrumbs from './Breadcrumbs';

function LegalPage({ eyebrow, title, updated, intro, sections }) {
  return (
    <>
      <Breadcrumbs items={[{ to: '/', label: 'Home' }, { label: title }]} />
      <section className="section legal-page">
        <p className="section-header__eyebrow">{eyebrow}</p>
        <h1 className="legal-page__title">{title}</h1>
        {updated ? <p className="legal-page__updated">Last updated: {updated}</p> : null}
        {intro ? <p className="legal-page__text">{intro}</p> : null}
        {sections.map((sectionItem) => (
          <div key={sectionItem.heading} className="legal-page__section">
            <h2>{sectionItem.heading}</h2>
            {sectionItem.body.map((paragraph, index) => (
              <p key={index} className="legal-page__text">{paragraph}</p>
            ))}
          </div>
        ))}
      </section>
    </>
  );
}

export default LegalPage;
