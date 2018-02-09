// importScripts('/node_modules/workbox-sw/build/importScripts/workbox-sw@2.1.2');

 importScripts('https://unpkg.com/workbox-sw@0.0.2/build/importScripts/workbox-sw.prod.v0.0.2.js');

const workboxSW = new WorkboxSW({clientsClaim: true});

// This array will be populated by workboxBuild.injectManifest() when the
// production service worker is generated.
workboxSW.precache([]);

workboxSW.router.setDefaultHandler({
  handler: workboxSW.strategies.staleWhileRevalidate()
});
