// 这是一个最基础的 Service Worker 文件，用于满足PWA安装条件

self.addEventListener('install', (event) => {
  // 安装事件，目前我们什么都不做
  console.log('Service Worker installing.');
});

self.addEventListener('fetch', (event) => {
  // 拦截网络请求，目前我们直接让浏览器处理
  event.respondWith(fetch(event.request));
});
