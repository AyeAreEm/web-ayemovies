const staticCacheName = "site-static";
const assets = [
    "/",
    "/script.js",
    "/styles.css",
    "/mobile.css",
    "/img/AyeAreEm.png",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
];

// install service worker
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(staticCacheName).then(cache => {
            console.log("caching shell assets");
            cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', evt => {
    console.log("service worker has been activated");
});

// fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request).then((cacheRes) => {
            return cacheRes || fetch(evt.request);
        })
    );
});