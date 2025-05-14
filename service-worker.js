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
    "revision": "19ab265c608d7ecbdcabfcc65404a460"
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
    "url": "assets/js/17.59ab4d34.js",
    "revision": "f7b3d4b9d67284fc4a678cc81d5aca15"
  },
  {
    "url": "assets/js/18.54ee9d9f.js",
    "revision": "508863997acad73ba7cc94612b73f52e"
  },
  {
    "url": "assets/js/19.d9264299.js",
    "revision": "69183e74e1240e02d805b0978db4dfb8"
  },
  {
    "url": "assets/js/2.54a9bd73.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.42c4faf1.js",
    "revision": "75f1b39306153fa4d8ba6b203f85b13d"
  },
  {
    "url": "assets/js/21.9da55605.js",
    "revision": "50624485171eadb84ed5db7d874257a9"
  },
  {
    "url": "assets/js/22.d8b3f687.js",
    "revision": "8da5deea1ca785e8b67e61438442f681"
  },
  {
    "url": "assets/js/23.d97aed26.js",
    "revision": "b50fe8e43f38078ad9fce2e2b7b1c514"
  },
  {
    "url": "assets/js/24.d3d5910c.js",
    "revision": "a5e8b6c481bc9f408807d1cc8c5d01c5"
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
    "url": "assets/js/app.155c3503.js",
    "revision": "c07702dd8172769cb6baf5f986c1edb1"
  },
  {
    "url": "conclusion/index.html",
    "revision": "51004d9a2a8bc5860a600feaf58da1e7"
  },
  {
    "url": "design/index.html",
    "revision": "70b96ad80fbb2fc728e80bd2fd408441"
  },
  {
    "url": "index.html",
    "revision": "21b44b558c445c47cd785ceb48ee1569"
  },
  {
    "url": "intro/index.html",
    "revision": "4d65684dbe4ca243d07d7d0ba38663a3"
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
    "revision": "46d1c1f286a374c263f64773ebf4d66e"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "186ccfbb46b6dbe37cdec78db4cf0de9"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "bd9bf7153a9e5cc75d7fd1dae7e2670f"
  },
  {
    "url": "software/index.html",
    "revision": "899751183361d87e56dcb1c48172427e"
  },
  {
    "url": "test/index.html",
    "revision": "e83c05ba1c209b83d9f3d5ed0be80408"
  },
  {
    "url": "use cases/index.html",
    "revision": "531a321de3ef533648dbb17f09a8b7b5"
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
