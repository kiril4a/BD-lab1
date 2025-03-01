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
    "revision": "8f614d5cbbf384290fab89ef63393f3b"
  },
  {
    "url": "assets/css/0.styles.5cd3ef91.css",
    "revision": "cecd7bcf0c8e22a22a9c3d8f08e58d26"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.3dcba132.js",
    "revision": "f9bdaaeb4d1ca6d9464371d49a8883a1"
  },
  {
    "url": "assets/js/11.32ba2003.js",
    "revision": "b012f550c9920cce59792eeb20924fd7"
  },
  {
    "url": "assets/js/12.c2dc366c.js",
    "revision": "84d03d74c8749c77170ec3c649a32ddd"
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
    "url": "assets/js/15.a2aa8302.js",
    "revision": "b3505bb962045112eda8d5aa1d27368e"
  },
  {
    "url": "assets/js/16.9ad73624.js",
    "revision": "7c1d6af6d09d7310b9e4244ddd2518d1"
  },
  {
    "url": "assets/js/17.f829100a.js",
    "revision": "8dceb00f63fb206ccfb8c7c505caca82"
  },
  {
    "url": "assets/js/18.99a1a74a.js",
    "revision": "cecff9564506ed950ee076259a1a6054"
  },
  {
    "url": "assets/js/19.aebefa05.js",
    "revision": "61a0efe9ad2a0b831e70315ea4cae3ba"
  },
  {
    "url": "assets/js/2.51984132.js",
    "revision": "613eef12571b272390e4d84a5a7700fd"
  },
  {
    "url": "assets/js/20.cbc90e6f.js",
    "revision": "48f567cb7ca68f3df15344e35cbc6811"
  },
  {
    "url": "assets/js/21.693e9685.js",
    "revision": "705c4e25f686bce6f59444a73ea73225"
  },
  {
    "url": "assets/js/22.79b3738a.js",
    "revision": "6c24ff5badb20dd62f0d25124765f5f5"
  },
  {
    "url": "assets/js/23.418bb3fe.js",
    "revision": "89d101ad293c12b093f671eff310e158"
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
    "url": "assets/js/3.4ed45971.js",
    "revision": "b16159aab039353619946e13967d38e4"
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
    "url": "assets/js/8.e8761b22.js",
    "revision": "df02b8b825d5757e125dbe170d1555c1"
  },
  {
    "url": "assets/js/9.c0a843c2.js",
    "revision": "6fdef7e064583d735d435c9c7be58314"
  },
  {
    "url": "assets/js/app.1eb64e2b.js",
    "revision": "f27e4526e97d38569c717062b3e11c7b"
  },
  {
    "url": "conclusion/index.html",
    "revision": "b825a79b7eb2d4758c5559301d85454c"
  },
  {
    "url": "design/index.html",
    "revision": "1ceed23996ab52db40ef4eb8d49a8319"
  },
  {
    "url": "index.html",
    "revision": "ae5e450273bd2748ed6497edbefa2a4f"
  },
  {
    "url": "intro/index.html",
    "revision": "38056a4ff5939b88857ee47bf5cf1aa9"
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
    "revision": "d2213cbd65554b6e9066e0772503a215"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "445127ca547939ab85070b64edfb7c8a"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "e0874e8428c258fe71a9c482a623d67e"
  },
  {
    "url": "software/index.html",
    "revision": "fc53f7d8fb8ebbcb071b6c97db4e1db3"
  },
  {
    "url": "test/index.html",
    "revision": "9c7fd9350fe58aa23bdd33974ea49694"
  },
  {
    "url": "use cases/index.html",
    "revision": "26dd0cd56f00f1bbbef80fd5ca8872fd"
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
