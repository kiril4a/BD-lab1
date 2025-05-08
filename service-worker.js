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
    "revision": "955f2500b2f67884294e3588af1401b3"
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
    "url": "assets/js/14.d7f079b2.js",
    "revision": "6b809a93916ba8b3fde674d26eee6270"
  },
  {
    "url": "assets/js/15.b5aa463f.js",
    "revision": "830c76fb3840a1cef3aaa84985c33ebd"
  },
  {
    "url": "assets/js/16.dffafc6e.js",
    "revision": "66288023d3f372ac464317221849fab3"
  },
  {
    "url": "assets/js/17.fc66b8a7.js",
    "revision": "d2360c1b334b4b378ffe6902d23adc1c"
  },
  {
    "url": "assets/js/18.5901e1d4.js",
    "revision": "73f50f17f81641c6383721d2e7e3d8e1"
  },
  {
    "url": "assets/js/19.aebefa05.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.54a9bd73.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.adc3f645.js",
    "revision": "b762a04ab32c474f826fda1f9616ab6c"
  },
  {
    "url": "assets/js/21.627b843c.js",
    "revision": "cae8d8f6d0b26cc2687ed48a30ed2cf9"
  },
  {
    "url": "assets/js/22.8ccf43fb.js",
    "revision": "e44241768de2e77635ecca88a60d3c0a"
  },
  {
    "url": "assets/js/23.9c9cf32f.js",
    "revision": "ababb98b2fce59099380a5d4ca80a377"
  },
  {
    "url": "assets/js/24.bf0cc757.js",
    "revision": "d808764340cf45fa9a801bd9703b1068"
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
    "url": "assets/js/8.d159d845.js",
    "revision": "229de9f470aa15983a689d6b1daa5fa3"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.145bceb6.js",
    "revision": "be82878ab5dd6495f7a550fdc6170b36"
  },
  {
    "url": "conclusion/index.html",
    "revision": "4891587018b56ca3dcec073f4581bca9"
  },
  {
    "url": "design/index.html",
    "revision": "aa32d3823ec5b928c91824cd52425c08"
  },
  {
    "url": "index.html",
    "revision": "62b5a723589315a4f84acda7366694b3"
  },
  {
    "url": "intro/index.html",
    "revision": "7b79b308dcd0aba4e51b3f22b59395f1"
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
    "revision": "e56a0a89910b768873d22901c84a0d6a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "5f443ad706b23270a79eec6f7a513372"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "98af6298c9bae05d17952bf5340bf6d0"
  },
  {
    "url": "software/index.html",
    "revision": "ae87225226a1fbde79d70fd6b1267b51"
  },
  {
    "url": "test/index.html",
    "revision": "fbbd37e359632f4f51276533c3754ec2"
  },
  {
    "url": "use cases/index.html",
    "revision": "b81f17be0f9d9c1c0a401a1c5a2c3cb2"
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
