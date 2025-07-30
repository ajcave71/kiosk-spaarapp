
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('kiosk-cache-v1').then(cache => {
      return cache.addAll([
        'kiosk_spaarapp_pwa.html',
        'manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
