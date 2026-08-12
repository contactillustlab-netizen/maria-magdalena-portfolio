import LegalPage from '../components/LegalPage';

function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="August 2026"
      wide
      intro="This site doesn’t set any cookies by default. The only thing that turns on is Google Analytics, and only if you accept it in the cookie banner."
      sections={[
        {
          heading: 'Cookies set by this site',
          body: [
            'By default, this site sets no cookies at all. Your accept/decline choice is remembered in your browser’s local storage, not a cookie, so we don’t ask again on your next visit.',
            'If you accept, Google Analytics sets its own cookies (such as _ga and _ga_*) to count visits and page views. If you decline, or never choose, those cookies are never set.'
          ]
        },
        {
          heading: 'Google Analytics (optional)',
          body: [
            'When active, Google Analytics helps us see which pages get visited and roughly how people navigate the site. It doesn’t identify you by name.',
            <>Google processes this data on its own servers, which may be outside the EU. See <a href="https://policies.google.com/privacy" target="_blank" rel="noreferrer">Google’s privacy policy</a> for details.</>
          ]
        },
        {
          heading: 'How to change your choice',
          body: [
            'You can accept or decline analytics cookies at any time.',
            <button
              key="manage"
              type="button"
              className="about-page__cta"
              onClick={() => window.dispatchEvent(new Event('open-cookie-preferences'))}
            >
              Manage cookie preferences
            </button>
          ]
        },
        {
          heading: 'Third-party fonts',
          body: [
            'This site loads the Bricolage Grotesque typeface directly from Google Fonts’ servers. This request does not set a cookie, but it does mean your browser connects to Google to fetch the font file, which may expose your IP address to Google as part of that request.'
          ]
        },
        {
          heading: 'Links to other sites',
          body: [
            'This site links out to email, LinkedIn, Instagram, ArtStation, and Behance. If you follow one of those links, that site’s own cookie policy applies once you’re there — this policy only covers this portfolio site.'
          ]
        },
        {
          heading: 'Changes to this policy',
          body: [
            'If cookies are ever introduced beyond what’s described above, this page will be updated first, along with a new “last updated” date.'
          ]
        },
        {
          heading: 'Contact',
          body: [
            'Questions about this policy can be sent to contact.illustlab@gmail.com.'
          ]
        }
      ]}
    />
  );
}

export default CookiesPage;
