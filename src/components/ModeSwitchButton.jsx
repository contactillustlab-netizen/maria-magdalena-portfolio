import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

function ModeSwitchButton({ to, label, variant = 'art' }) {
  return (
    <Link to={to} className="mode-switch" aria-label={label}>
      <span>{label}</span>
      <span className="mode-switch__icon" aria-hidden="true">
        <ArrowRight size={18} />
      </span>
    </Link>
  );
}

export default ModeSwitchButton;
