// Service Worker для PWA
const CACHE_NAME = 'chemtest-v1';
const urlsToCache = [
  '/ChemTest369/',
  '/ChemTest369/index.html',
  '/ChemTest369/manifest.json',
  '/ChemTest369/icon-192.png',
  '/ChemTest369/icon-512.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
