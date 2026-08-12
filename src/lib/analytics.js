// GA4 Measurement ID from analytics.google.com (Admin → Data Streams). Leave the
// placeholder in place and analytics stays fully inactive — no script is ever loaded.
export const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

const isConfigured = () => Boolean(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.includes('XXXX');

let scriptLoaded = false;

function gtag(...args) {
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(args);
}

// Must run before gtag.js is ever requested, per Google's Consent Mode v2 spec.
export function setDefaultConsent() {
  gtag('consent', 'default', {
    analytics_storage: 'denied',
    ad_storage: 'denied',
    ad_user_data: 'denied',
    ad_personalization: 'denied'
  });
}

function loadGtagScript() {
  if (scriptLoaded || !isConfigured()) return;
  scriptLoaded = true;
  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
  gtag('js', new Date());
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true });
}

export function applyStoredConsent(choice) {
  if (!isConfigured()) return;
  if (choice === 'accepted') {
    gtag('consent', 'update', { analytics_storage: 'granted' });
    loadGtagScript();
  }
}

export function updateConsent(granted) {
  if (!isConfigured()) return;
  gtag('consent', 'update', { analytics_storage: granted ? 'granted' : 'denied' });
  if (granted) loadGtagScript();
}
