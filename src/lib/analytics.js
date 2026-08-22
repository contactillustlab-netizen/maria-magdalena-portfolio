// GA4 Measurement ID from analytics.google.com (Admin → Data Streams). Swap in a
// placeholder containing XXXX and analytics goes inert — no script is ever loaded.
export const GA_MEASUREMENT_ID = 'G-2PGQEWWW34';

// The same build is also served from the workers.dev address, and from any
// local or preview run. Only the live domain should ever reach Analytics.
const LIVE_HOSTS = ['magdavizireanu.com', 'www.magdavizireanu.com'];
const isLiveHost = () => LIVE_HOSTS.includes(window.location.hostname);

const isConfigured = () =>
  Boolean(GA_MEASUREMENT_ID) && !GA_MEASUREMENT_ID.includes('XXXX') && isLiveHost();

let scriptLoaded = false;
let currentPath = null;

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
  gtag('config', GA_MEASUREMENT_ID, { anonymize_ip: true, send_page_view: false });
  // Consent can arrive mid-visit; record the page they are on right now.
  if (currentPath) sendPageView();
}

function sendPageView() {
  gtag('event', 'page_view', {
    page_location: window.location.href,
    page_title: document.title
  });
}

// Called on every route change. React Router swaps pages without a document
// load, so without this the whole visit would report as a single page view.
export function trackPageView(path) {
  currentPath = path;
  if (!isConfigured() || !scriptLoaded) return;
  sendPageView();
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
