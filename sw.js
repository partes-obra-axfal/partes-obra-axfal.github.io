// Guarda la app en el móvil para que abra aunque no haya cobertura en la obra.
// La página y config.js se piden primero a internet (para recibir mejoras) y, si no hay, se usa lo guardado.
const CACHE = "parte-obra-axfal-202611181903";
const APP = ["./", "index.html", "config.js", "manifest.webmanifest", "icono-192.png", "icono-512.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(APP)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k.indexOf("parte-obra-axfal-") === 0 && k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET") return; // los envíos a la oficina no se tocan
  const url = new URL(req.url);
  if (url.origin === location.origin) {
    const esPagina = req.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html");
    const esConfig = url.pathname.endsWith("config.js");
    if (esPagina || esConfig) {
      const clave = esPagina ? "index.html" : "config.js";
      e.respondWith(fetch(req, { cache: "no-store" }).then(r => { if (!r.ok) throw new Error(r.status); const c = r.clone(); caches.open(CACHE).then(k => k.put(clave, c)); return r; })
        .catch(() => caches.match(clave).then(r => r || caches.match("./"))));
    } else {
      e.respondWith(caches.match(req).then(r => r || fetch(req)));
    }
  } else if (/fonts\.(googleapis|gstatic)\.com$/.test(url.hostname)) {
    e.respondWith(caches.match(req).then(r => r || fetch(req).then(res => { const c = res.clone(); caches.open(CACHE).then(k => k.put(req, c)); return res; })));
  }
});
