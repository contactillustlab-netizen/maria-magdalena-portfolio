function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      {eyebrow ? <p className="section-header__eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p>{description}</p> : null}
    </div>
  );
}

export default SectionHeader;
