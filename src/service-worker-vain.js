// change static cache name after the app changed
const staticCacheName = "dabravesce-sw-v3";
const dynamicCacheName = "dabravesce-sw-d-v3";

const assetsToCache = [
  ".", // or 'index.html' | ?i=0-0-0-0
  "./albums/Gospels/John.js",
  "./albums/Gospels/Luke.js",
  "./albums/Gospels/Mark.js",
  "./albums/Gospels/Matthew.js",
  "./albums/Prayers/Canons.js",
  "./albums/Prayers/Daily.js",
  "./albums/Prayers/Easter.js",
  "./albums/Prayers/Housel.js",
  "./albums/Prayers/Lithury.js",
  "./albums/Songs/Christmas.js",
  "./albums/Songs/Easters.js",
  "./albums/Songs/Folk.js",
  "./albums/Songs/Prayal.js",
  "./albums/albums.js",
  "./albums/apostles.js",
  "./albums/contacts.js",
  "./albums/epistles.js",
  "./albums/gospels.js",
  "./albums/prayers.js",
  "./albums/songs.js",
];

self.addEventListener("install", async () => {
  const cache = await caches.open(staticCacheName);
  await cache.addAll(assetsToCache);
});

// uncomment on app change to delete the cached versions of SW
self.addEventListener("activate", async (event) => {
  const cacheNames = await caches.keys();
  // delete all SW cached versions except for the current one
  await Promise.all(
    cacheNames
      .filter((name) => name !== staticCacheName)
      .filter((name) => name !== dynamicCacheName)
      .map((name) => caches.delete(name))
  );
});

self.addEventListener("fetch", (event) => {
  const { request } = event;
  event.respondWith(cacheFirst(request));

  // console.log(event.request.url)
  // const { request } = event
  // const url = new URL(request.url)

  // if (url.origin === location.origin) {
  //     event.respondWith(cacheFirst(request))
  // } else {
  //     event.respondWith(networkFirst(request))
  // }
});

async function cacheFirst(request) {
  const cachedResponse = await caches.match(request).response; // .response
  return cachedResponse ?? (await fetch(request)); // fetch if chached nothing
}

// async function networkFirst(request) {
// const cache = await caches.open(dynamicCacheName)
// try {
// const response = await fetch(request)
// await cache.put(request, response.clone())
// return response
// } catch (e) {
// const cached = await cache.match(request)
// return cached ?? caches.match('offline.html')
// // ?? when there is no network and cache is empty
// // offline.html is a file to create
// }
// }
