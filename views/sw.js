const cacheName = "ayeCache 1.3.4";
const dynamicCache = "ayeDynamic 1.0.1";
const assets = [
    "/",
    "/script.js",
    "/styles.css",
    "/mobile.css",
    "/img/AyeAreEm.png",
    "/report-bug",
    "https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap",
    "https://fonts.gstatic.com/s/roboto/v20/KFOlCnqEu92Fr1MmSU5fBBc4.woff2"
];

// install service worker
self.addEventListener('install', evt => {
    self.skipWaiting();

    evt.waitUntil(
        caches.open(cacheName).then(cache => {
            return cache.addAll(assets);
        })
    );
});

// activate event
self.addEventListener('activate', event => {
    // delete any caches that aren't in expectedCaches
    // which will get rid of static-v1
    event.waitUntil(
        caches.keys().then(keys => Promise.all(
            keys.map(key => {
                if (!cacheName.includes(key)) {
                    return caches.delete(key);
                }
            })
        ))
    );
 });

// fetch event
self.addEventListener('fetch', evt => {
    if (evt.request.url.indexOf('/issues?dev=true') !== -1) {
        return false;
    }

    evt.respondWith(
        caches.match(evt.request).then((cacheRes) => {
            return cacheRes || fetch(evt.request).then(async fetchRes => {
                const cache = await caches.open(dynamicCache);
                cache.put(evt.request.url, fetchRes.clone());
                return fetchRes;
            }).catch(err => {
                console.log("ya there was an error");
            });
        })
    );
});