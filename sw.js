importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/0a825b53d663c7d3b336.js",
    "revision": "8b92ebc8e097d5cb4deab49f94b8ffbf"
  },
  {
    "url": "/_nuxt/246cfd6ac1ac90f4eee8.css",
    "revision": "4abe2a73f9ec32fcef618388e2d3fe5b"
  },
  {
    "url": "/_nuxt/258e256b6e87f0054fda.css",
    "revision": "ed57c4bbaa04e3b6e99553d8b0ef94e2"
  },
  {
    "url": "/_nuxt/3eecb02ae967a1f7ffe8.css",
    "revision": "4f0f09191b778e1aa7b94f26a4fe8f42"
  },
  {
    "url": "/_nuxt/58a86399e5348ede0b59.js",
    "revision": "44196841ef56e36697d6475ed76afe28"
  },
  {
    "url": "/_nuxt/624aecd9539e87448813.js",
    "revision": "51239ad74372c3f7fbf2de39ed3cb1ab"
  },
  {
    "url": "/_nuxt/8993126dd2fc6ce03f7f.js",
    "revision": "4d7b49e4723e865f731f7c558186bef3"
  },
  {
    "url": "/_nuxt/9270bf13df5f0af441e2.js",
    "revision": "7a18230de614fa57f48b148f130a7de9"
  },
  {
    "url": "/_nuxt/aba6c932212ad9dffae8.js",
    "revision": "ff8e01968259711ef3a4d3d3fec5ef0b"
  },
  {
    "url": "/_nuxt/ad7125b20431b7ddbbe0.css",
    "revision": "6aa4f359bc71497c736030f1d4e602de"
  },
  {
    "url": "/_nuxt/b8e50e91aef2d0693b66.js",
    "revision": "f2bc78bb379164b73b692f0bafd4da87"
  },
  {
    "url": "/_nuxt/bb5abd2d8daa264ec02b.js",
    "revision": "f50a5809dd3d0c5ab75ff686fe5ce740"
  },
  {
    "url": "/_nuxt/c8f8844a3ee78008bf82.js",
    "revision": "f111451ec1e7fdf31a017db0f389ed60"
  },
  {
    "url": "/_nuxt/d91b594e0acfda8be081.js",
    "revision": "c88a40654ed439b7665bbf1d461d6058"
  },
  {
    "url": "/_nuxt/de976dfe2f158b1f097f.js",
    "revision": "c5511bda36c49e7f7dbfd75f2e970c40"
  }
], {
  "cacheId": "adidas-github-io",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
