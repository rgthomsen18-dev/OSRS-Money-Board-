/* OSRS Money Board — offline shell. Network-first for the page so new builds
   always win; cached copy only serves when offline. API calls untouched. */
const CACHE = "fmb-shell-v1";
self.addEventListener("install", e => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then(c => c.add("./index.html").catch(() => {})));
});
self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener("fetch", e => {
  if (e.request.mode !== "navigate") return; // prices API and assets go straight to network
  e.respondWith(
    fetch(e.request).then(r => {
      const copy = r.clone();
      caches.open(CACHE).then(c => c.put("./index.html", copy)).catch(() => {});
      return r;
    }).catch(() => caches.match("./index.html"))
  );
});
