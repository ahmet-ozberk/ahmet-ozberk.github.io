'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "520f99ccde46adf51ba6e15095ba801e",
"version.json": "1cbc8fb9ac78cc7f9b0ffc3f0b79def6",
"index.html": "aa491efee4a463112e5e3849ea24c389",
"/": "aa491efee4a463112e5e3849ea24c389",
"main.dart.js": "2218fb00cd31bcecdde00514b4a127b8",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"favicon.png": "97741383e562b216a0e30d90bebbc9af",
"icons/android-chrome-192x192.png": "7bf89c95734a41f0627c1a90f8df9dfe",
"icons/android-chrome-512x512.png": "abe03fbb0f0885a251f9b3b2648e7e94",
"manifest.json": "f90077f342013609d59808458896eca9",
".git/config": "7d089db9b3c1ae205a090aec6b05b545",
".git/objects/59/849c127a0718244ada5115e918410765d6347b": "269d8aff16bb2f5088cc9126a0fbb82c",
".git/objects/92/65271423f84461d77884d2951fb8bc3d1fd82a": "b19ea62170f08eea8d0867d33c16947d",
".git/objects/50/12e6c1cae8f8e4598f0edeee26c675d6167d32": "884bebb20d0b34776794aa5b22f94bff",
".git/objects/9e/86ded5a890ddabf7d5e476a6f376e6c5a1d0ad": "3c29776e51a64bb4dcb2a02ee03d1fc3",
".git/objects/35/9cab337ae1b0fad3ab5cc4f55fe3348e9f0480": "053c16f3b6dc17b2bfba9767d13792ea",
".git/objects/69/1bf432045b73fec4779019ffc51fde02a68417": "44a01970aecbc02f9aa2536206e51626",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/34/cd8f29b17550f0dc8c4f3d3691324e623cb85b": "165fc7c960affe312d3584962aacf0b5",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/b4/a3ecb9428e2a4b8aff40c099e1c27d64a928f0": "6e4bc29289eb6be950713f1b329eaf0d",
".git/objects/bd/8a9ae8c8ad9254560d71f22ea64fcec7c1905b": "da699703309791d3b92e4d911bcf03f9",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d8/45eaf82276164645b2a78f133c1f0822af0d1c": "284b3733dce5269f71fff9d55ac709a2",
".git/objects/e5/b5a476d9cb9304bc412385f0988413fd6f8851": "81e011ff45ab9b854bfb76a89ff1ab65",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/eb/635fedd9dedcf4600a42f90236723888dd4c5d": "620800fd06ccff90f13f01d4b791a2dc",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/459001596b666f57337318f20f4bcfb21559bf": "e282e5e354494ddcd944c9ba37d8b20e",
".git/objects/e3/754f8bfb69d3272062fee000aeea75fe870333": "58cebeea04f44c097c2c0415c5d4a446",
".git/objects/20/e6c55cb17bbeae5e212a7c154a06ce759c5232": "86c6e1aaed6a775ce4f7f1dacd703092",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/16/5db34ea932911990db6f2d2b85008fc3880d21": "220b3016798c49d0bcbf9d2dc9c1975b",
".git/objects/42/8de8cca27d57ad17fa8ed94bab2161a2c8d22a": "3e92c6b06114886daedefffada10eccc",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/2f/0f09945789b61de6c63b710be31e352f0fd1eb": "ba248db713426979f05ca91059ae3b47",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/09/4bb6ae24f0cd847d40cb4cc4a2434f2ec9b83b": "b9e6d850322c11db635bcf0a45b762ff",
".git/objects/5e/1fd549306e47e2f0cdc7947d666e9669a79d27": "e2614cf849ca1805d79e1f8294dede83",
".git/objects/37/e11dd7760051c57e8ed0342ecce2410475bdf9": "fe80320d42d47e2131193dced530f7ca",
".git/objects/37/be5c6056beacabadc8c1a072a1312178bbd108": "aae0e15969d7ab67b872edffb37bcfe7",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/0e9752e099f681b36bfddec3239449d493db2c": "a6fa21fbae7e6fb427cbd1bcdf0dce68",
".git/objects/dc/30cc03cabb1f6fc5f548c3fb5ebf3bab03bcab": "5114909039cf2a94a45f872701c0fc2e",
".git/objects/aa/4c5103c3dd5c6375655acd06678a8b1d108e9b": "df4ce7268ea9b566f2898421fd94f09d",
".git/objects/af/1091293fbf5368c22815dd739880d4f6649c10": "7f84c0cc7b0f2f4a58e902b6f6f93953",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b0/cee7d71e04bd385a7cb152f7658f6fe69135db": "f00eb78ebab8b744704d90a93d8c3656",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ef/7f4f617d1afd403b05e32f0908efa957ef5407": "fa99ce9454a6c24433d98be60be19bdf",
".git/objects/cc/1a39370f68120ab1bb0d674b61cca39ef36c05": "e3db1007c54c40a8db7bf5e131f0e4bd",
".git/objects/f9/af1f5f24e16dc876d5161785058cc801212508": "61e6e5cbca1c31d3561488496510c9e3",
".git/objects/41/de173d9014b38f8290acf270c490b37fc79a60": "d2a9d01215e9d65fd0456ded49e98878",
".git/objects/4a/7374c586b9619c4fee501ffde4af651d02b32e": "b343dbd8ea839ddf9ef22d068167b121",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/49/5d54b6de60a10ff12ca237e87c1bb0233e25df": "a15da7095f50ed9dd668b8ea582d86e2",
".git/objects/7f/8ed419e36665bc9feb8cd4da4a598a562d2108": "495e545d1774eb3012977f89473c68aa",
".git/objects/22/b35264a365a377d27ac18fe2460fe34b5f2ee4": "4bfbd9b7cf083724f48e40b8ff630cb9",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "5873ec0b55502137ec7ed7760a87e644",
".git/logs/refs/heads/master": "5873ec0b55502137ec7ed7760a87e644",
".git/logs/refs/remotes/origin/master": "f646c1cabbc37daafd63e565bd7762d2",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "e596df9ee88908bf2796f108eebe3e42",
".git/refs/remotes/origin/master": "e596df9ee88908bf2796f108eebe3e42",
".git/index": "0a6e5aa65e4c425e9873485b49471a68",
".git/COMMIT_EDITMSG": "b0a52ce88b5f28c4c4e29b2cd7d18d81",
"assets/AssetManifest.json": "700979f39cde7593c001fbbe4bbe7e71",
"assets/NOTICES": "7e6b4326913c3ad6eb151d09aab67d07",
"assets/FontManifest.json": "a8a48f692aca18cc19be901fe91b3bfb",
"assets/AssetManifest.bin.json": "0bf6a35a02f0a0e60ca599ac060736ee",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "928efcf87bed6a86e33f26c22374b41b",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "d166ea93cb384f18b40979e838361463",
"assets/packages/fluent_ui/fonts/FluentIcons.ttf": "f3c4f09a37ace3246250ff7142da5cdd",
"assets/packages/fluent_ui/assets/AcrylicNoise.png": "81f27726c45346351eca125bd062e9a7",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "c32a66a0ed56bad68f6d0d5be545317c",
"assets/fonts/MaterialIcons-Regular.otf": "4211842c10b041ae669a3943376a383d",
"assets/assets/images/my_photo.JPG": "6d48b81f480479a5b0d83f1e1c3dbd0f",
"assets/assets/images/programming.jpg": "199eea88143b2200fd4537590137ad2b",
"assets/assets/images/software1.jpg": "c029ef227021f1d81ac9657e6a703fb4",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
