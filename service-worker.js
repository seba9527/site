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
    "revision": "9367389c8103f5487f2d5d346a6459f0"
  },
  {
    "url": "about.html",
    "revision": "8ab99ffd88be8b31bfd4a21e2506e07b"
  },
  {
    "url": "assets/css/0.styles.d4ca98c4.css",
    "revision": "af58a894fdf4e61ca27796be0ce1bd67"
  },
  {
    "url": "assets/img/1496473220837.4b30be53.png",
    "revision": "4b30be53c0696b22db832c9948f69d8e"
  },
  {
    "url": "assets/img/271650059007975.51115034.jpg",
    "revision": "5111503436477f007e61d724b6b09aa1"
  },
  {
    "url": "assets/img/4.bc641973.png",
    "revision": "bc64197323af3a78b7fb52a5691974b1"
  },
  {
    "url": "assets/img/5.3ace77dd.png",
    "revision": "3ace77dde11518424562b9c5d72726e5"
  },
  {
    "url": "assets/img/6.d46402f1.png",
    "revision": "d46402f17d9be7d6fa964c39e4d670f2"
  },
  {
    "url": "assets/img/brk&mmap.98731ae7.png",
    "revision": "98731ae7789f055e2a1e97cd1f79104d"
  },
  {
    "url": "assets/img/brop_plt.e1e62cf2.png",
    "revision": "e1e62cf28e69b2f3c01937d525134614"
  },
  {
    "url": "assets/img/got.92dad8d9.png",
    "revision": "92dad8d9c498fc858a57233219146ad4"
  },
  {
    "url": "assets/img/home-bg.8e509a21.jpg",
    "revision": "8e509a21c7af5d61f2ff4895ef09c727"
  },
  {
    "url": "assets/img/iconfont.117d8006.svg",
    "revision": "117d8006a3c478fbc8c4ce04a36ddb5a"
  },
  {
    "url": "assets/img/lazy-plt.38d2d4f2.png",
    "revision": "38d2d4f2b840ddf5d958d9228d51d671"
  },
  {
    "url": "assets/img/linuxFlexibleAddressSpaceLayout.42cc258e.png",
    "revision": "42cc258ed8f95bd23e7ed64aa02f8da0"
  },
  {
    "url": "assets/img/object_file_format.eb3a4a01.png",
    "revision": "eb3a4a01acaa3314590dde0efe89a1f1"
  },
  {
    "url": "assets/img/program_virtual_address_memory_space.0c7c5763.png",
    "revision": "0c7c5763849319838b13be5ff490691b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/Snipaste_2018-01-14_22-48-08.b991784c.png",
    "revision": "b991784cd8d54e209935be0c312d883e"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_10-14-02.e6992a18.png",
    "revision": "e6992a18852a1b254a4a924150ab5677"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_10-21-33.f60c183c.png",
    "revision": "f60c183c56761d7b54a6c35c1cff2401"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_10-30-50.0304ca9c.png",
    "revision": "0304ca9c5a1f6ba50e1d93cc78079d00"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_10-52-53.319023bc.png",
    "revision": "319023bc07df2c8b7df169d2f1c41bac"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_11-02-52.9d68c369.png",
    "revision": "9d68c36943029b240c0469123efe46cc"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_11-28-17.e1d9e42f.png",
    "revision": "e1d9e42f309d3e36a54d671e47f132e1"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_12-35-13.b7c5bf84.png",
    "revision": "b7c5bf841689917083b59939d8f25fc7"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_12-35-38.9e5b35f2.png",
    "revision": "9e5b35f2be1b3758dbe63318f7434454"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_13-38-49.51601bc3.png",
    "revision": "51601bc3b230684bdf42e65e4a330669"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_16-07-52.7af023da.png",
    "revision": "7af023daf968abd8b75f830f6cc1e3f7"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_16-13-20.04eaf371.png",
    "revision": "04eaf371aa22c75e70507b7cd80ca1cb"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_16-37-39.966d8f5a.png",
    "revision": "966d8f5a959576ade3e3d61eef42dc50"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_16-42-45.47922db5.png",
    "revision": "47922db5f38f8fb58e73b03208b5e1f0"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_16-59-20.3b175111.png",
    "revision": "3b17511182b549e912f793524491c9a1"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_17-03-13.ff8164ee.png",
    "revision": "ff8164ee32d169305e057d708d98f7c3"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_17-54-06.6edb627e.png",
    "revision": "6edb627e5fe6104d018769917c500d78"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_17-56-06.9302de29.png",
    "revision": "9302de29d2b7e999065720329126f637"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_17-58-26.cd2d2720.png",
    "revision": "cd2d27206d59ff0f3bb61439a83072a6"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_18-22-26.54a507fa.png",
    "revision": "54a507fa745d0ccd50568ad3ea060917"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_18-30-49.e24234dc.png",
    "revision": "e24234dc8393d6f344366e990157f8f7"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_18-53-20.d8cc1987.png",
    "revision": "d8cc1987a6258cf46a71f0aea75aba86"
  },
  {
    "url": "assets/img/Snipaste_2018-01-15_18-54-24.a8706886.png",
    "revision": "a87068867075c47b7d10f9f7e9bb9fce"
  },
  {
    "url": "assets/img/Snipaste_2018-03-20_15-06-05.014fc464.png",
    "revision": "014fc4641769184ac4358f31f0f539c8"
  },
  {
    "url": "assets/img/Snipaste_2018-03-28_11-10-58.bf638b56.png",
    "revision": "bf638b56350fe21c159081de625c66ee"
  },
  {
    "url": "assets/img/Snipaste_2018-03-28_11-45-11.6587830d.png",
    "revision": "6587830d57fd7d29f66ecd1d003b19a0"
  },
  {
    "url": "assets/img/Snipaste_2018-03-28_12-15-43.b87eb2a1.png",
    "revision": "b87eb2a1f867bfb3ee858fd2a03d6114"
  },
  {
    "url": "assets/img/Snipaste_2018-03-28_12-25-55.83083d2f.png",
    "revision": "83083d2f1543833e4f13a20892f135ee"
  },
  {
    "url": "assets/img/Snipaste_2018-03-28_12-49-59.e4b6e153.png",
    "revision": "e4b6e153c6328fefb42cd8b102cde77a"
  },
  {
    "url": "assets/img/Snipaste_2018-03-28_13-08-03.5fa5990d.png",
    "revision": "5fa5990d45f256e6094636bf13e7db46"
  },
  {
    "url": "assets/img/Snipaste_2018-03-29_20-44-09.fb68303b.png",
    "revision": "fb68303b1f861d1116e3b1aa161d8941"
  },
  {
    "url": "assets/img/Snipaste_2018-03-29_21-46-57.d4ec5af9.png",
    "revision": "d4ec5af9b383bdf7fd3d97605268dcc1"
  },
  {
    "url": "assets/img/Snipaste_2018-03-29_21-57-29.51882596.png",
    "revision": "518825963b3f8214157b1654eb95a06a"
  },
  {
    "url": "assets/img/Snipaste_2018-03-30_13-23-42.28596c4f.png",
    "revision": "28596c4fa1a8c0a3942fdf8d15b2e0de"
  },
  {
    "url": "assets/img/Snipaste_2018-03-30_22-49-27.477584d7.png",
    "revision": "477584d789a8e7ad5adbf688d254f708"
  },
  {
    "url": "assets/img/Snipaste_2018-04-03_20-06-21.f711a8c1.png",
    "revision": "f711a8c17390c345263109da149926d3"
  },
  {
    "url": "assets/img/Snipaste_2018-04-15_11-43-36.8aa99c8b.png",
    "revision": "8aa99c8bab89776860980c271c4dc224"
  },
  {
    "url": "assets/img/Snipaste_2018-04-15_11-52-37.013ed044.png",
    "revision": "013ed04460a16f7daa1dd43674a8c603"
  },
  {
    "url": "assets/img/Snipaste_2018-04-15_12-09-37.16c8992c.png",
    "revision": "16c8992c7ea71f409f48426a9b00fe61"
  },
  {
    "url": "assets/img/Snipaste_2018-04-15_12-37-46.4b035274.png",
    "revision": "4b035274f09a53c0e3c8964061ac2d99"
  },
  {
    "url": "assets/img/Snipaste_2018-04-15_13-57-48.eb10dab3.png",
    "revision": "eb10dab3dc69989ae1c8e8bd9075d2da"
  },
  {
    "url": "assets/img/Snipaste_2018-04-15_13-59-28.4489de19.png",
    "revision": "4489de1929292653afcd157ea40fb5e4"
  },
  {
    "url": "assets/img/Snipaste_2018-04-15_14-07-27.f391e4f6.png",
    "revision": "f391e4f6b63be3999dc35df771374aad"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_14-06-40.663036fb.png",
    "revision": "663036fbb895dde192d8a66614a3eeb7"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_14-25-46.b1a59a0d.png",
    "revision": "b1a59a0da9bf0a40f3690be9f01d24bd"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_14-26-31.1a1f28a6.png",
    "revision": "1a1f28a63a1c15af493021b3c7d269d9"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_14-33-06.55f70506.png",
    "revision": "55f70506676e50dfafc6a83699a3fce4"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_14-54-44.87d479e9.png",
    "revision": "87d479e9eaa9fe03d35db11888fbaab8"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_14-56-46.37a81080.png",
    "revision": "37a81080403c4dcbe96983d9b58d1299"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_15-01-54.d6389660.png",
    "revision": "d6389660d44020e0dae2bf79e36d4b86"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_15-15-51.dc201a65.png",
    "revision": "dc201a65135a350e297f6b8dff154fb0"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_15-25-17.4db3074b.png",
    "revision": "4db3074bb65b2e57c4f458a41a317986"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_15-31-07.208b512c.png",
    "revision": "208b512c0003fa3b7f995b9e14f24adf"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_15-43-21.e865ec0b.png",
    "revision": "e865ec0b2b7b352b7fc1d9b05b07622c"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_15-57-00.8f03336e.png",
    "revision": "8f03336ea623a107faf2e046645a7cad"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_16-05-26.69ad878f.png",
    "revision": "69ad878fe535bd8d70735a86544a3544"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_16-08-53.f5df8fb0.png",
    "revision": "f5df8fb02a9ce5165f20813a40d38788"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_16-18-16.b549ef0f.png",
    "revision": "b549ef0f53e408e3546fd04e0d0bf301"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_16-19-01.fc6e0ccb.png",
    "revision": "fc6e0ccb7b5c9f66c3788c879f167da4"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_16-37-44.4ced0a70.png",
    "revision": "4ced0a70d3abd7a8b4f68d9286e270df"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_16-53-53.bd05ac87.png",
    "revision": "bd05ac8714cb0f27b4994802ad1bb7bf"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_17-04-41.d57c3212.png",
    "revision": "d57c321257e32d3cb849fe3a43e7d372"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_17-11-09.0c1bbd85.png",
    "revision": "0c1bbd85ade7058e330b5c6bb55e8de9"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_17-13-15.5b9e6f39.png",
    "revision": "5b9e6f39196b7b404bc00bd7d147ce57"
  },
  {
    "url": "assets/img/Snipaste_2018-05-06_17-46-19.feeae4e0.png",
    "revision": "feeae4e020a113faa9d0f97ef7263b69"
  },
  {
    "url": "assets/img/Snipaste_2018-12-05_11-02-40.6e4d2889.png",
    "revision": "6e4d2889a0c196d4adc39931f39f6c70"
  },
  {
    "url": "assets/img/Snipaste_2018-12-11_21-08-58.1a6a0329.png",
    "revision": "1a6a03298ed32436214ad3ee68368387"
  },
  {
    "url": "assets/img/Snipaste_2018-12-11_21-13-14.beaf5027.png",
    "revision": "beaf5027a1b8de694392c1944dc213ea"
  },
  {
    "url": "assets/img/Snipaste_2018-12-11_21-15-39.f5538e2e.png",
    "revision": "f5538e2e2198bfda5e6313ff9329f88e"
  },
  {
    "url": "assets/img/Snipaste_2018-12-11_21-22-52.7c1af3d0.png",
    "revision": "7c1af3d0d962aff79398bf68abfac1f2"
  },
  {
    "url": "assets/img/Snipaste_2018-12-11_21-25-32.390e2c2f.png",
    "revision": "390e2c2fb85477131256c46ae194eb99"
  },
  {
    "url": "assets/img/Snipaste_2018-12-11_21-31-15.21c0eb2e.png",
    "revision": "21c0eb2ee7049aa5d6f792a074f06258"
  },
  {
    "url": "assets/img/Snipaste_2018-12-11_21-44-53.1c8c1a47.png",
    "revision": "1c8c1a47c7ed9c48a6d57c143097acdc"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_13-08-33.bb598ef5.png",
    "revision": "bb598ef5f93190389a4e044b750d1a76"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_13-29-12.5204cd7d.png",
    "revision": "5204cd7de07dd568e4fc2c7efc56bd73"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_13-41-18.835f9c29.png",
    "revision": "835f9c29a840327549c890e331cca77b"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_13-51-55.ee3fa419.png",
    "revision": "ee3fa41966fb1207c5d7dd7519563b02"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_15-24-50.fbc12368.png",
    "revision": "fbc12368b8036686c1b2bde4cd569fec"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_15-47-01.4de836f6.png",
    "revision": "4de836f62224a142f35451d9958091fd"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_15-50-37.a959af7f.png",
    "revision": "a959af7f3dc71627bd4e063dcc8ee6c7"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_16-14-58.f0008476.png",
    "revision": "f000847636b519832aa18fba77d384b0"
  },
  {
    "url": "assets/img/Snipaste_2018-12-12_19-31-33.2536b69c.png",
    "revision": "2536b69cdf56d20eaa764ca5d9416e46"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_16-15-46.18762728.png",
    "revision": "187627283307aa1d23f1b0fd4be12b0f"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_16-43-56.52d187a0.png",
    "revision": "52d187a05e2028a2e1573baa58fca62f"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_16-46-44.4b1ca0d9.png",
    "revision": "4b1ca0d91fc3f7f8a34a8c9a97264522"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_17-20-56.77f6228d.png",
    "revision": "77f6228d6a9e40cbc81961a4d3c1d82e"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_17-23-19.8e558de8.png",
    "revision": "8e558de83c27cf684f3c6ef3825b1160"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_17-46-11.54a52e01.png",
    "revision": "54a52e01ea2428d32c41b432488dcd8e"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_17-47-16.7b463615.png",
    "revision": "7b4636159d1f98adbb48cd7e91b460f8"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_19-06-32.c49739fa.png",
    "revision": "c49739faf0f8de24653166d30cb85da2"
  },
  {
    "url": "assets/img/Snipaste_2018-12-22_19-37-23.c9230f5d.png",
    "revision": "c9230f5d5943829d41aeb2725055829d"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_11-21-43.7d8b1bdb.png",
    "revision": "7d8b1bdb69323a94f666f0132c12f58e"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_11-37-52.70709d4b.png",
    "revision": "70709d4b76f618e6abff82464514d772"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_11-51-57.733a10c1.png",
    "revision": "733a10c1d56679911ef2432815d57b2c"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_13-03-44.51e97b66.png",
    "revision": "51e97b668570aea6c3336cb07e88a01a"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_13-11-28.0c3ffb52.png",
    "revision": "0c3ffb529730f673c212322bb1cfa5aa"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_13-26-01.c5bd9351.png",
    "revision": "c5bd935190664d01bd187d43aa462ee7"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_13-56-06.fd96e16c.png",
    "revision": "fd96e16cdaa50bd2a166bb2d97372db5"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_14-36-35.18988d32.png",
    "revision": "18988d3221366698d815d60c9e4a3a5b"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_16-01-45.b9db34e2.png",
    "revision": "b9db34e2c02e93d5aea0c28a291b0598"
  },
  {
    "url": "assets/img/Snipaste_2019-01-19_17-17-47.7c2da6d4.png",
    "revision": "7c2da6d4a8a0d34733ec69bae4b759e0"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_17-23-18.c3d38213.png",
    "revision": "c3d3821347e4402cbe80757b2b269e2d"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_17-26-14.15211353.png",
    "revision": "15211353fcbef7781ef612a54a803bd6"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_17-36-04.6c8599ef.png",
    "revision": "6c8599efc61abb9f30cf0f116fe219c3"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_17-37-51.ef0a1c26.png",
    "revision": "ef0a1c26be74bd10c11bbf288c35ce4b"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-01-15.5805259b.png",
    "revision": "5805259bc1e7fe8e78932041b05e8b5c"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-03-39.a6db6eff.png",
    "revision": "a6db6eff8a5c676b04658352aa5c4a8e"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-10-11.c3b96e30.png",
    "revision": "c3b96e306800fe874c251f57c90d16f5"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-11-59.9aca6426.png",
    "revision": "9aca6426c3605708e88ac86fb7696db4"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-14-23.c901c58d.png",
    "revision": "c901c58dbaa42159fc8cf0121fc86d83"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-16-48.8137c71f.png",
    "revision": "8137c71f08a5331bda80e029852d5027"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-43-20.9d53b65b.png",
    "revision": "9d53b65b80c529d5789405d2ec8a16c5"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-55-41.d072f77e.png",
    "revision": "d072f77e77af5ce8bcd56b1e96a622bb"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_19-57-55.6ead9ac9.png",
    "revision": "6ead9ac9bfb970d8b8d25353a08bfef1"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_20-16-37.1dc028ab.png",
    "revision": "1dc028ab1722f47f4a03f28c6ca70161"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_20-24-03.ebb3d69a.png",
    "revision": "ebb3d69ab8b8334a6c49061cd1c235bd"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_20-26-04.3d8ca8e4.png",
    "revision": "3d8ca8e4916ba58502ffbe67e269f83b"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_20-27-57.0215a6ec.png",
    "revision": "0215a6ecdd7729dbcfc45e8c9bff048e"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_20-30-33.6b2eaf09.png",
    "revision": "6b2eaf099715c262edab4ce1149a2beb"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_20-33-52.739e4ae0.png",
    "revision": "739e4ae0adb5ecc088f5168e40edf3a7"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_20-34-48.c8c83583.png",
    "revision": "c8c8358342cb49f5ea4bbff21535a273"
  },
  {
    "url": "assets/img/Snipaste_2019-01-21_21-12-40.609d4af4.png",
    "revision": "609d4af49d6744ab004db97b7b53d066"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_15-16-54.e6f30c73.png",
    "revision": "e6f30c7347f6f05c51a3f110e04c6d67"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_15-19-07.5f92263b.png",
    "revision": "5f92263b89601b7b906bd86bb4292100"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_15-31-32.5a029e67.png",
    "revision": "5a029e671f321408a2d9a43970454622"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_16-05-52.2a73f69f.png",
    "revision": "2a73f69f11e45ad9c36ba7bdeeb1e329"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_16-12-00.0facaa1c.png",
    "revision": "0facaa1c4aa6c30eeac95f798a779a06"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_16-18-35.e6633571.png",
    "revision": "e6633571e1697022e5a487f6e7564d3a"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_16-29-23.7dd32296.png",
    "revision": "7dd322969d75275fa4d0bf130ab6d614"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_16-34-36.bf2edc36.png",
    "revision": "bf2edc3633aebf3cf6110ddcc3a6a9f2"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_16-56-51.3ee47126.png",
    "revision": "3ee47126aa4e46cd3d112b4f2a92046a"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_19-56-42.d6ac6663.png",
    "revision": "d6ac66632d11b0cc31738a958128d9d2"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_20-10-24.ee4b2213.png",
    "revision": "ee4b2213ed8381d2dfc50f8319710123"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_20-19-06.a06b050a.png",
    "revision": "a06b050a20cd2ba33a5da782cd951c72"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_20-34-04.88bb0337.png",
    "revision": "88bb03373e373bea03978730b0e0577a"
  },
  {
    "url": "assets/img/Snipaste_2019-01-22_21-28-22.9456ebb4.png",
    "revision": "9456ebb4521a629edac5e7e637da450e"
  },
  {
    "url": "assets/img/Snipaste_2019-01-26_16-20-44.ff00fcea.png",
    "revision": "ff00fcea0f3c6c1e99292e0f56f9fc79"
  },
  {
    "url": "assets/img/Snipaste_2019-01-26_16-25-41.c8638e76.png",
    "revision": "c8638e76c109eea0b92e2b6b37b24a92"
  },
  {
    "url": "assets/img/Snipaste_2019-01-26_16-51-26.a9eada97.png",
    "revision": "a9eada971d70a248881ad8c4f8223c4f"
  },
  {
    "url": "assets/img/Snipaste_2019-01-26_16-58-28.8aa2b12d.png",
    "revision": "8aa2b12dd8d90aa9f1229304b6115020"
  },
  {
    "url": "assets/img/Snipaste_2019-01-26_17-11-17.c58b7ffe.png",
    "revision": "c58b7ffe4f46ced1c4e1e71ef081ab26"
  },
  {
    "url": "assets/img/Snipaste_2019-01-26_17-20-01.46bbba09.png",
    "revision": "46bbba0942d1f5335c609df469e0f597"
  },
  {
    "url": "assets/img/Snipaste_2019-01-26_17-27-39.a523b44f.png",
    "revision": "a523b44fdee60e69f31e815edeef8b9d"
  },
  {
    "url": "assets/img/Snipaste_2019-02-28_19-59-50.8c6d246f.png",
    "revision": "8c6d246f0292aec4b8c16a5349b72368"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_09-02-40.c58011a3.png",
    "revision": "c58011a3cc2bc86e659b8ef744867ee2"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_09-05-35.04227885.png",
    "revision": "04227885fdbad87de01426821e161981"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_09-11-25.160629ac.png",
    "revision": "160629acabc587b90fb30a2f4047b9d9"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_09-12-26.e19f8826.png",
    "revision": "e19f8826cab057a40ee16d4beff243b3"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_09-30-43.6ebcba11.png",
    "revision": "6ebcba1160580bebea5b05ea61983d73"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_11-28-51.a08bb1f7.png",
    "revision": "a08bb1f7221922f4d60cbbfcb90fff95"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_11-34-39.cb7dab56.png",
    "revision": "cb7dab56709c8fc8d6c3e326ce62aadd"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_11-58-00.ffd9543a.png",
    "revision": "ffd9543aa7f7baefbc070d476da22b61"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_11-58-46.b96aaaae.png",
    "revision": "b96aaaae62a47b6ce4a011f92d8d3d17"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_14-50-01.0cd9764a.png",
    "revision": "0cd9764af2bd3b44e88f600fa0d9942d"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_15-10-03.93363dfe.png",
    "revision": "93363dfe3750173d648534f6f832ea83"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_15-51-26.82f0768a.png",
    "revision": "82f0768a45328917fd94edbed476a00d"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_16-16-28.1570fdbe.png",
    "revision": "1570fdbe90082174147e8699d08501f6"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_16-48-15.0f8a597a.png",
    "revision": "0f8a597a81464495998a332adada6117"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_17-34-25.3443e431.png",
    "revision": "3443e43127b37929649519694ade8497"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_18-53-36.c3d3bba8.png",
    "revision": "c3d3bba871485c157835c8742fc16371"
  },
  {
    "url": "assets/img/Snipaste_2019-03-01_20-15-05.46a55bcd.png",
    "revision": "46a55bcd3a45090e3e78bc67ca91e47c"
  },
  {
    "url": "assets/img/Snipaste_2019-03-02_14-02-38.377a6628.png",
    "revision": "377a6628fd83ed4b67b24a3be2743e29"
  },
  {
    "url": "assets/img/Snipaste_2019-03-02_14-22-58.51ee9f1c.png",
    "revision": "51ee9f1cb5d8df2332c20e43aaa8a80c"
  },
  {
    "url": "assets/img/Snipaste_2019-03-02_18-46-50.6dbf305e.png",
    "revision": "6dbf305e50c5272d5610126fe62b6d4a"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_10-48-55.aa197e0c.png",
    "revision": "aa197e0c3b7497b00a037f5ad415bf23"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_11-15-13.7e03513c.png",
    "revision": "7e03513c510f81d6eae7fc1d300110e7"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_11-15-41.ec87e0e6.png",
    "revision": "ec87e0e62a29fff733ced5353c6318a0"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_11-33-13.b16dd21a.png",
    "revision": "b16dd21a800c6a273096f974e7565944"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_13-00-41.73d14f5c.png",
    "revision": "73d14f5ce95ee933c7c8fe7bb7bdde8b"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_13-49-05.87960996.png",
    "revision": "879609967ee7c6eabb0bf4d4a9787f9c"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_21-14-07.841e0084.png",
    "revision": "841e008428cbc1e88ef3ea855a8d5e32"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_21-15-53.64907f76.png",
    "revision": "64907f76db5f82434fb84b3926e786e5"
  },
  {
    "url": "assets/img/Snipaste_2019-03-04_21-16-00.df976824.png",
    "revision": "df976824d043f609f9820fa036d785bc"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_09-00-40.a616a000.png",
    "revision": "a616a0006418afdc15026200e87d7ad4"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_09-29-12.269435c8.png",
    "revision": "269435c86c5d944a46c2e5b2c3d5f4c6"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_09-54-44.981e163d.png",
    "revision": "981e163d1cacfbbae384532f4fa18b9e"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_10-07-04.87579b87.png",
    "revision": "87579b8773d6049b638037cc7a1024c7"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_10-22-49.8d2c2b0d.png",
    "revision": "8d2c2b0d0fe215475d642c83dbf34153"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_11-41-18.3649db3f.png",
    "revision": "3649db3f9dcf19194441dda0d00e72b0"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_14-34-51.1c4649e3.png",
    "revision": "1c4649e313ab1b1aff0b453872bb0ba7"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_14-55-32.eef6f2f2.png",
    "revision": "eef6f2f2944f6df4d4304f2ad204cfb3"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_14-56-32.b4f0c6ab.png",
    "revision": "b4f0c6ab6431757e12363dad893cf90a"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_15-02-27.bd49aafc.png",
    "revision": "bd49aafced42e2c101e6093fbc276075"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_15-23-10.1a972379.png",
    "revision": "1a972379730260638dfdc3041cf379d0"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_15-44-24.270a2522.png",
    "revision": "270a25220a989e883b9f716c7364bf56"
  },
  {
    "url": "assets/img/Snipaste_2019-03-05_16-38-31.fb22bf0f.png",
    "revision": "fb22bf0fab9d9b9bb814fa6197672695"
  },
  {
    "url": "assets/img/Snipaste_2019-03-06_10-28-19.9edbffb9.png",
    "revision": "9edbffb9921480a72d56a4ca8b7cca52"
  },
  {
    "url": "assets/img/Snipaste_2019-03-06_11-14-36.58b2e191.png",
    "revision": "58b2e19151a135378a0c7228a734092c"
  },
  {
    "url": "assets/img/Snipaste_2019-03-06_15-18-15.e588dc59.png",
    "revision": "e588dc592013cf96b19996dfd2775c0c"
  },
  {
    "url": "assets/img/Snipaste_2019-03-06_15-41-36.80b054ef.png",
    "revision": "80b054ef313a48016a9bdb88388ce3f1"
  },
  {
    "url": "assets/img/Snipaste_2019-03-06_15-44-21.ca4f7dca.png",
    "revision": "ca4f7dca5188485cfb9f0e1ce209467d"
  },
  {
    "url": "assets/img/Snipaste_2019-03-06_19-11-34.4d539bf4.png",
    "revision": "4d539bf4a730c8cf72f7beb320cdd299"
  },
  {
    "url": "assets/img/Snipaste_2019-03-20_12-48-09.b7dd2394.png",
    "revision": "b7dd2394fccf3298359d439e71f9638d"
  },
  {
    "url": "assets/img/Snipaste_2019-03-20_15-13-32.06c328db.png",
    "revision": "06c328db6b8778668eaddb1f52b13baa"
  },
  {
    "url": "assets/img/Snipaste_2019-03-20_15-56-09.c1dadfc6.png",
    "revision": "c1dadfc6085b769321795dd06b0ee05d"
  },
  {
    "url": "assets/img/Snipaste_2019-03-20_17-36-37.de6dca52.png",
    "revision": "de6dca5245672620486eccabe4c7ff17"
  },
  {
    "url": "assets/img/Snipaste_2019-03-20_19-49-50.201a05bc.png",
    "revision": "201a05bc54ec4184ede645d233785a81"
  },
  {
    "url": "assets/img/Snipaste_2019-03-20_19-50-15.8c695a49.png",
    "revision": "8c695a4999d35caf1b146728ddf688f3"
  },
  {
    "url": "assets/img/Snipaste_2019-03-21_15-09-52.07d9a65f.png",
    "revision": "07d9a65f292df00d24142551cb6e1bf3"
  },
  {
    "url": "assets/img/Snipaste_2019-03-22_09-56-24.b3c4113c.png",
    "revision": "b3c4113cbeff2efbf3fed41611951793"
  },
  {
    "url": "assets/img/Snipaste_2019-03-22_10-26-04.71e917a6.png",
    "revision": "71e917a67341f631964fc1fd4a7e76e1"
  },
  {
    "url": "assets/img/Snipaste_2019-03-22_10-42-25.20d9c49c.png",
    "revision": "20d9c49caf9be962a21b9989dcd13cda"
  },
  {
    "url": "assets/img/Snipaste_2019-03-22_14-44-24.b80f0c9a.png",
    "revision": "b80f0c9a7ef84752330a85a3f0b635bc"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_16-06-34.b372aca0.png",
    "revision": "b372aca0e1a05b5a8f15fb920cac5b8d"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_16-10-35.5df86918.png",
    "revision": "5df86918008185177949689a8fd15566"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_16-17-01.568c68c6.png",
    "revision": "568c68c6f8b07cb4f3659db0c539b606"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_16-19-21.69c1f061.png",
    "revision": "69c1f061dff97d427cb3177e5b2691e3"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_16-58-42.fd8efaec.png",
    "revision": "fd8efaec9373317955532b80f32c910e"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_17-04-12.bd4f6ca6.png",
    "revision": "bd4f6ca6d2d7035f07174d7b2549160c"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_17-11-15.014ce854.png",
    "revision": "014ce854dd0f6593826824c2a6bd51a8"
  },
  {
    "url": "assets/img/Snipaste_2019-04-09_17-14-48.b5058cdd.png",
    "revision": "b5058cdd5774ef216ce7591d3aba119a"
  },
  {
    "url": "assets/img/Snipaste_2019-04-10_10-07-03.7d34eff1.png",
    "revision": "7d34eff1230c1d4cd363eb5ffcfc81fc"
  },
  {
    "url": "assets/img/Snipaste_2019-04-10_10-47-38.16b381de.png",
    "revision": "16b381de8948443c190e6bc14e7e3686"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_10-24-47.a3aeb220.png",
    "revision": "a3aeb220454f764d2b8af54e3f0a0619"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_10-26-48.79533a29.png",
    "revision": "79533a29f6fefaf3894a6ba372422321"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_10-29-19.cbcae176.png",
    "revision": "cbcae17683288161e5326d06b66511ee"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_10-31-22.8d598503.png",
    "revision": "8d5985033581ebbb889b3ede82dba766"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_10-34-08.5e6c0c3f.png",
    "revision": "5e6c0c3f2ff63dd10adef1c299477abb"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_10-42-41.1260eb99.png",
    "revision": "1260eb9955d03e311b4e6d7cf6d757d5"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_10-52-12.1c6f3b81.png",
    "revision": "1c6f3b81e337290f424ff7eb20784f63"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_11-20-15.ab40a2f5.png",
    "revision": "ab40a2f5155bcf08774785a4b3cf9150"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_14-05-50.7f94a0ea.png",
    "revision": "7f94a0ea13738454294f51b01977df0d"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_14-10-03.53e67bd1.png",
    "revision": "53e67bd14cd1c9c437db5b7064f5b362"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_14-27-15.8488eed9.png",
    "revision": "8488eed9ceed32407eb0c9da5558e3fc"
  },
  {
    "url": "assets/img/Snipaste_2019-05-29_14-43-45.20997770.png",
    "revision": "20997770a1e15e8f5fe7037e20771257"
  },
  {
    "url": "assets/img/Snipaste_2019-07-24_16-47-08.6e5cd6ed.png",
    "revision": "6e5cd6ed85c305824218096374cb76be"
  },
  {
    "url": "assets/img/Snipaste_2019-07-24_16-53-11.9bab4b47.png",
    "revision": "9bab4b47152117f536521790f7e6c577"
  },
  {
    "url": "assets/img/Snipaste_2019-07-24_16-57-50.4c647c15.png",
    "revision": "4c647c1589e999cf1a69cb32ed83350c"
  },
  {
    "url": "assets/img/Snipaste_2019-07-24_17-00-29.b5f07b1d.png",
    "revision": "b5f07b1ddc70d8ec9b502d61c48ca5a1"
  },
  {
    "url": "assets/img/Snipaste_2019-07-24_17-03-20.931a8b7c.png",
    "revision": "931a8b7c07dd8c183b0976cf949d4c19"
  },
  {
    "url": "assets/img/Snipaste_2019-07-24_17-08-40.1bb2ef1d.png",
    "revision": "1bb2ef1d766ccd0c20e33a6b9bb9f187"
  },
  {
    "url": "assets/img/Snipaste_2019-07-24_17-11-05.459aa736.png",
    "revision": "459aa736fdcaae9c1fd58e12a93b2ff6"
  },
  {
    "url": "assets/img/Snipaste_2019-07-28_10-52-40.8f5b5b82.png",
    "revision": "8f5b5b82f00cf4a22580de12328113f0"
  },
  {
    "url": "assets/img/Snipaste_2019-07-28_10-54-59.56674cb6.png",
    "revision": "56674cb6725c34701f42f13fc039c5ae"
  },
  {
    "url": "assets/img/Snipaste_2019-07-29_15-54-04.fe4c7740.png",
    "revision": "fe4c774083bc4602f0a45252984c79e2"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_13-55-00.711db87c.png",
    "revision": "711db87c3cc6d0e4bef0cdfb5301c2d8"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_14-21-01.6f999381.png",
    "revision": "6f99938175622c20a07d71ff98d9687d"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_14-46-28.122bf230.png",
    "revision": "122bf2307a085ce46bc421782c8e9b2b"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_21-51-38.660f2b54.png",
    "revision": "660f2b5486e3ac06cdcebb5f699742e5"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_21-52-28.95fba800.png",
    "revision": "95fba8008ea0623f67b0c616191a0c95"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_21-52-36.ae213da2.png",
    "revision": "ae213da2b0d8b33f85f3f2cc8928b1ad"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_21-52-40.5a9274c2.png",
    "revision": "5a9274c22a59b419d7dbe49605ed587a"
  },
  {
    "url": "assets/img/Snipaste_2020-05-20_21-52-51.268adfcf.png",
    "revision": "268adfcf83de7815d2fb32c0106d71dc"
  },
  {
    "url": "assets/img/Snipaste_2020-05-22_15-12-48.b9444827.png",
    "revision": "b9444827b4446e9d0c46d71d4c18ac9a"
  },
  {
    "url": "assets/img/Snipaste_2020-05-22_15-34-22.b5e610e8.png",
    "revision": "b5e610e848a8c6387e7f660d3028ceab"
  },
  {
    "url": "assets/img/Snipaste_2020-05-22_15-48-59.87e85e7a.png",
    "revision": "87e85e7a9be98e0c6f8684c06adcb558"
  },
  {
    "url": "assets/img/Snipaste_2020-05-22_17-18-50.96fc16e8.png",
    "revision": "96fc16e880132f397195963471e98222"
  },
  {
    "url": "assets/img/Snipaste_2020-05-22_17-36-51.a0e4480a.png",
    "revision": "a0e4480a6313efbc76016c60a8e864f6"
  },
  {
    "url": "assets/img/Snipaste_2020-05-22_20-09-40.04bfba7c.png",
    "revision": "04bfba7c0b844faf294abecf2a5c9e07"
  },
  {
    "url": "assets/img/Snipaste_2020-05-22_20-22-14.8d2715d9.png",
    "revision": "8d2715d9b2573fa66352b6b6d06f9f9c"
  },
  {
    "url": "assets/img/Snipaste_2020-06-01_16-26-59.b12242b1.png",
    "revision": "b12242b122daa9e5de2792aed13f5fc8"
  },
  {
    "url": "assets/img/Snipaste_2020-06-01_21-13-35.1bd2c31e.png",
    "revision": "1bd2c31e638e11bbd536e06ad261929b"
  },
  {
    "url": "assets/img/stop_gadget.f308066f.png",
    "revision": "f308066f4006dd5907ab94b1ca3ffdf0"
  },
  {
    "url": "assets/img/t01d84ec3da74c87b19.37a0ed39.jpg",
    "revision": "37a0ed3965cc3c48bd0ab46e42e06143"
  },
  {
    "url": "assets/img/text_segment.14d5481d.png",
    "revision": "14d5481dab93b64b41efbd5e5c4fb29d"
  },
  {
    "url": "assets/js/1.88520771.js",
    "revision": "cb91047fc609999e389c0bce291372e9"
  },
  {
    "url": "assets/js/10.87870a66.js",
    "revision": "7684e81dbb9fa99242cec15ec743aa22"
  },
  {
    "url": "assets/js/100.4f9195bc.js",
    "revision": "7751476c049da9039e81664bbe29632c"
  },
  {
    "url": "assets/js/101.e3928cef.js",
    "revision": "b2a4a84d2e79168a3df40695c7bedb2a"
  },
  {
    "url": "assets/js/102.f6a16c4a.js",
    "revision": "5c694374db2c7cc970e9fd2366150130"
  },
  {
    "url": "assets/js/103.cb9eeb3b.js",
    "revision": "1227f5160ce49f7e84773fc2f67d1558"
  },
  {
    "url": "assets/js/104.89c4fe54.js",
    "revision": "5715ece3684b5a0929e965e545c46c23"
  },
  {
    "url": "assets/js/105.018d6cdf.js",
    "revision": "74bb6271c0aa000892b93e259dbf1f10"
  },
  {
    "url": "assets/js/106.644b36c4.js",
    "revision": "9a93176303a4849526a99938ac1f84d3"
  },
  {
    "url": "assets/js/107.ab12619c.js",
    "revision": "5ffb20c2cec188867c9c9f4ddae7ae6c"
  },
  {
    "url": "assets/js/108.a17bb8fe.js",
    "revision": "ab6a642e062560d97a8e3b12adc2f57d"
  },
  {
    "url": "assets/js/109.c1aec76e.js",
    "revision": "998c94b00205c8fcb5c6cba1960a1000"
  },
  {
    "url": "assets/js/11.6d8986bc.js",
    "revision": "bb3dd9489afc74d60d2ce079184b980a"
  },
  {
    "url": "assets/js/110.63234584.js",
    "revision": "d38578d5ff4ac22adf144494f8eb7ac9"
  },
  {
    "url": "assets/js/111.0805807f.js",
    "revision": "17443fd1bb5c8d41a1da4b17e39d595d"
  },
  {
    "url": "assets/js/112.4ed677d6.js",
    "revision": "3628dae453c3cbdc6fa0f2ba3bc5e566"
  },
  {
    "url": "assets/js/113.88d32c96.js",
    "revision": "d8bb0a47b3c6065dbb38339c6f89852e"
  },
  {
    "url": "assets/js/114.7a3801dd.js",
    "revision": "d4da9dd68a52fc759d76d28055e8902d"
  },
  {
    "url": "assets/js/115.1199166c.js",
    "revision": "63d82e4a2f3b9fa9d6f0b0f13c2291f3"
  },
  {
    "url": "assets/js/116.7a47c01a.js",
    "revision": "bfbd9af7f78090631cc0b8f30b19e3f8"
  },
  {
    "url": "assets/js/117.cb3ba44a.js",
    "revision": "bc6e6a03934730d059d681ddea2a6a49"
  },
  {
    "url": "assets/js/118.63128efa.js",
    "revision": "ab6bf4479e7448e87c38599a1e09e2de"
  },
  {
    "url": "assets/js/119.a231ad6e.js",
    "revision": "5aff8b1516dc96ed5cf4d1f38ee5c470"
  },
  {
    "url": "assets/js/12.17970c12.js",
    "revision": "afeb025d67b21cd05094d7ef3176f999"
  },
  {
    "url": "assets/js/120.f6b845a7.js",
    "revision": "b76d603475e9c01ff5a70ecc4a96df10"
  },
  {
    "url": "assets/js/121.1c520ce3.js",
    "revision": "82ddc96b04e7f7ef18171eb87d4a1af4"
  },
  {
    "url": "assets/js/122.d09dd219.js",
    "revision": "4b4bc28c024cae6a9b3bb783dbb39ad8"
  },
  {
    "url": "assets/js/123.d1d7f332.js",
    "revision": "c93ca62400241ca33d4516ce733aaa08"
  },
  {
    "url": "assets/js/124.a32d1675.js",
    "revision": "7b9e2013ae0cfe9fa2911fbc63e96cc8"
  },
  {
    "url": "assets/js/125.7b0202ff.js",
    "revision": "1c22451ff0a705ee378ef24eaf64c767"
  },
  {
    "url": "assets/js/126.1fc226cb.js",
    "revision": "681e471108cc3d9846f47440bb688c13"
  },
  {
    "url": "assets/js/127.47224706.js",
    "revision": "111b660d29a5eeef02002e30e38f3f04"
  },
  {
    "url": "assets/js/128.a958d443.js",
    "revision": "3ebde2ca3ce3fc5c7d19669160b0d8b1"
  },
  {
    "url": "assets/js/129.7452494b.js",
    "revision": "96d28e793db156d2225c55f8bb4d8193"
  },
  {
    "url": "assets/js/13.e956aeec.js",
    "revision": "6df61de5914991956fc725b9a0d0044d"
  },
  {
    "url": "assets/js/130.856d2d48.js",
    "revision": "676b0c5a6a330e2b3c0eced03274b73f"
  },
  {
    "url": "assets/js/131.95dd5724.js",
    "revision": "e4ee4ff78ff0f263a34490f3abbd76aa"
  },
  {
    "url": "assets/js/132.b54a4e40.js",
    "revision": "4660e5710bdec09dd9b3aca6e38cd591"
  },
  {
    "url": "assets/js/133.8bd411a8.js",
    "revision": "e639ed6fa72a45294b0c3b1ccd0380b5"
  },
  {
    "url": "assets/js/134.b59b03f3.js",
    "revision": "b5c35ebfdd3f29a2d94b8f0a6aeae1ee"
  },
  {
    "url": "assets/js/135.affb5ac4.js",
    "revision": "765a91a766949b022ccb2974dddc230f"
  },
  {
    "url": "assets/js/136.025de99f.js",
    "revision": "8fd99a525e676d61ea087a4b44dffb5b"
  },
  {
    "url": "assets/js/137.c65df109.js",
    "revision": "5790fc4ace97015ea15ac97a09c7a409"
  },
  {
    "url": "assets/js/138.502d8473.js",
    "revision": "2651a5fe3f08443d58bce6fdd394fc49"
  },
  {
    "url": "assets/js/139.ce7b6e58.js",
    "revision": "e3d2db40c79d38d5a901bf09509ca3ac"
  },
  {
    "url": "assets/js/14.65734390.js",
    "revision": "bf661e3bff7a304ecc63313d5726122f"
  },
  {
    "url": "assets/js/140.5cb1be6d.js",
    "revision": "62a0636774577bfb254c8b7b54aa26d9"
  },
  {
    "url": "assets/js/141.4a938afa.js",
    "revision": "1862c0065f3aa9474bac031971746002"
  },
  {
    "url": "assets/js/142.bb3e7dce.js",
    "revision": "9d5b752222a4c2fff841d5bbb3c684f4"
  },
  {
    "url": "assets/js/143.2ab1b291.js",
    "revision": "0159638528843425e9f8f9c3f36643ca"
  },
  {
    "url": "assets/js/144.2e50d220.js",
    "revision": "eb4d97aa7fd1139418f7a21bc1039ac1"
  },
  {
    "url": "assets/js/145.0b3fedab.js",
    "revision": "074ba4b64c5a45f6ed64dcc6a318d5ab"
  },
  {
    "url": "assets/js/15.d16bc596.js",
    "revision": "fe02f121be05a67592df9aa112f1ae37"
  },
  {
    "url": "assets/js/16.2f11d145.js",
    "revision": "5fd26cd12c46dc31f50313d3fe85005b"
  },
  {
    "url": "assets/js/17.c7bf64dc.js",
    "revision": "783e9cc80e3757131a0c761a7d2cb9a6"
  },
  {
    "url": "assets/js/18.83fbc6e8.js",
    "revision": "ba35b9b80289239fa76f4259ddf435f4"
  },
  {
    "url": "assets/js/19.803e1c6a.js",
    "revision": "1a5b4ce7be7e186aad43a3567fcb61fe"
  },
  {
    "url": "assets/js/20.593b893a.js",
    "revision": "3c5bc698555c41b84d8b06741795ccf4"
  },
  {
    "url": "assets/js/21.3d706923.js",
    "revision": "fdd61b8040eac7a5baa47494aa42bb41"
  },
  {
    "url": "assets/js/22.80bb6e2e.js",
    "revision": "652e1d09b2d9f52432ca37da37cb05c9"
  },
  {
    "url": "assets/js/23.38610372.js",
    "revision": "5ceb2f71f0afa316779ab5a51d41294e"
  },
  {
    "url": "assets/js/24.18197e72.js",
    "revision": "6cf334caa87c5468ecfd202883dda787"
  },
  {
    "url": "assets/js/25.0ecdca93.js",
    "revision": "252b868a906086c7c759eb2e83fc3294"
  },
  {
    "url": "assets/js/26.79c17a3e.js",
    "revision": "844be06e6904ba81a6589239b7edefde"
  },
  {
    "url": "assets/js/27.aae7c43d.js",
    "revision": "1e09ea89ec56783c21e3914052dd7ab2"
  },
  {
    "url": "assets/js/28.6b821b50.js",
    "revision": "14f3ce1c705d9f805125c01f44c4496e"
  },
  {
    "url": "assets/js/29.bc60fa6c.js",
    "revision": "9519c2186a62d7da13daa371f40aa28b"
  },
  {
    "url": "assets/js/30.a4700960.js",
    "revision": "8fb460d5f5fbd068db7c46c039980b00"
  },
  {
    "url": "assets/js/31.dd45a26e.js",
    "revision": "fe544a2ac2d1bf7fdbafb2501538a310"
  },
  {
    "url": "assets/js/32.f213abbb.js",
    "revision": "c5e9fe75bfb46974ab39b2cd7874b0e9"
  },
  {
    "url": "assets/js/33.5eacd5c8.js",
    "revision": "a1164b21b900a55067ded5bad391f664"
  },
  {
    "url": "assets/js/34.9df2c850.js",
    "revision": "1b50a618e3d117f579177bf6df27786c"
  },
  {
    "url": "assets/js/35.5051188e.js",
    "revision": "432fb38e985cf4cd51e0084cd9fcb2d3"
  },
  {
    "url": "assets/js/36.f549fb68.js",
    "revision": "caac274cc5d38e49881c9a53a09e9cb7"
  },
  {
    "url": "assets/js/37.2930ceda.js",
    "revision": "1b198ae0aa5c4c177172df54fe962ab4"
  },
  {
    "url": "assets/js/38.fa3fc6ea.js",
    "revision": "f3be2452dc166e48c7e2dab182d2d744"
  },
  {
    "url": "assets/js/39.57a76242.js",
    "revision": "a6fd7030bb5b98552a39eb9f3fff0199"
  },
  {
    "url": "assets/js/4.1982f64f.js",
    "revision": "62b08ec3eab9d2403cce46a6beda71df"
  },
  {
    "url": "assets/js/40.09519d07.js",
    "revision": "c281301ead3519020b3256c45ded5c33"
  },
  {
    "url": "assets/js/41.74086be3.js",
    "revision": "8894695e70dd41eaebd5c2121b4e147b"
  },
  {
    "url": "assets/js/42.65ef8c95.js",
    "revision": "471060606de5fe460eb10484f8eacdbc"
  },
  {
    "url": "assets/js/43.9911c1f3.js",
    "revision": "66067ee15d8011cb1b2eb3a8626280ea"
  },
  {
    "url": "assets/js/44.ac010ea3.js",
    "revision": "1fde0421587d740e8286a74925977450"
  },
  {
    "url": "assets/js/45.682b7cc5.js",
    "revision": "cd056cbc340a7e845c4a3a3aaa84a04b"
  },
  {
    "url": "assets/js/46.96c22e32.js",
    "revision": "7675b82991395c80e1a159e57a6a4a90"
  },
  {
    "url": "assets/js/47.ec148499.js",
    "revision": "62515e5317e4b70363b5c91a862bf266"
  },
  {
    "url": "assets/js/48.aac0e245.js",
    "revision": "c066efa92744b8bfc2f7bb6d8e0aa4a7"
  },
  {
    "url": "assets/js/49.0b57b162.js",
    "revision": "f91033a4b2eb101527023d747af8062d"
  },
  {
    "url": "assets/js/5.d14ca850.js",
    "revision": "337a4a4a498dcb27d9a912edfd87b8db"
  },
  {
    "url": "assets/js/50.3c897d0e.js",
    "revision": "a6787b59d7d8cf384ee1e589f9e423c7"
  },
  {
    "url": "assets/js/51.f77d7952.js",
    "revision": "eaf744122ec006cbd7da997e903456d7"
  },
  {
    "url": "assets/js/52.607eb26f.js",
    "revision": "aaa531e3925eb426d99aa85c6cd9d72d"
  },
  {
    "url": "assets/js/53.251c3404.js",
    "revision": "1199883bc3fa56c44a310e0552885cda"
  },
  {
    "url": "assets/js/54.63f76ac5.js",
    "revision": "c5b3f0d9b21ed7c922847257bb902d41"
  },
  {
    "url": "assets/js/55.03566e7d.js",
    "revision": "9367c1b8420b348e54f07f064c61e078"
  },
  {
    "url": "assets/js/56.9efb6c9a.js",
    "revision": "127820e16ad7ca72884d25bdf0c9754c"
  },
  {
    "url": "assets/js/57.3bef7cad.js",
    "revision": "148960a61ea4a769e67f2265715eb648"
  },
  {
    "url": "assets/js/58.6a5ad6c7.js",
    "revision": "7c3f33a0b3c5a83745e2ad6a5c4288f6"
  },
  {
    "url": "assets/js/59.0b80c73f.js",
    "revision": "ad4856e862e368efb2c9467cebce5eb9"
  },
  {
    "url": "assets/js/6.a4ec3c32.js",
    "revision": "374bd44e30e32a53cb85b505fc2909af"
  },
  {
    "url": "assets/js/60.fa9ed5a1.js",
    "revision": "bcc941209e03c9432b5337b8727ed948"
  },
  {
    "url": "assets/js/61.efb2356b.js",
    "revision": "a32bc68d1d38a598baab6aff2b3927a3"
  },
  {
    "url": "assets/js/62.f65af124.js",
    "revision": "c74b31c097eef3b39c526d72189ffbb0"
  },
  {
    "url": "assets/js/63.a159e092.js",
    "revision": "ca765edb15638623e5ee0b880a258203"
  },
  {
    "url": "assets/js/64.291bafcf.js",
    "revision": "b3de88cf050ec07ac3a3e580904b7b05"
  },
  {
    "url": "assets/js/65.4b34810b.js",
    "revision": "c698ac120bedb1cce22351be5b1ca864"
  },
  {
    "url": "assets/js/66.e22629cc.js",
    "revision": "f776129ae54de3c963b6aa8ba0500c14"
  },
  {
    "url": "assets/js/67.81e21dd8.js",
    "revision": "51c5e38a64f149dd82b7368c34d2fd87"
  },
  {
    "url": "assets/js/68.a822b77b.js",
    "revision": "dfe8199e319826caddd3fd726639207d"
  },
  {
    "url": "assets/js/69.e8a36d0d.js",
    "revision": "0290bdb7fb05fad92f6c241c27d7c923"
  },
  {
    "url": "assets/js/7.6e095c06.js",
    "revision": "c0a839d18c64ce35d7843a8c6c5709c4"
  },
  {
    "url": "assets/js/70.c717e621.js",
    "revision": "a58891e16436bcc0bcfbc07a9090435d"
  },
  {
    "url": "assets/js/71.e16ce2c1.js",
    "revision": "98cbd68c04357b37931edc670de97121"
  },
  {
    "url": "assets/js/72.ac06a2f7.js",
    "revision": "2e800409e174b19c1cecfe6cdf0d2d12"
  },
  {
    "url": "assets/js/73.ffa0f28a.js",
    "revision": "2da70a10268705820cd01c55f5cf36df"
  },
  {
    "url": "assets/js/74.a4890fd5.js",
    "revision": "92a055b8226a7a0fac0b7bb136108ee1"
  },
  {
    "url": "assets/js/75.35459948.js",
    "revision": "42c0d6d1db7f9750489f9ac2f102c6f1"
  },
  {
    "url": "assets/js/76.3ba97919.js",
    "revision": "afcbe1673e4fe50d786f56ed992e70e3"
  },
  {
    "url": "assets/js/77.a2a12e30.js",
    "revision": "fb1de9143ce9cabdf46b6fcc33d9d3a1"
  },
  {
    "url": "assets/js/78.eedc8467.js",
    "revision": "77751b261c8e3f1b858daf3a64d94c01"
  },
  {
    "url": "assets/js/79.199a812b.js",
    "revision": "a18717bc0233ac8ad86b3d471a02407a"
  },
  {
    "url": "assets/js/8.1bd2aa6f.js",
    "revision": "3a821befa5cdf20cb3f94f461b7a7493"
  },
  {
    "url": "assets/js/80.a27c2d7d.js",
    "revision": "c24351475581e6a436f5f352b3fd2116"
  },
  {
    "url": "assets/js/81.c4039a9e.js",
    "revision": "1e1c5c5bb0cda17f3fa37437f1103fa1"
  },
  {
    "url": "assets/js/82.76ae49b3.js",
    "revision": "8c8b67aa4a0d369ce2bf0bd83c93b929"
  },
  {
    "url": "assets/js/83.8360535a.js",
    "revision": "d0240d93a481819bb820e7a67320d81b"
  },
  {
    "url": "assets/js/84.ccc9152a.js",
    "revision": "5da48e3ee80842ae835ef858b6768c47"
  },
  {
    "url": "assets/js/85.07ef261e.js",
    "revision": "20c85102fad99a36dffe5cf11b1adcb5"
  },
  {
    "url": "assets/js/86.cd361ce6.js",
    "revision": "590cbb51feadd2c2abecd756a8149aa7"
  },
  {
    "url": "assets/js/87.eaecdcac.js",
    "revision": "2ba244a287bb8fe2e75d482b0aa06588"
  },
  {
    "url": "assets/js/88.c0e2ab6e.js",
    "revision": "0887ee907bd88110cd90ca6d15a9cb29"
  },
  {
    "url": "assets/js/89.4064a133.js",
    "revision": "25772ce07d59b50b9092d4e765249e23"
  },
  {
    "url": "assets/js/9.b0088fce.js",
    "revision": "f00eece0bc93a02fa9d48f976a1ae1d5"
  },
  {
    "url": "assets/js/90.0c9cccd1.js",
    "revision": "3655fd3aec4b88d27bb2eef50f701830"
  },
  {
    "url": "assets/js/91.5a6fd51a.js",
    "revision": "0060def039dc3b07d386eadafe6dd5b9"
  },
  {
    "url": "assets/js/92.926f39c0.js",
    "revision": "35db677e3e4c7396069ee30a1c617a65"
  },
  {
    "url": "assets/js/93.2ac8304c.js",
    "revision": "8106e680e726f09e30d3ab953d488434"
  },
  {
    "url": "assets/js/94.8650c890.js",
    "revision": "c609f147ad081b609cc42d1f79d9d971"
  },
  {
    "url": "assets/js/95.db71ac07.js",
    "revision": "db387099f1f9ae051d2da67a1064a1ae"
  },
  {
    "url": "assets/js/96.ecd277ce.js",
    "revision": "b529668b1d0d4a4ee4f869e9f1a94106"
  },
  {
    "url": "assets/js/97.8d3dd312.js",
    "revision": "ac520b0098fa963fa83b404a880147e2"
  },
  {
    "url": "assets/js/98.df02bf22.js",
    "revision": "42df1f7302d947a889a1f2c83f7ae256"
  },
  {
    "url": "assets/js/99.802d11d2.js",
    "revision": "3404ac17354d4eafbaf5c6ba7db1fa7d"
  },
  {
    "url": "assets/js/app.b32307b1.js",
    "revision": "019a3ae587116ae0f4ed400ff7c23c31"
  },
  {
    "url": "assets/js/vendors~docsearch.5537762e.js",
    "revision": "9e18caa66f469b73d3493fe383f6d646"
  },
  {
    "url": "categories/ctf/index.html",
    "revision": "784bafbdde19e44888b614689349c332"
  },
  {
    "url": "categories/diary/index.html",
    "revision": "3bc8820e51249347eebd632399790198"
  },
  {
    "url": "categories/index.html",
    "revision": "afddeeb12fae4c9f8c5a263a4e13e227"
  },
  {
    "url": "categories/notes/index.html",
    "revision": "11f3c26f1071f6935a748719bb2ae5cd"
  },
  {
    "url": "categories/notes/page/2/index.html",
    "revision": "d7fa4991087f1317c1a401e4b344b865"
  },
  {
    "url": "categories/notes/page/3/index.html",
    "revision": "f6cc5e872e445ad8e04407629cd4d4ff"
  },
  {
    "url": "categories/notes/page/4/index.html",
    "revision": "b0f58a11013019eb633bd266179e490f"
  },
  {
    "url": "categories/notes/page/5/index.html",
    "revision": "88ae7239f112b058c0d64215b7adc013"
  },
  {
    "url": "categories/notes/page/6/index.html",
    "revision": "2ad1643d34918d034ac7ecde3d0be3da"
  },
  {
    "url": "categories/notes/page/7/index.html",
    "revision": "86cd99d42102ba21ea45c51b18bb212b"
  },
  {
    "url": "categories/others/index.html",
    "revision": "e9f9e5a636d2ccfca90b873e44784501"
  },
  {
    "url": "categories/project/index.html",
    "revision": "929b9cf19be2ba64c0fbc5d1ad2de7b7"
  },
  {
    "url": "categories/tools/index.html",
    "revision": "51de91b1b90be6016ec8b1a4b32c32c1"
  },
  {
    "url": "categories/tools/page/2/index.html",
    "revision": "c8ded313ace09446b76ce33341ebdb0f"
  },
  {
    "url": "diary/2019-03.html",
    "revision": "384cecdc633599718e94eaf6ee70d344"
  },
  {
    "url": "diary/2019-04.html",
    "revision": "94344d5bf73af820e5952f2c95d42321"
  },
  {
    "url": "diary/2019-05.html",
    "revision": "f9d4f37f4990c44365fddfec93210ddb"
  },
  {
    "url": "diary/2019-07.html",
    "revision": "ba81d937fb2d0693f984972cd5623517"
  },
  {
    "url": "diary/2019-08.html",
    "revision": "3a2c65a237d5b19e6465914c207bab7e"
  },
  {
    "url": "diary/2019-09.html",
    "revision": "ef66a3c07bae0f313ca0567ebf4e8bb7"
  },
  {
    "url": "diary/2019-12.html",
    "revision": "12f525ad2fb8466e0003cbad92195f0e"
  },
  {
    "url": "diary/2020-01.html",
    "revision": "46f47f3480792dca650c728200e459af"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-1.html",
    "revision": "dd96d29770ac7aaf894979b6708e2df7"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-10.html",
    "revision": "20aba1267c03f5e3aa75d6bb41ea81d1"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-11.html",
    "revision": "0129a39149d4a1d59f49d9b30970004d"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-12.html",
    "revision": "ce103be4e1e487c883fb2cea67a6e1fd"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-2.html",
    "revision": "061764e2322bdeebb3b52565c7fee9cb"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-3.html",
    "revision": "3061a29b7148127c475d2933f608cc19"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-4.html",
    "revision": "76a7f0b3ad9acf3125e87e2927c7af73"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-5.html",
    "revision": "3de1fbc5634b9a0ce8a418dbabcf6869"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-6.html",
    "revision": "443b2e40f7a63097e2526280e06d2353"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-7.html",
    "revision": "3054930d903409300c1a0363b20171bc"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-8.html",
    "revision": "fa4fb7bc4b8f3fa0877c4807e298f1fc"
  },
  {
    "url": "docs/book-notes/Cpp-Primer-Plus/note-9.html",
    "revision": "69e529124147fa25a988b393e4a8c64b"
  },
  {
    "url": "docs/book-notes/Hacker-Disassembling-Uncovered/note-1.html",
    "revision": "9d95584cb259869d7ee5b7199b79f5ee"
  },
  {
    "url": "docs/book-notes/Hacker-Disassembling-Uncovered/note-2.html",
    "revision": "26ed9049dc79fd9649d371055ad48a22"
  },
  {
    "url": "docs/book-notes/Hacker-Disassembling-Uncovered/note-3.html",
    "revision": "f672c96d896d3140825b387c264d09cf"
  },
  {
    "url": "docs/book-notes/Hacker-Disassembling-Uncovered/note-4.html",
    "revision": "9083a72a9ed563b84b40e4d11de7b115"
  },
  {
    "url": "docs/book-notes/index.html",
    "revision": "9888aeca2420c695dbec1ff553c9f7e7"
  },
  {
    "url": "docs/book-notes/Programming-Windows/note-1.html",
    "revision": "f395a3245ab73d2adb18e0994ad54c62"
  },
  {
    "url": "docs/book-notes/Programming-Windows/note-2.html",
    "revision": "bfd459566397c6b94e5d3a52ad825216"
  },
  {
    "url": "docs/book-notes/Programming-Windows/note-3.html",
    "revision": "0de72cef0200557a6f641025b61da069"
  },
  {
    "url": "docs/book-notes/Programming-Windows/note-4.html",
    "revision": "4dbc2b8998d59666e32d99dd9ef4635e"
  },
  {
    "url": "docs/book-notes/Programming-Windows/note-5.html",
    "revision": "7d8cac25424277902f59143c079b7c41"
  },
  {
    "url": "docs/book-notes/Programming-Windows/note-6.html",
    "revision": "f2676be3e3dfb3d896fa57ec51c34227"
  },
  {
    "url": "docs/book-notes/Reverse-Engineering-Code-with-IDA-Pro/note-1.html",
    "revision": "f079d9275219aa19c05585ac203a2a06"
  },
  {
    "url": "docs/book-notes/Reverse-Engineering-Code-with-IDA-Pro/note-2.html",
    "revision": "b35dd6b77cc3cd1499e223508bd887d7"
  },
  {
    "url": "docs/book-notes/Reverse-Engineering-Code-with-IDA-Pro/note-3.html",
    "revision": "0b78dece0ca9f54eb1ddecf9401d49f0"
  },
  {
    "url": "docs/paper-notes/acsac-2019-speculator.html",
    "revision": "0bda156a524855763ec0ea2c7583a9b9"
  },
  {
    "url": "docs/paper-notes/ccs-2019-where-does-it-goes.html",
    "revision": "c51e3188ef2bfb41e1a41e0bb5520bf7"
  },
  {
    "url": "docs/paper-notes/graduation-paper.html",
    "revision": "7ed6757dc1672af36edfbb3a84080c30"
  },
  {
    "url": "docs/paper-notes/index.html",
    "revision": "008c89b2faf587e5073d3dd998bc4cde"
  },
  {
    "url": "docs/paper-notes/s&p-2018-ropob.html",
    "revision": "41d63a9b9dcd7222280b53c98a620a1c"
  },
  {
    "url": "docs/paper-notes/usenix-2019-pex.html",
    "revision": "2576affc23131eeecc126f2d21231096"
  },
  {
    "url": "docs/paper-notes/usenix-2020-fans.html",
    "revision": "ce5146f69306cf7c95dddb1705139383"
  },
  {
    "url": "docs/tech-notes/Angr/note-1.html",
    "revision": "1e78d3637bfd30e6f21135ec57861dc0"
  },
  {
    "url": "docs/tech-notes/Angr/note-2.html",
    "revision": "93fed071ffc4fea4e7306662ee9455d0"
  },
  {
    "url": "docs/tech-notes/Angr/note-3.html",
    "revision": "20e9ee9ae43cbbe31dfd2404580cefb9"
  },
  {
    "url": "docs/tech-notes/Angr/note-4.html",
    "revision": "2b9acb5be61648a38eb29876aef00da6"
  },
  {
    "url": "docs/tech-notes/Angr/note-5.html",
    "revision": "594f83c6819553c02b74e0fd4b0d3e80"
  },
  {
    "url": "docs/tech-notes/Angr/note-6.html",
    "revision": "11091e651cf681d1b9a0541f2cdddf97"
  },
  {
    "url": "docs/tech-notes/Angr/note-7.html",
    "revision": "24ef6055adfd976a88b93beed4ed1421"
  },
  {
    "url": "docs/tech-notes/Angr/note-prev-1.html",
    "revision": "097f23b2ced6cbf2e986d7abbc0c0e99"
  },
  {
    "url": "docs/tech-notes/Angr/note-prev-2.html",
    "revision": "966897a7e5fba31472baedc25ba24732"
  },
  {
    "url": "docs/tech-notes/Angr/note-prev-3.html",
    "revision": "7ce769036dcafd70f1938f37025d7370"
  },
  {
    "url": "docs/tech-notes/Git/note-1.html",
    "revision": "0d7ea77ec8f7d43417c3a865cf3d6102"
  },
  {
    "url": "docs/tech-notes/Git/note-2.html",
    "revision": "04071001ec3a7bb5d49fa3e85536433e"
  },
  {
    "url": "docs/tech-notes/Git/note-3.html",
    "revision": "1df9e2c8ee49a4ddb734cd978fbcce83"
  },
  {
    "url": "docs/tech-notes/Git/note-4.html",
    "revision": "75078e4be47bfd0e245fb5d55ea2557a"
  },
  {
    "url": "docs/tech-notes/index.html",
    "revision": "1b2a55b8ce6e9816bdfa916d4934ae13"
  },
  {
    "url": "docs/tech-notes/Maching-Learning/note-1.html",
    "revision": "2631c997e7b6b1c22696480695e6097b"
  },
  {
    "url": "docs/tech-notes/Maching-Learning/note-2.html",
    "revision": "0362af716738f948a1fcf89ff9b75cc0"
  },
  {
    "url": "docs/tech-notes/Maching-Learning/note-3.html",
    "revision": "fa76b798670be82086137ae666fce740"
  },
  {
    "url": "docs/tech-notes/Pwn/heap-1.html",
    "revision": "639c42805910e2e163aa5b1e555ec0cc"
  },
  {
    "url": "docs/tech-notes/Pwn/heap-2.html",
    "revision": "f5afb114c53029fd28f4cef919eac17d"
  },
  {
    "url": "docs/tech-notes/Pwn/index.html",
    "revision": "fddfb3b0ec575ac1e25c523a0a61b8af"
  },
  {
    "url": "docs/tech-notes/Pwn/note-1.html",
    "revision": "6e247ab79fdce0526731d23bae7dc71e"
  },
  {
    "url": "docs/tech-notes/Pwn/note-2.html",
    "revision": "c8eff4bd289332cfee1361d2b895fb65"
  },
  {
    "url": "docs/tech-notes/Pwn/note-3.html",
    "revision": "fb5c368dac1a7f48ea84797579978acf"
  },
  {
    "url": "docs/tech-notes/Pwn/note-4.html",
    "revision": "480f710d89dcfd32e3b67cc73be871c2"
  },
  {
    "url": "docs/tech-notes/Pwn/note-5.html",
    "revision": "3d0198ea953e15643890831bd832cc90"
  },
  {
    "url": "docs/tech-notes/Pwn/stack-1.html",
    "revision": "d564a18bfa7746783183b5611d0167c7"
  },
  {
    "url": "docs/tech-notes/Pwn/stack-2.html",
    "revision": "0aa67f10ec9598fd04690d7acd276178"
  },
  {
    "url": "docs/tech-notes/Pwn/stack-3.html",
    "revision": "19adf346b55b7f1ed9fb0781b69f7c1c"
  },
  {
    "url": "docs/tech-notes/Python/note-1.html",
    "revision": "ffe6550b3270197b46a8d929375b28f4"
  },
  {
    "url": "docs/tech-notes/Python/note-2.html",
    "revision": "1eea92b243c33dbfe1fe8e8f7c76d55c"
  },
  {
    "url": "docs/tech-notes/Python/note-3.html",
    "revision": "ec6df68d50303930f9b4e0ff99cdf4d1"
  },
  {
    "url": "docs/tech-notes/Python/note-4.html",
    "revision": "8ee3b6ef51dd95f1aad2d510f68e7631"
  },
  {
    "url": "docs/tech-notes/Python/note-5.html",
    "revision": "ab6e7efebcce4a1d33686277d4310472"
  },
  {
    "url": "docs/tech-notes/Python/note-6.html",
    "revision": "9dab19e8c1ea2a72620bb18b4e899519"
  },
  {
    "url": "docs/tech-notes/Python/python-and-crypto-1.html",
    "revision": "1df6b1d36fb3ca48d4cae321ec619a6c"
  },
  {
    "url": "docs/tech-notes/Python/python-from-beginning-1.html",
    "revision": "6c6d25fc655f7a7ddac760cb77585084"
  },
  {
    "url": "docs/tech-notes/Python/python3-1.html",
    "revision": "f26b8c4ce164d353d5c28eb9e088446e"
  },
  {
    "url": "docs/tech-notes/Reverse/android-jni-debugging-1.html",
    "revision": "fd5ba5c70fe0087d82ff295a47a1fd76"
  },
  {
    "url": "docs/tech-notes/Reverse/android-jni-debugging-2.html",
    "revision": "a80371a349db47a53ca553f7eab5a09e"
  },
  {
    "url": "docs/tech-notes/Reverse/cracking-jeb-1.html",
    "revision": "ed76cb2a34432bcf2c5886f0216b64aa"
  },
  {
    "url": "docs/tech-notes/Reverse/golang-1.html",
    "revision": "bd887a0a5317e63fc655e22295c86868"
  },
  {
    "url": "docs/tech-notes/Reverse/index.html",
    "revision": "2c7da35c00311f3ff53d60c87d8e61eb"
  },
  {
    "url": "docs/tech-notes/Reverse/linux-1.html",
    "revision": "fc9618a9cefb619dbe3e5897f32328f5"
  },
  {
    "url": "docs/tech-notes/Reverse/linux-2.html",
    "revision": "8f10e8ede013871949e519bd31c1e5a0"
  },
  {
    "url": "docs/tech-notes/Reverse/ponce-1.html",
    "revision": "a66155ddb39efdfd527d0268bd0f00d7"
  },
  {
    "url": "docs/tech-notes/Reverse/python-code-for-hacker-1.html",
    "revision": "107c3f7c80aa98850ce25169c4060864"
  },
  {
    "url": "docs/tech-notes/Reverse/reverse-core-1.html",
    "revision": "a92121ef6e13195f3ecee4b288be5e5a"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "48cd96f521ec59a9d826aaf9048b6544"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ede44a775fcc708e594c93223f3286f"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "60e2c276552aa700c663111e6b40cbc5"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "c92ebaf5b4a717f4b027e1fe4ed3d31e"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "470213fd9b8f701a9252a46388c4adcb"
  },
  {
    "url": "icons/hacker.png",
    "revision": "9cf920769a8615634cc6794495789ab6"
  },
  {
    "url": "icons/logo.png",
    "revision": "0ede44a775fcc708e594c93223f3286f"
  },
  {
    "url": "icons/me.jpg",
    "revision": "745dec484cdf549bbc59c744a9244e8c"
  },
  {
    "url": "icons/nav-logo.png",
    "revision": "0613c7530b51184b9682b435abfb1996"
  },
  {
    "url": "icons/wechat.jpg",
    "revision": "ad2437e3271ca57ad28998ab3e55a4a9"
  },
  {
    "url": "index.html",
    "revision": "b84d2b5dd210ff4e3665a73d6b9a19cb"
  },
  {
    "url": "others/anti-antivirus-technology.html",
    "revision": "25c317e1b0962d3af442667958ca7cf8"
  },
  {
    "url": "others/beancount.html",
    "revision": "8d4cb0089ec386d0c8b3d90704186950"
  },
  {
    "url": "others/dwm.html",
    "revision": "7a7100452250dc26248d459859f04967"
  },
  {
    "url": "others/learning-pip.html",
    "revision": "80c23785b07a697c5c8edc19dd30b1d2"
  },
  {
    "url": "others/manual-kvm-libvmi.html",
    "revision": "5d633dd36059a1816c1c74ef68744778"
  },
  {
    "url": "others/manual-of-xen.html",
    "revision": "125657e7b4ffc3cdcc87659c8b98c8d0"
  },
  {
    "url": "others/master-learning.html",
    "revision": "99779bdaa9c4d1288882769eed52555c"
  },
  {
    "url": "others/mdns.html",
    "revision": "447c4c190ae576cf9db4aa6acacfc05e"
  },
  {
    "url": "others/repo-hub.html",
    "revision": "032b6590d2d9bf570e5a660575ee42cc"
  },
  {
    "url": "projects/analysis-ms-17-010.html",
    "revision": "22c1c6066c91b03d376210337549a74c"
  },
  {
    "url": "projects/archlinux-install.html",
    "revision": "73e13ec8ab6fd40f7265af20de9f47f1"
  },
  {
    "url": "projects/build-website.html",
    "revision": "91d45897bb1ebcb3e278626a2f55142b"
  },
  {
    "url": "projects/bypass-antivirus-technolgy.html",
    "revision": "c8aa4107980bdd1ea26d0ecb2d087064"
  },
  {
    "url": "projects/configing-vps-and-ss.html",
    "revision": "792a29921a9b121893e98cd350ba1f4a"
  },
  {
    "url": "projects/crack-router.html",
    "revision": "b07f587134ed4096781be079a9b5c3a6"
  },
  {
    "url": "projects/idapython-cracking-wechat.html",
    "revision": "06517bce4edd1958370d24dd88d32015"
  },
  {
    "url": "projects/installing-ubuntu.html",
    "revision": "3f28d9566c4667d02f89355bfbcde2d6"
  },
  {
    "url": "projects/manual-debug-windows-on-xen.html",
    "revision": "a6f5e0591f2b4143ce284d3b2893c92f"
  },
  {
    "url": "tag/acsac/index.html",
    "revision": "8bd5852df8e66362134de2119f3fd83d"
  },
  {
    "url": "tag/angr/index.html",
    "revision": "8dc092d624befb5da6b9c81e6e091abe"
  },
  {
    "url": "tag/anti virus/index.html",
    "revision": "c810648f01d44f4385559603541c1593"
  },
  {
    "url": "tag/archlinux/index.html",
    "revision": "cba3c6fdfd38cb07d49e4583bf533d08"
  },
  {
    "url": "tag/beancount/index.html",
    "revision": "9aa33bed7ea61dcf7fd6e1a454c1e48c"
  },
  {
    "url": "tag/ccs/index.html",
    "revision": "bd5a1218a8790562871c1cc48813772e"
  },
  {
    "url": "tag/CL/CD/index.html",
    "revision": "bbd02c35ccfd9b81b798328585c34311"
  },
  {
    "url": "tag/Cpp/index.html",
    "revision": "28c5287506b217ca6fdc63bcde4c9959"
  },
  {
    "url": "tag/Cpp/page/2/index.html",
    "revision": "1592bcab7b95731cabaf368d04a78322"
  },
  {
    "url": "tag/diary/index.html",
    "revision": "54648a4bd5d9fb591deb734495dd7d0f"
  },
  {
    "url": "tag/docker/index.html",
    "revision": "afa74e3124373c3f6bab085e46aed90d"
  },
  {
    "url": "tag/dwm/index.html",
    "revision": "c7b7d5f7b1ef7ab6005d19e233dab2a1"
  },
  {
    "url": "tag/Git/index.html",
    "revision": "f1098f78f637620829530d47da43974d"
  },
  {
    "url": "tag/github action/index.html",
    "revision": "8d006f84c8a56906121a968119c325bc"
  },
  {
    "url": "tag/hexo/index.html",
    "revision": "3f2e6fccfe578ac9d88d183bbbd6598b"
  },
  {
    "url": "tag/idapython/index.html",
    "revision": "09dd83092cd4627e0c9d06d3fc45340d"
  },
  {
    "url": "tag/index.html",
    "revision": "c716c22271293dc09824ac254a4d1631"
  },
  {
    "url": "tag/kernel/index.html",
    "revision": "f2d9eee59bc3b944c1cdb0a241edac13"
  },
  {
    "url": "tag/kvm/index.html",
    "revision": "bd4de6a9b36492b5fb964d99b4704e8c"
  },
  {
    "url": "tag/mDNS/index.html",
    "revision": "b89bbce0d25c3fdc3e711bead8035f59"
  },
  {
    "url": "tag/nginx/index.html",
    "revision": "63c8eee91f5cb3b0503f799a7d9527df"
  },
  {
    "url": "tag/others/index.html",
    "revision": "8bd8cf1b64839b3c0949b421bf1583aa"
  },
  {
    "url": "tag/pacman/index.html",
    "revision": "948a4aed9e69dd8b01563eadecedbabc"
  },
  {
    "url": "tag/paper/index.html",
    "revision": "6403fa2bfecfba0dfa40d5d982045877"
  },
  {
    "url": "tag/pintools/index.html",
    "revision": "f19bb63a03ec5d7ff1024a3f08b2e642"
  },
  {
    "url": "tag/pip/index.html",
    "revision": "9d271d5aa792ceb682ea0c06d5aadf74"
  },
  {
    "url": "tag/pwn/index.html",
    "revision": "4833ae64c8a9b581e4b36f6556b44c8d"
  },
  {
    "url": "tag/Pwn/index.html",
    "revision": "425979fcbd44644d219e58f01be01306"
  },
  {
    "url": "tag/python/index.html",
    "revision": "43539ea4c4884557a9ebebb874e16e3b"
  },
  {
    "url": "tag/Python/index.html",
    "revision": "a1aa3632174f088c70cbd0bd5b70a5ca"
  },
  {
    "url": "tag/qemu/index.html",
    "revision": "33c09954c13d0edadb158384de306f00"
  },
  {
    "url": "tag/rancher/index.html",
    "revision": "f737a031519d3bd2975051dbd2a7d2f7"
  },
  {
    "url": "tag/raspberry/index.html",
    "revision": "d212f3438e1522e602f46ad617b98480"
  },
  {
    "url": "tag/repo hub/index.html",
    "revision": "b35a38b54694ae2df9f1f2a90dbe2afd"
  },
  {
    "url": "tag/reverse/index.html",
    "revision": "3273b99c9c317abc297de768df6f5777"
  },
  {
    "url": "tag/Reverse/index.html",
    "revision": "d6a090f82bf07644885fbbb8150edab4"
  },
  {
    "url": "tag/Reverse/page/2/index.html",
    "revision": "5013ca0a5ba6e4929b6eaa9444bf8fad"
  },
  {
    "url": "tag/router/index.html",
    "revision": "bb6f6e86e27656cd289da9006c025aa3"
  },
  {
    "url": "tag/S&P/index.html",
    "revision": "14cdcf0c9efd75a7c13845017143d185"
  },
  {
    "url": "tag/scoop/index.html",
    "revision": "9aa4af73bf793fb9310e04b8b52bbce0"
  },
  {
    "url": "tag/ubuntu/index.html",
    "revision": "401d36d3e7a93b418dd5357addc14ec8"
  },
  {
    "url": "tag/usenix/index.html",
    "revision": "1577d4c7044c0e069e5da43df44b1674"
  },
  {
    "url": "tag/vim/index.html",
    "revision": "2f232afc99b06780a5ac8af1e208df55"
  },
  {
    "url": "tag/vps/index.html",
    "revision": "7648f4679c0aabcde9eac4d4cd7e7864"
  },
  {
    "url": "tag/vscode/index.html",
    "revision": "988e194f72808f4e9ae6115bb267160a"
  },
  {
    "url": "tag/vuepress/index.html",
    "revision": "e977c95ac88b4917ffb4f2d989e4bd9b"
  },
  {
    "url": "tag/webhook/index.html",
    "revision": "979af76c3a5ee5a08dee8f697d4b9d2e"
  },
  {
    "url": "tag/website/index.html",
    "revision": "8c3400574453d490d11b4bf32829833d"
  },
  {
    "url": "tag/windbg/index.html",
    "revision": "82a8cac5ec3cdfee00d4f8a95c60f48b"
  },
  {
    "url": "tag/writeup/index.html",
    "revision": "5fff08152ace0a7627f439405bb102a5"
  },
  {
    "url": "tag/xen/index.html",
    "revision": "ac40e731837931a4b92dd082e6be69ee"
  },
  {
    "url": "tag/机器学习/index.html",
    "revision": "ef18b27902327ad43a61bc6a2bf345ef"
  },
  {
    "url": "timeline/index.html",
    "revision": "4938167b9e1730ab4057ba7aff018ac6"
  },
  {
    "url": "tools/cl-cd-and-webhooks.html",
    "revision": "1da595bcf0b5ed47e6664b8586764165"
  },
  {
    "url": "tools/docker-1.html",
    "revision": "91b1bfed5ffbbf3532c5d47dcb3f6552"
  },
  {
    "url": "tools/docker-2.html",
    "revision": "8b076f92868d6554969fb5ce2f601e79"
  },
  {
    "url": "tools/github-actions.html",
    "revision": "ab37f32aa95aadf3a2990b9545ce29cf"
  },
  {
    "url": "tools/hexo.html",
    "revision": "411a083b1ebc236a0ff44460ab4d7ae6"
  },
  {
    "url": "tools/nginx.html",
    "revision": "ff4d39093e85ee5a80fd5db26447b394"
  },
  {
    "url": "tools/pacman.html",
    "revision": "aa469e49e111cae4079251189a4e60cc"
  },
  {
    "url": "tools/pintools.html",
    "revision": "85bfc0bbed6d41762b3c15c113ab2d6b"
  },
  {
    "url": "tools/qemu.html",
    "revision": "8f9591a06948fdf0d72f38ab119c1815"
  },
  {
    "url": "tools/rancher.html",
    "revision": "9401a5188ffaaaa4bb4a4eeafd5712c4"
  },
  {
    "url": "tools/raspberry-pi-2.html",
    "revision": "a8fff06c4fab97b05399dbc0a6f26d87"
  },
  {
    "url": "tools/raspberry-pi.html",
    "revision": "cef8b2fd2c7f13387d7bfd7976a397ec"
  },
  {
    "url": "tools/scoop.html",
    "revision": "9b53f32ecafa52aff0ef3f6168e563d2"
  },
  {
    "url": "tools/vim.html",
    "revision": "f15cab15845c61b2bf2f3a722cb71e12"
  },
  {
    "url": "tools/vscode.html",
    "revision": "9a840f871b7c199774c8b93ac783d13a"
  },
  {
    "url": "tools/vuepress.html",
    "revision": "f8664cec009ae61ef83351d718d9ad4c"
  },
  {
    "url": "tools/windbg.html",
    "revision": "438431bd1ecac4c6e12dd6927d3e8276"
  },
  {
    "url": "writeup/2017-cumtctf-final-writeup.html",
    "revision": "681db10f08f6329700409a8cafed07e0"
  },
  {
    "url": "writeup/2018-cumtctf-final-writeup.html",
    "revision": "f8a6ccbbc5167fbbe3ce4cab394bde1d"
  },
  {
    "url": "writeup/2019-04-BlueCTF-writeup.html",
    "revision": "072b775165bd323220d64f1b6306f6bd"
  },
  {
    "url": "writeup/2019-05-YellowCTF-writeup.html",
    "revision": "fcc532a708c960ccb66516d556991c53"
  },
  {
    "url": "writeup/2019-anheng-writeup.html",
    "revision": "8a54122a207a00eed2b00bfb2479c066"
  },
  {
    "url": "writeup/2019-ins-hacker-reverse-writeup.html",
    "revision": "64355e91334e685104353a336d0ecdf9"
  },
  {
    "url": "writeup/index.html",
    "revision": "9a6b67bae5f8dbcafe777ed7f16d1e21"
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
