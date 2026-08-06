import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div className="landing">
      <Link to="/design" className="landing__panel landing__panel--design" aria-label="Enter Design">
        <h2>Design</h2>
        <p>Graphic design. Branding. UI design. Marketing design.</p>
        <span className="landing__panel-cta">Enter</span>
      </Link>

      <Link to="/illustration" className="landing__panel landing__panel--art" aria-label="Enter Art">
        <h2>Art</h2>
        <p>Illustration. Sketches. Concept art</p>
        <span className="landing__panel-cta">Enter</span>
      </Link>
    </div>
  );
}

export default LandingPage;
