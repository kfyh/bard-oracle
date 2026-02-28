const CACHE_NAME = "bard-oracle-v1";
const BASE = "/bard-oracle";

const ASSETS = [
  `${BASE}/`,
  `${BASE}/index.html`,
  `${BASE}/oracle.js`,
  `${BASE}/manifest.json`,
  `${BASE}/icon-192.png`,
  `${BASE}/icon-512.png`
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
```

---

But before touching those — **can you check one thing first?** Go to your repo on GitHub and confirm the file structure looks like this:
```
bard-oracle/
└── public/
    ├── index.html
    ├── oracle.js
    ├── manifest.json
    ├── sw.js
    ├── icon-192.png
    └── icon-512.png