import LegalPage from '../components/LegalPage';

function PrivacyPolicyPage() {
  return (
    <LegalPage
      eyebrow="Legal"
      title="Privacy Policy"
      updated="August 2026"
      intro="This portfolio is a static website. It does not use accounts, contact forms, or any backend that stores your personal data. This page explains the little information that does pass through the site."
      sections={[
        {
          heading: 'Information collected by this site',
          body: [
            'This site does not collect, store, or process any personal data on its own servers. There are no sign-ups, no contact forms, and no databases.',
            'Getting in touch happens entirely through third-party services you choose yourself, such as email (mailto), LinkedIn, Instagram, ArtStation, or Behance. Any information you share through those channels is handled under that platform’s own privacy policy, not this one.'
          ]
        },
        {
          heading: 'Hosting and server logs',
          body: [
            'Like virtually any website, the hosting provider that serves these pages may automatically log basic technical information — such as IP address, browser type, and request timestamps — for security and performance purposes. This site does not have access to or use these logs for tracking.'
          ]
        },
        {
          heading: 'Fonts',
          body: [
            'This site loads the Bricolage Grotesque typeface from Google Fonts. Loading it causes your browser to make a request to Google’s servers, which may process your IP address as part of that request. See the Cookie Policy page for details.'
          ]
        },
        {
          heading: 'Changes to this policy',
          body: [
            'This policy may be updated occasionally to reflect changes to the site. Any changes will be posted on this page with a new “last updated” date.'
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

export default PrivacyPolicyPage;
