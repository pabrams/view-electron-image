var fs = require('fs');

// All of the Node.js APIs are available in the preload process.
// It has the same sandbox as a Chrome extension.
window.addEventListener('DOMContentLoaded', () => {
  const replaceText = (selector, text) => {
    const element = document.getElementById(selector)
    if (element) element.innerText = text
  }

  for (const type of ['chrome', 'node', 'electron']) {
    replaceText(`${type}-version`, process.versions[type])
  }

  const images = new Array();
  for (let i=0; i< 10; i++){
    images[i] = `${__dirname}/layer${i}-temp.png`;
  }

  var _img = fs.readFileSync(images[0]).toString('base64');
  var img = new Image();
  img.src = images[0];
  document.body.appendChild(img);
})
