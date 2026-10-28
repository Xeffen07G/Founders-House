const fs = require('fs');
const html = fs.readFileSync('hhgoa_raw.html', 'utf8');

// Find all script src
const regex = /src="(\/_next\/static\/chunks\/[^"]+)"/g;
let m;
while ((m = regex.exec(html)) !== null) {
  console.log('Script:', m[1]);
}
