import { ArrowUpRight, Instagram, Linkedin, Mail } from 'lucide-react';

const contactChannels = [
  {
    label: 'contact.illustlab@gmail.com',
    action: 'Send an email',
    href: 'mailto:contact.illustlab@gmail.com',
    icon: <Mail size={20} />,
    hue: 30
  },
  {
    label: 'Message on LinkedIn',
    action: 'Connect on LinkedIn',
    href: 'https://www.linkedin.com/in/maria-magdalena-vizireanu/',
    icon: <Linkedin size={20} />,
    hue: 205
  },
  {
    label: 'Message on Instagram',
    action: 'DM on Instagram',
    href: 'https://www.instagram.com/magdamariav/',
    icon: <Instagram size={20} />,
    hue: 330
  }
];

function ContactPage() {
  return (
    <section className="section contact-page">
      <div className="contact-page__intro">
        <div className="contact-page__copy">
          <p className="section-header__eyebrow">Contact</p>
          <h1 className="contact-page__title">Got an idea?<br />Let’s bring it to life.</h1>
          <p className="contact-page__text">
            If you’d like to collaborate or work together, you can reach me by email or connect directly on LinkedIn or Instagram.
          </p>
          <p className="contact-status">
            <span className="contact-status__dot" aria-hidden="true" />
            Available for collaborations
          </p>
        </div>
      </div>

      {/* Signal field: thin paths + traveling dots connecting the intro to the contact cards */}
      <div className="contact-signal-field" aria-hidden="true">
        <svg
          className="contact-signal-field__svg"
          viewBox="0 0 1200 140"
          preserveAspectRatio="none"
          focusable="false"
        >
          <path id="signal-path-1" className="contact-signal-field__path contact-signal-field__path--1" d="M600,6 C 430,55 250,72 190,130" />
          <path id="signal-path-2" className="contact-signal-field__path contact-signal-field__path--2" d="M600,6 C 600,55 600,85 600,130" />
          <path id="signal-path-3" className="contact-signal-field__path contact-signal-field__path--3" d="M600,6 C 770,55 950,72 1010,130" />

          <circle className="contact-signal-field__dot contact-signal-field__dot--1" r="3">
            <animateMotion dur="4.8s" begin="0s" repeatCount="indefinite" rotate="auto">
              <mpath href="#signal-path-1" xlinkHref="#signal-path-1" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="4.8s" begin="0s" repeatCount="indefinite" />
          </circle>
          <circle className="contact-signal-field__dot contact-signal-field__dot--2" r="3">
            <animateMotion dur="4.8s" begin="1.6s" repeatCount="indefinite" rotate="auto">
              <mpath href="#signal-path-2" xlinkHref="#signal-path-2" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="4.8s" begin="1.6s" repeatCount="indefinite" />
          </circle>
          <circle className="contact-signal-field__dot contact-signal-field__dot--3" r="3">
            <animateMotion dur="4.8s" begin="3.2s" repeatCount="indefinite" rotate="auto">
              <mpath href="#signal-path-3" xlinkHref="#signal-path-3" />
            </animateMotion>
            <animate attributeName="opacity" values="0;1;1;0" keyTimes="0;0.08;0.82;1" dur="4.8s" begin="3.2s" repeatCount="indefinite" />
          </circle>
        </svg>
        {/* Mobile fallback: a single vertical signal instead of the desktop paths */}
        <span className="contact-signal-field__mobile-track">
          <span className="contact-signal-field__mobile-dot" />
        </span>
      </div>

      <div className="contact-page__channels">
        {contactChannels.map((channel) => {
          const isEmail = channel.href.startsWith('mailto:');
          return (
            <a
              key={channel.label}
              href={channel.href}
              target={isEmail ? undefined : '_blank'}
              rel={isEmail ? undefined : 'noreferrer'}
              className="contact-channel"
              style={{ '--tag-hue': channel.hue }}
            >
              <span className="contact-channel__icon">{channel.icon}</span>
              <span className="contact-channel__text">
                <span className="contact-channel__label">{channel.label}</span>
                <span className="contact-channel__action">
                  {channel.action} <span className="contact-channel__arrow"><ArrowUpRight size={14} /></span>
                </span>
              </span>
            </a>
          );
        })}
      </div>
    </section>
  );
}

export default ContactPage;
