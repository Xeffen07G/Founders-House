const fs = require('fs');
let body = fs.readFileSync('body_customized.html', 'utf8');

// 1. Remove the entire #check-hype video div:
// <div id="check-hype" ... </div>
const videoStart = body.indexOf('<div id="check-hype"');
if (videoStart !== -1) {
  // Find closing </div>
  const videoEnd = body.indexOf('</div>', body.indexOf('</video>', videoStart)) + 6;
  console.log('Video found from', videoStart, 'to', videoEnd);
  // Also remove "CHECK HYPE" button from header nav if present
  body = body.replace(/<div style="[^"]*left:1000px;top:90px[^"]*"><a href="\/#check-hype"[^>]*>CHECK HYPE<\/a><\/div>/, '');
  body = body.replace(/<div id="check-hype"[\s\S]*?<\/button><\/div>/, '');
} else {
  console.log('Video not found!');
}

// 2. Adjust offsets of subsequent elements since video (height ~739px) is removed:
// In hhgoa, elements after video were at top: 1438px + 739px = 2176px.
// Let's inspect the top positions of subsequent sections:
// Notice board: top: 2176px
// Past editions: top: 2220px (inside translateY(4750px) or similar)
// If we shift elements up by 739px, everything stays contiguous!

const videoHeight = 739;

// In inline styles: replace top: Xpx or translateY(Xpx)
// Let's check how many elements have top or translateY above 1438:
body = body.replace(/(top|translateY)\s*:\s*(\d+)px/g, (match, prop, valStr) => {
  const val = parseInt(valStr, 10);
  if (val >= 1438) {
    return `${prop}:${val - videoHeight}px`;
  }
  return match;
});

// Also in section height: 16333px - 739px = 15594px
body = body.replace(/16333px/g, (16333 - videoHeight) + 'px');

fs.writeFileSync('body_no_video.html', body);
console.log('Saved body_no_video.html');
