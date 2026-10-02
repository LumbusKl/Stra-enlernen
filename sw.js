const CACHE="strassenlernen-v3";
const CORE=["./","./index.html","./manifest.webmanifest","./einsatzgebiet.json"];
self.addEventListener("install",e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)).then(()=>self.skipWaiting())));
self.addEventListener("activate",e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim())));
self.addEventListener("fetch",e=>{if(e.request.method!=="GET")return;e.respondWith(caches.match(e.request).then(c=>c||fetch(e.request).then(r=>{if(r.ok&&new URL(e.request.url).origin===location.origin){const x=r.clone();caches.open(CACHE).then(cache=>cache.put(e.request,x))}return r}).catch(()=>c)))})
