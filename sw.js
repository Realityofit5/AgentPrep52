// ================================================================
// AgentPrep 52 — Service Worker (Offline-First)
// All 50 States + DC + Puerto Rico
// ================================================================
const CACHE = 'agentprep52-v1';

const SHELL = [
  '/',
  '/index.html',
  '/styles.css',
  '/app.js',
  '/states.js',
  '/manifest.json',
  // 52 State Curricula
  '/AK_curriculum.js', '/AL_curriculum.js', '/AR_curriculum.js', '/AZ_curriculum.js',
  '/CA_curriculum.js', '/CO_curriculum.js', '/CT_curriculum.js', '/DC_curriculum.js',
  '/DE_curriculum.js', '/FL_curriculum.js', '/GA_curriculum.js', '/HI_curriculum.js',
  '/IA_curriculum.js', '/ID_curriculum.js', '/IL_curriculum.js', '/IN_curriculum.js',
  '/KS_curriculum.js', '/KY_curriculum.js', '/LA_curriculum.js', '/MA_curriculum.js',
  '/MD_curriculum.js', '/ME_curriculum.js', '/MI_curriculum.js', '/MN_curriculum.js',
  '/MO_curriculum.js', '/MS_curriculum.js', '/MT_curriculum.js', '/NC_curriculum.js',
  '/ND_curriculum.js', '/NE_curriculum.js', '/NH_curriculum.js', '/NJ_curriculum.js',
  '/NM_curriculum.js', '/NV_curriculum.js', '/NY_curriculum.js', '/OH_curriculum.js',
  '/OK_curriculum.js', '/OR_curriculum.js', '/PA_curriculum.js', '/PR_curriculum.js',
  '/RI_curriculum.js', '/SC_curriculum.js', '/SD_curriculum.js', '/TN_curriculum.js',
  '/TX_curriculum.js', '/UT_curriculum.js', '/VA_curriculum.js', '/VT_curriculum.js',
  '/WA_curriculum.js', '/WI_curriculum.js', '/WV_curriculum.js', '/WY_curriculum.js',
  // Fonts
  'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,300;9..144,400;9..144,500;9..144,600&family=DM+Sans:ital,opsz,wght@0,9..40,300;0,9..40,400;0,9..40,500;0,9..40,600;1,9..40,400&family=DM+Mono:wght@400;500&display=swap'
];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => {
      // Cache shell files; skip if individual files fail (avoids blocking install)
      return Promise.allSettled(SHELL.map(url => c.add(url)));
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', e => {
  // Never cache AI API calls
  if (e.request.url.includes('api.anthropic.com')) return;

  e.respondWith(
    caches.match(e.request).then(cached => {
      if (cached) return cached;
      return fetch(e.request).then(resp => {
        if (resp && resp.status === 200 && e.request.method === 'GET') {
          const clone = resp.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return resp;
      }).catch(() => {
        if (e.request.destination === 'document') {
          return caches.match('/index.html');
        }
      });
    })
  );
});
