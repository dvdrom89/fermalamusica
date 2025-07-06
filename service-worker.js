self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('disco-cache').then(function(cache) {
      return cache.addAll([
        './',
        './index.html',
        './sfondo.jpg',
        './canzone.mp3',
        './errore.mp3',
        './vittoria.mp3',
        './logo1.png',
        './logo2.png',
        './manifest.json'
      ]);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
