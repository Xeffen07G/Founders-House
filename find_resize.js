const fs = require('fs');

function searchFile(file) {
  if (!fs.existsSync(file)) return;
  const content = fs.readFileSync(file, 'utf8');
  const matches = content.match(/.{0,40}(?:window\.innerWidth|resize|1440).{0,40}/g);
  if (matches && matches.length > 0) {
    console.log(file, 'found:', matches.length);
    console.log(matches.slice(0, 5));
  }
}

['05-c3ty_6dwfk.js', '14mrh2-p_w84d.js', '07va7mthvp3ha.js', '13p9l1s3bdu41.js', '2kwt1_qeqtah_.js', '10qk6v6416kh8.js'].forEach(f => {
  searchFile(f);
});
