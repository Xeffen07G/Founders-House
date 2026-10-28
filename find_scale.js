const fs = require('fs');
const js = fs.readFileSync('chunk_scale.js', 'utf8');

// Search for scale or 1440 or resize
const matches = js.match(/.{0,50}(?:1440|scale|transformOrigin).{0,50}/g);
console.log('Matches:', matches ? matches.slice(0, 10) : 'none');
