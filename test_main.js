const fs = require('fs');

const html = fs.readFileSync('hhgoa_raw.html', 'utf8');

// The main element is:
// <main style="position:absolute;left:0;top:0;overflow:visible;width:1440px;height:16333px;transform:scale(1);transform-origin:top left;background:#0B6839" aria-label="HH Goa home page">

// Notice that hhgoa was built using Figma-to-code export where the canvas is fixed 1440px wide and 16333px tall!
// In React, it had:
// transform: scale(window.innerWidth / 1440)
// And section height: 16333px * scale
console.log('Main style in raw:', html.slice(html.indexOf('<main style='), html.indexOf('<main style=') + 200));
