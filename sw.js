const CACHE='strassenlernen-v5-4';
self.addEventListener('install',e=>e.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./manifest.webmanifest','./einsatzgebiet.json']))));
self.addEventListener('activate',e=>e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))));
self.addEventListener('fetch',e=>e.respondWith(caches.match(e.request).then(x=>x||fetch(e.request).then(r=>{const c=r.clone();if(e.request.method==='GET'&&new URL(e.request.url).origin===location.origin)caches.open(CACHE).then(cache=>cache.put(e.request,c));return r}).catch(()=>x))));
