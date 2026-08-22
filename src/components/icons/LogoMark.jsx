// The M monogram, drawn in currentColor so it takes the colour of whatever it
// sits in — white on the near-black art surfaces, near-black on the design
// ones — instead of needing one file per theme.
function LogoMark({ size = 24, className = '', title }) {
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 47 283.465 189"
      fill="currentColor"
      role={title ? 'img' : 'presentation'}
      aria-hidden={title ? undefined : true}
      focusable="false"
    >
      {title ? <title>{title}</title> : null}
      <polygon points="225.573,128.405 207.169,160.061 243.61,225.794 281.523,225.794" />
      <path d="M222.28,90.823c0,0,17.65-35.835,49.581-30.552V57.67h-30.593L222.28,90.823z" />
      <polygon points="158.431,186.871 232.398,57.67 241.325,57.67 144.698,225.794 102.094,154.479 121.234,122.271" />
      <path d="M51.522,192.642c0,0-17.65,35.835-49.581,30.552v2.601h30.593L51.522,192.642z" />
      <polygon points="115.372,96.594 41.405,225.794 32.478,225.794 129.105,57.67 171.709,128.986 152.568,161.194" />
    </svg>
  );
}

export default LogoMark;
