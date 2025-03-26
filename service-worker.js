/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "4b7ee050ff784b8075b381d4bbdf2628"
  },
  {
    "url": "assets/css/0.styles.8ae939ba.css",
    "revision": "3de1334be4f24c7d3fe3fe87613b3c9b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.17dc7fc0.js",
    "revision": "235105471074525d1d2bdc9d1186bdf9"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.f4d805b2.js",
    "revision": "45a0f424731485e8513dbf3f52453817"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.d7f079b2.js",
    "revision": "6b809a93916ba8b3fde674d26eee6270"
  },
  {
    "url": "assets/js/15.a7123495.js",
    "revision": "288e69a26750ca7b110ffd6b124ccaef"
  },
  {
    "url": "assets/js/16.f868886d.js",
    "revision": "c675477f2e17bea2023b9fbafcbb22ee"
  },
  {
    "url": "assets/js/17.8fc59401.js",
    "revision": "525578c738a03b9cff77d25a752e7043"
  },
  {
    "url": "assets/js/18.2c392867.js",
    "revision": "c422e8fc95e575c2533178de81aacd82"
  },
  {
    "url": "assets/js/19.53f9c669.js",
    "revision": "8f489a5cca5cc135ecd985b7d99ceb03"
  },
  {
    "url": "assets/js/2.54a9bd73.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.d91bd9ed.js",
    "revision": "ed23c2f47b427c51527927891e8e3d7f"
  },
  {
    "url": "assets/js/21.30dbfb52.js",
    "revision": "a313cd96f4ee0acbccef2c606e94764c"
  },
  {
    "url": "assets/js/22.79b3738a.js",
    "revision": "6c24ff5badb20dd62f0d25124765f5f5"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.f72c0d60.js",
    "revision": "3b108dd8c6f0fa8930a326814df91f30"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.33d6b42d.js",
    "revision": "808ea9f2d864b4467fe90f16175227a8"
  },
  {
    "url": "assets/js/4.5d00dd71.js",
    "revision": "354b2b53903cf28623245afa41ac130d"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.19d66de0.js",
    "revision": "34e4dc8308467d77a9dc5318911ce920"
  },
  {
    "url": "assets/js/7.3906f7a7.js",
    "revision": "dbf3fe1c5b38157ad795d49e2c42bfcd"
  },
  {
    "url": "assets/js/8.d159d845.js",
    "revision": "229de9f470aa15983a689d6b1daa5fa3"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.1d3bedca.js",
    "revision": "adae4eb99f91afd3ad86dd7809ab6980"
  },
  {
    "url": "conclusion/index.html",
    "revision": "87dd922cf55a0931794c87e781699e54"
  },
  {
    "url": "design/index.html",
    "revision": "a0b93b0aaa4228a63042126f80c70730"
  },
  {
    "url": "index.html",
    "revision": "faabf83e0f858ad9e744bde9e3c9ee8b"
  },
  {
    "url": "intro/index.html",
    "revision": "4cacabd19613792e83d38d3cb5f34d3c"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "9f333cec35f0c8121ab20bb5304041d5"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "526691edd5d1816223373e533a4c6864"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "1938634af7abc7b84ac747f24c2d281e"
  },
  {
    "url": "software/index.html",
    "revision": "d42fd439df7ceebcce9e6da0e45d0dd7"
  },
  {
    "url": "test/index.html",
    "revision": "1c79fd074f2e19b570090ecde30988f3"
  },
  {
    "url": "use cases/index.html",
    "revision": "01fc2c24c70033304293a504cf164d73"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
