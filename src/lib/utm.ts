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
