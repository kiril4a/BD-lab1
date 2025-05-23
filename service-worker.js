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
    "revision": "40d3de211dcaaba16abf4dbe3a2e0ce9"
  },
  {
    "url": "assets/css/0.styles.47a4c438.css",
    "revision": "d68980e3fdd46117c3619af81bfbbea5"
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
    "url": "assets/js/14.4fd45c58.js",
    "revision": "2826a1bfcbbdf9810af87b4f633a8390"
  },
  {
    "url": "assets/js/15.3d14216c.js",
    "revision": "4a4bd5ac7a96af836c27a26757ae9174"
  },
  {
    "url": "assets/js/16.6a73ab67.js",
    "revision": "039a459ce7877806245e67226e4a6dcc"
  },
  {
    "url": "assets/js/17.437ee959.js",
    "revision": "0dcaa02381d57af9e52a4de481489d25"
  },
  {
    "url": "assets/js/18.2c392867.js",
    "revision": "c422e8fc95e575c2533178de81aacd82"
  },
  {
    "url": "assets/js/19.4a80171f.js",
    "revision": "2af13fcbc6726e6464ac3a89b6b15319"
  },
  {
    "url": "assets/js/2.2924903d.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.dd700f3d.js",
    "revision": "446209702d681d6c821ae2d9f28c97ee"
  },
  {
    "url": "assets/js/21.2870bef4.js",
    "revision": "124745b6d219cf7044ecf258e6abc5a7"
  },
  {
    "url": "assets/js/22.4619b9b1.js",
    "revision": "c873d16b0123d75ceda432e42fe90759"
  },
  {
    "url": "assets/js/23.f0558f34.js",
    "revision": "557a61b5802067569f4f34855efb869b"
  },
  {
    "url": "assets/js/24.3bebba33.js",
    "revision": "2ff777e49ea646f9bcdd615ea76c02a2"
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
    "url": "assets/js/5.659aa560.js",
    "revision": "1e64aadea8db82000000ca9b866cb5ff"
  },
  {
    "url": "assets/js/6.73f22f79.js",
    "revision": "65c87ea66ae3b2e4b676cfecaec56395"
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
    "url": "assets/js/app.bc0188e3.js",
    "revision": "1bb9385156affb5c069bab14f540686c"
  },
  {
    "url": "conclusion/index.html",
    "revision": "26b11452de93a65ce1f38601593a12cb"
  },
  {
    "url": "design/index.html",
    "revision": "b0a08c0d9d58fc1ee7ec60293bc6b90b"
  },
  {
    "url": "index.html",
    "revision": "4da709e301e72cc3a7167e30135ff720"
  },
  {
    "url": "intro/index.html",
    "revision": "b6f6852251b3911471440d6a705a71f3"
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
    "revision": "2dc2333ee7eae18e704ebe0a2e7c0b83"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0df360293fe4b9e42c72a0bb54846271"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "bb84436bf47ea732dd4cb89b4903e9d3"
  },
  {
    "url": "software/index.html",
    "revision": "385a6dcb184af63f9a85f57691fa4013"
  },
  {
    "url": "test/index.html",
    "revision": "c1997af6cca549357213f9a5026abc07"
  },
  {
    "url": "use cases/index.html",
    "revision": "4ca91dd1825b4b704eb9bdd8d2248cbe"
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
