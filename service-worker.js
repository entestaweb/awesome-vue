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
    "revision": "2de54bb87d4415d211138b2c3fcc98dc"
  },
  {
    "url": "assets/css/0.styles.b5ca89be.css",
    "revision": "660866d5be8d119659a303b9e781c0ff"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f5acf819.js",
    "revision": "b723328d23ef660d65709ea81ea58aaf"
  },
  {
    "url": "assets/js/11.4c858ec3.js",
    "revision": "38c6284f1589812e972945feec0c582d"
  },
  {
    "url": "assets/js/12.77e5ca61.js",
    "revision": "77686be68a0e181b05e0c4bdb3d47915"
  },
  {
    "url": "assets/js/13.6bb4fd3d.js",
    "revision": "143da442243cca78a7311aea7b7008d2"
  },
  {
    "url": "assets/js/14.dd0144db.js",
    "revision": "8de96e389a75a9ce00d57917285f7b52"
  },
  {
    "url": "assets/js/15.e17b0a09.js",
    "revision": "630b4731713e75c1053de46222ad3a76"
  },
  {
    "url": "assets/js/16.4b3c2cc4.js",
    "revision": "4f5d06ac2ff7643c74d94ff14d741d63"
  },
  {
    "url": "assets/js/17.61e9e79a.js",
    "revision": "a56665b82a9471e61b0ee63e166e5f9c"
  },
  {
    "url": "assets/js/18.77e9a545.js",
    "revision": "a3243c85aa1dffbddc3716edcf0b24e6"
  },
  {
    "url": "assets/js/19.d39ea1f4.js",
    "revision": "ef025501bc8001a15fc30479681a96cd"
  },
  {
    "url": "assets/js/20.b9ead533.js",
    "revision": "0e02d3f77f373c945e39b534eb3582c0"
  },
  {
    "url": "assets/js/21.16160283.js",
    "revision": "985890d12da6225699ea7f4c1835966e"
  },
  {
    "url": "assets/js/22.3a651f9b.js",
    "revision": "fd4bb42d920b91b4eab3f820f18587f8"
  },
  {
    "url": "assets/js/23.59d9a95d.js",
    "revision": "95fd4fe04ee7dbd93714f563bbc1999d"
  },
  {
    "url": "assets/js/24.78e73681.js",
    "revision": "df3845d6a6df28740860b7c93a147adc"
  },
  {
    "url": "assets/js/25.2c8ad6da.js",
    "revision": "3ad1802f917c980ee2e76f7880a8daff"
  },
  {
    "url": "assets/js/26.394fcb2e.js",
    "revision": "f15ab776704597991f1c8d57302cc56a"
  },
  {
    "url": "assets/js/27.c159f817.js",
    "revision": "a3b0b4534077e7bb922017d60c2f9755"
  },
  {
    "url": "assets/js/28.417fdf14.js",
    "revision": "46790743e31db0d2068d9b4b802bd83f"
  },
  {
    "url": "assets/js/29.d24ab1d5.js",
    "revision": "eab23dbbea0165d57ff9c4a6b3bb3406"
  },
  {
    "url": "assets/js/3.42affd03.js",
    "revision": "1853167e4a9a90ec2dc6debcda51a3ed"
  },
  {
    "url": "assets/js/30.66c49bee.js",
    "revision": "042ebb7761baa492357bb436dac3f04f"
  },
  {
    "url": "assets/js/31.22517a49.js",
    "revision": "47363f6717950a72e6acf5d117f752e0"
  },
  {
    "url": "assets/js/32.b9471b4a.js",
    "revision": "108c4cd19d1c2d5ae88a0311aeebd051"
  },
  {
    "url": "assets/js/33.7bbb69dd.js",
    "revision": "d86fc643960a1833b2075875bd4d9a98"
  },
  {
    "url": "assets/js/34.578e0018.js",
    "revision": "e9f02c5d861bd9e2d794883864f4559d"
  },
  {
    "url": "assets/js/35.a65059f6.js",
    "revision": "95f30e1b1cd04d9d2af486f82f4c892b"
  },
  {
    "url": "assets/js/36.29a26fbd.js",
    "revision": "f3f84e7fd489efb49e6ac49612a5ea47"
  },
  {
    "url": "assets/js/37.c6a904aa.js",
    "revision": "307a5c8976fcbaa14253ee81b84a1f67"
  },
  {
    "url": "assets/js/38.b97b0d29.js",
    "revision": "bc05ca3632a7f14ad19ae0f3c9bb5475"
  },
  {
    "url": "assets/js/39.7d0fc5bb.js",
    "revision": "9ac52235d4bf27cce7fb2ef4298d4ad0"
  },
  {
    "url": "assets/js/4.d2aff14e.js",
    "revision": "69ec6144b728770f087f80ef13ab04ce"
  },
  {
    "url": "assets/js/40.999411b0.js",
    "revision": "3906a8bde0a92266906ab83964e1d9dc"
  },
  {
    "url": "assets/js/41.701dcf7c.js",
    "revision": "60771a0a486109f571665ba9f0705a6b"
  },
  {
    "url": "assets/js/5.c9c974b0.js",
    "revision": "e5646895acd2411c063c24206260a86c"
  },
  {
    "url": "assets/js/6.66f71e0a.js",
    "revision": "7c6368ef1806ef4c28c2d517312560a4"
  },
  {
    "url": "assets/js/7.a75b8424.js",
    "revision": "9c170d8796f46ed8eb8b173af9b873ba"
  },
  {
    "url": "assets/js/8.84a4c639.js",
    "revision": "a3ce42444f8805f2a63e9fbf63f17226"
  },
  {
    "url": "assets/js/9.00c0f2c4.js",
    "revision": "fd2e2049d42065c8b06addcc52b1eb79"
  },
  {
    "url": "assets/js/app.aa0276f7.js",
    "revision": "5b532eabd9ab44698b785a1ba072d8ff"
  },
  {
    "url": "assets/js/vendors~docsearch.7cf4bc01.js",
    "revision": "807a6473a0eeb74b0a0da095c4604b89"
  },
  {
    "url": "components-and-libraries/dev-tools.html",
    "revision": "96374d93df27614c5aa2faca7879b442"
  },
  {
    "url": "components-and-libraries/frameworks.html",
    "revision": "0c2877b3f5bbcc75c6be1a3c8b351fc2"
  },
  {
    "url": "components-and-libraries/integrations.html",
    "revision": "32f6121d55e67aae1d20f0a90ce7d595"
  },
  {
    "url": "components-and-libraries/prerendering.html",
    "revision": "963af899d8447aa81aa20a3d58b6b573"
  },
  {
    "url": "components-and-libraries/runtime.html",
    "revision": "f178048cd2924760d3e759a9b27db202"
  },
  {
    "url": "components-and-libraries/scaffold.html",
    "revision": "7500dbebfb46b71f44dee6a9ec6bc740"
  },
  {
    "url": "components-and-libraries/ui-components.html",
    "revision": "88937acdda4f89b147de64b50cd7d882"
  },
  {
    "url": "components-and-libraries/ui-layout.html",
    "revision": "a75fdda548ccc4fb1da3b6a30212ccdf"
  },
  {
    "url": "components-and-libraries/ui-utilities.html",
    "revision": "70ccc7070d83848474abef62907109bf"
  },
  {
    "url": "components-and-libraries/utilities.html",
    "revision": "9a3516ecd7062b994b7768903c32a632"
  },
  {
    "url": "googleb0cb4a6e76619924.html",
    "revision": "997b21b41e019120a987acc0a2de5a22"
  },
  {
    "url": "hero.png",
    "revision": "b0451959428f1596d579dd0a4165e5b9"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "18bd5130d1d2c560f7a64a810f10b567"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "ca0e5ccce3e6597c6a92389767d386f2"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "a0a146811db506577fc59becb1e9df8a"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "eaad287782a03fec4918c03df6f2b1d3"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "81480ca682e35a952f4d63bea5471718"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "200d639632824824997b3658a17ae3ad"
  },
  {
    "url": "index.html",
    "revision": "7e1fc9bb18f016cb64031cc52f6881e3"
  },
  {
    "url": "logo.png",
    "revision": "98aeae0d5ebd6cea4b44a7c3c3f55d61"
  },
  {
    "url": "projects-using-vue-js/a11y.html",
    "revision": "c0dfe8bf8eef13fb5325194643808ebe"
  },
  {
    "url": "projects-using-vue-js/apps-websites.html",
    "revision": "be80f913929f7d3b3ea78cfaaa3a38e1"
  },
  {
    "url": "projects-using-vue-js/commercial-products.html",
    "revision": "0254df75d041a0587c993de0715fd775"
  },
  {
    "url": "projects-using-vue-js/enterprise-usage.html",
    "revision": "a060cf4367d557e08a655dc74ebf0a82"
  },
  {
    "url": "projects-using-vue-js/interactive-experiences.html",
    "revision": "abc095da097fa1bb356aaaab9d97e0d7"
  },
  {
    "url": "projects-using-vue-js/open-source.html",
    "revision": "72deefbc2bf4f92962c50f79f69bafc0"
  },
  {
    "url": "resources/blog-posts.html",
    "revision": "3481ec3f5c6318e64c4dc7c228ea7a30"
  },
  {
    "url": "resources/books.html",
    "revision": "a98a098245854b8586a38f70192f029a"
  },
  {
    "url": "resources/community.html",
    "revision": "fcd574e010fe2ca40759c1589cad0d80"
  },
  {
    "url": "resources/conferences.html",
    "revision": "d62fb9df339655afcf728c07c8da2776"
  },
  {
    "url": "resources/courses.html",
    "revision": "074df6de7ba53e81a03dd89b46ed0b45"
  },
  {
    "url": "resources/documentaries.html",
    "revision": "50734e5854b223a31ff34b53106bc966"
  },
  {
    "url": "resources/examples.html",
    "revision": "4019805466bb031908996a581cc303c0"
  },
  {
    "url": "resources/external-resources.html",
    "revision": "94f1005ed145af19f2ac25a5febfe012"
  },
  {
    "url": "resources/job-portal.html",
    "revision": "78c8105dabe5ddc5f1f74b4322ca4b59"
  },
  {
    "url": "resources/official-examples.html",
    "revision": "f463076f0bb94526002083ce90941118"
  },
  {
    "url": "resources/official-resources.html",
    "revision": "7c3040191cc57cd1764ba5993cb32a68"
  },
  {
    "url": "resources/podcasts.html",
    "revision": "aee9c909eb4913a6411db659422d9b2c"
  },
  {
    "url": "resources/tutorials.html",
    "revision": "6449dadde947d31f774dc1ca40e59215"
  },
  {
    "url": "resources/youtube-channels.html",
    "revision": "d9dade4a6d768cbcc789d2aa3e318592"
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
