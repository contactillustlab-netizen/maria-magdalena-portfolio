import { Link } from 'react-router-dom';

const LOGO_SRC = '/images/logos/mm-mark-white.svg';

function ModeSwitchButton({ to, label }) {
  return (
    <Link to={to} className="mode-switch" aria-label={label}>
      <span className="mode-switch__icon" aria-hidden="true">
        <img src={LOGO_SRC} alt="" />
      </span>
      <span className="mode-switch__label">{label}</span>
    </Link>
  );
}

export default ModeSwitchButton;
