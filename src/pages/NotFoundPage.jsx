import { Link } from 'react-router-dom';

function NotFoundPage() {
  return (
    <section className="section not-found">
      <h1>Page not found</h1>
      <p>The page you requested does not exist yet.</p>
      <Link to="/illustration">Return to portfolio</Link>
    </section>
  );
}

export default NotFoundPage;
