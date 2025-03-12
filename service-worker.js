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
    "revision": "27558161aec6eddd11c4130624e03f23"
  },
  {
    "url": "assets/css/0.styles.9e396cda.css",
    "revision": "6b5c41ac4736dabebcfac732977ec24f"
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
    "url": "assets/js/12.b0817397.js",
    "revision": "e0f335a5c1d6257f94500f97928c7e9c"
  },
  {
    "url": "assets/js/13.b369ab95.js",
    "revision": "ff30346a2ae0704d1a7791e2ab06f152"
  },
  {
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.3d14216c.js",
    "revision": "4a4bd5ac7a96af836c27a26757ae9174"
  },
  {
    "url": "assets/js/16.dffafc6e.js",
    "revision": "66288023d3f372ac464317221849fab3"
  },
  {
    "url": "assets/js/17.a9f3a62d.js",
    "revision": "d051bc2276ede0597d831397f1145a63"
  },
  {
    "url": "assets/js/18.2f6148f6.js",
    "revision": "02359cbd74ea3ea29b94ad7ce1f4886e"
  },
  {
    "url": "assets/js/19.7835ae59.js",
    "revision": "374df65b9b682f8b352e4cde19517798"
  },
  {
    "url": "assets/js/2.54a9bd73.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.1b2dbdf6.js",
    "revision": "2935305dfc9fd4ad34018c2345b20a9d"
  },
  {
    "url": "assets/js/21.9f32138c.js",
    "revision": "3e2936128fdb75c88ad7fe59866fb2dc"
  },
  {
    "url": "assets/js/22.8ccf43fb.js",
    "revision": "e44241768de2e77635ecca88a60d3c0a"
  },
  {
    "url": "assets/js/23.437cc24f.js",
    "revision": "c0737244c08a6027329a7485bdfa97f6"
  },
  {
    "url": "assets/js/24.9364b685.js",
    "revision": "af5db62e23211f378001e561508a9cc3"
  },
  {
    "url": "assets/js/26.2b7d224e.js",
    "revision": "d09140fd6d4af5d21412c1e04e0338bb"
  },
  {
    "url": "assets/js/3.00609641.js",
    "revision": "813426e1ee432965547b39ddaa742a1a"
  },
  {
    "url": "assets/js/4.bd435e1c.js",
    "revision": "dabd9a22a91b6a2446e4e8d4672692b5"
  },
  {
    "url": "assets/js/5.4b8fb81c.js",
    "revision": "b865b25b78848b369ebb4f7a7684bf5b"
  },
  {
    "url": "assets/js/6.37f402c4.js",
    "revision": "43bdcf1e529c99fca1e216d96833b9ee"
  },
  {
    "url": "assets/js/7.a2994458.js",
    "revision": "817c1a9fc1e6f84583934d814a9ab3f5"
  },
  {
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.3fdac49d.js",
    "revision": "0fc838dd3dcc0d9a05388806d2730190"
  },
  {
    "url": "conclusion/index.html",
    "revision": "95d28df642b5b26064afe4e0beac3bf4"
  },
  {
    "url": "design/index.html",
    "revision": "6224f1fd40c8c59aa1ec4b6a40b89a80"
  },
  {
    "url": "index.html",
    "revision": "3c90b6c2e24f892d83ca52458a0b610a"
  },
  {
    "url": "intro/index.html",
    "revision": "8407f2ac6e83e2707b84863d808b3872"
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
    "revision": "dc8cae82239e9afbbeb20ceb97dce3a6"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "c71ff0079a2fe59aed2a06f69ece9596"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "8b7e417883942690e4f0314a3d7a739e"
  },
  {
    "url": "software/index.html",
    "revision": "0f12ebd2550e8607cadcf9bfebe0449e"
  },
  {
    "url": "test/index.html",
    "revision": "99fe9c64547ae3a59bb766455cdc78b8"
  },
  {
    "url": "use cases/index.html",
    "revision": "293cad4dfb8ae10a09d484d49f46af30"
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
