import LegalPage from '../components/LegalPage';

function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Cookie Policy"
      updated="August 2026"
      intro="This site does not use cookies to track, identify, or advertise to visitors. No analytics or advertising cookies are set by this site, and no cookie consent banner is needed because none are used."
      sections={[
        {
          heading: 'Cookies set by this site',
          body: [
            'None. This is a static portfolio site with no forms, accounts, or analytics scripts, so it does not set any first-party cookies.'
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
            'If cookies are ever introduced to this site in the future (for example, for analytics), this page will be updated first, along with an updated “last updated” date.'
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
