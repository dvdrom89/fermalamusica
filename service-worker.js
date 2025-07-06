self.addEventListener('install', function (e) {
  e.waitUntil(
    caches.open('app-cache').then(function (cache) {
      return cache.addAll([
        './',
        './index.html',
        './manifest.json',
        './sfondo.jpg',
        './logo1.png',
        './logo2.png',
        './icon-192.png',
        './icon-512.png',
        './canzone.mp3',
        './errore.mp3',
        './vittoria.mp3'
      ]);
    })
  );
});

self.addEventListener('fetch', function (e) {
  e.respondWith(
    caches.match(e.request).then(function (response) {
      return response || fetch(e.request);
    })
  );
});

