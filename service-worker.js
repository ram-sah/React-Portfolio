"use strict";var precacheConfig=[["/React-Portfolio/index.html","4fb20b4a0348e42d1f5d351058f8a666"],["/React-Portfolio/static/css/main.ec600679.css","a4a3b1f50fe818c7cbc8aea7defb885c"],["/React-Portfolio/static/js/main.bce2c0bc.js","0d45fff181de9f1cf87430675fb99f6e"],["/React-Portfolio/static/media/Budget-Tracker.3606550f.png","3606550fcd4c7ade21ea0393e7621fca"],["/React-Portfolio/static/media/Employee-Summary.8599b70f.jpg","8599b70f77f3f25f89a73e546cc90353"],["/React-Portfolio/static/media/Employee-Tracker.4cbe45b6.jpg","4cbe45b624e49f4d36887dc4a27693f2"],["/React-Portfolio/static/media/Fitness-Tracker.e796ea22.png","e796ea22aeaadbdfb6681ac59a6a30e6"],["/React-Portfolio/static/media/RAM-resume.a3c6dc3e.pdf","a3c6dc3ea94d47445337a7385aff1208"],["/React-Portfolio/static/media/code-quiz.dad017a3.png","dad017a3465d004c31da6cabd943a9ae"],["/React-Portfolio/static/media/employee-directory.61853f6a.png","61853f6a46824403928bb6a77d8579dc"],["/React-Portfolio/static/media/glyphicons-halflings-regular.448c34a5.woff2","448c34a56d699c29117adc64c43affeb"],["/React-Portfolio/static/media/glyphicons-halflings-regular.89889688.svg","89889688147bd7575d6327160d64e760"],["/React-Portfolio/static/media/glyphicons-halflings-regular.e18bbf61.ttf","e18bbf611f2a2e43afc071aa2f4e1512"],["/React-Portfolio/static/media/glyphicons-halflings-regular.f4769f9b.eot","f4769f9bdb7466be65088239c12046d1"],["/React-Portfolio/static/media/glyphicons-halflings-regular.fa277232.woff","fa2772327f55d8198301fdb8bcfc8158"],["/React-Portfolio/static/media/notetaker.f0f518de.jpg","f0f518de9ad6917721142d84387a4be5"],["/React-Portfolio/static/media/password-generator.c8746be3.png","c8746be3ee78e05844544c23dc512085"],["/React-Portfolio/static/media/project-2.73766e66.png","73766e66a8cffe1f6912b1a0804a96b4"],["/React-Portfolio/static/media/ram.47baf04d.jpg","47baf04dde630a9f7a78cf31148fbf7b"],["/React-Portfolio/static/media/scheduler.5f0e8419.jpg","5f0e84195d580b60043eb80a041a859a"],["/React-Portfolio/static/media/weather.833821bc.jpg","833821bc475e2add1a7aabe593648a7c"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return a.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(r){return setOfCachedUrls(r).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return r.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!a.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,a=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),r="index.html";(e=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),e=urlsToCacheKeys.has(a));var n="/React-Portfolio/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(a=new URL(n,self.location).toString(),e=urlsToCacheKeys.has(a)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});