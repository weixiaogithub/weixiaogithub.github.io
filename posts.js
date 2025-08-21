function loadRandomIframe() {
  const iframes = [
    './web/colorful.html',
    './web/planewar.html',
    './web/blackhole.html',
    './web/luopan1.html',
    './web/luopan3',
    './web/sb-bird',
    './web/starmouse.html',
    
  ];

  const randomIndex = Math.floor(Math.random() * iframes.length);
  const randomIframeSrc = iframes[randomIndex];

  const randomIframeElement = document.getElementById('random-iframe');
  const iframeHtml = `<iframe src="${randomIframeSrc}" frameborder="0" width="100%" height="500"></iframe>`;
  randomIframeElement.innerHTML = iframeHtml;
}

// 将 loadRandomIframe() 函数绑定到 window.onload 事件上
window.onload = loadRandomIframe;
