// ============================================================
//  Service Worker — sw.js
//  Caches all app files for full offline use
// ============================================================

const CACHE_NAME = "bards-oracle-v1";

const ASSETS = [
  "/",
  "/index.html",
  "/oracle.js",
  "/manifest.json",
  "/icon-192.png",
  "/icon-512.png"
];

// Install: cache everything
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete old caches
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
