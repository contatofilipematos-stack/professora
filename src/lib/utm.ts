const UTM_KEYS = [
  "utm_source",
  "utm_medium",
  "utm_campaign",
  "utm_content",
  "utm_term",
  "fbclid",
];

export function saveUTMs() {
  const params = new URLSearchParams(window.location.search);

  UTM_KEYS.forEach((key) => {
    const value = params.get(key);

    if (value) {
      localStorage.setItem(key, value);
    }
  });
}

export function appendUTMs(url: string) {
  const finalUrl = new URL(url);

  UTM_KEYS.forEach((key) => {
    const value = localStorage.getItem(key);

    if (value) {
      finalUrl.searchParams.set(key, value);
    }
  });

  return finalUrl.toString();
}

export function trackInitiateCheckout() {
  if (typeof window !== 'undefined') {
    try {
      // Standard Meta Pixel / UTMfy proxy
      if ((window as any).fbq) {
        (window as any).fbq('track', 'InitiateCheckout');
      }
      
      // UTMfy specific tracker
      if ((window as any).vmPix) {
        (window as any).vmPix('track', 'InitiateCheckout');
      }
      
      // Some UTMfy setups use this for manual events
      if ((window as any).utmify && (window as any).utmify.track) {
        (window as any).utmify.track('InitiateCheckout');
      }
    } catch (e) {
      console.error('Error tracking InitiateCheckout:', e);
    }
  }
}
