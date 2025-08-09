const APP = 'GIT_LAST_COMMIT_HASH';
const API = 'api';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(APP)
    .then(cache => cache.addAll([
      '.',
      '404.html',
      'index.html',
      'favicon.svg',
      'assets/index.js',
      'assets/index.css'
    ]))
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
    .then(keys => Promise.all(
      keys.map(cache => [APP, API].includes(cache) ? undefined : caches.delete(cache))
    ))
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request)
    .then(cached => cached || fetch(e.request)
      .then(response => {
        if (isAllowedToCache(response))
          caches.open(API).then(cache => cache.put(e.request, response));

        return response.clone();
      })
    )
  );
});

function isAllowedToCache({ok, url, headers}) {
  return (
    ok
    && hasAllowedUrl(url)
    && hasAllowedHeaders(headers)
  ) ? true : false;
}

function hasAllowedUrl(url) {
  const whitelist = [
    '/channel/',
    '/channels/',
    '/playlists/',
    '/search?q=',
    'piped'
  ];

  return whitelist.filter(item => url.includes(item)).length;
}

function hasAllowedHeaders(headers) {
  const contentTypeWhitelist = [
    'application/json',
    'image/webp'
  ];

  return contentTypeWhitelist.includes(headers.get('Content-Type'));
}
