import { Link } from 'react-router-dom';

const LOGO_SRC = '/images/logos/mm-mark-white.svg';

function ModeSwitchButton({ to, label, ghostLabel }) {
  return (
    <Link to={to} className="mode-switch" aria-label={label}>
      <span className="mode-switch__icon" aria-hidden="true">
        <img src={LOGO_SRC} alt="" />
      </span>
      <span className="mode-switch__label">
        <span className="mode-switch__label-text">{label}</span>
        {ghostLabel ? (
          <span className="mode-switch__label-text mode-switch__label-text--ghost" aria-hidden="true">{ghostLabel}</span>
        ) : null}
      </span>
    </Link>
  );
}

export default ModeSwitchButton;
