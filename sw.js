// Service worker ขั้นต่ำ แค่เพื่อให้เว็บผ่านเกณฑ์ PWA ติดตั้งได้ (ไม่มี offline caching)
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
