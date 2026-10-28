const fs = require('fs');
const path = require('path');

function findRecentPngs(dir, list = []) {
  try {
    const files = fs.readdirSync(dir);
    for (const f of files) {
      const full = path.join(dir, f);
      try {
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
          if (!full.includes('node_modules') && !full.includes('.git')) {
            findRecentPngs(full, list);
          }
        } else if (f.endsWith('.png') || f.endsWith('.jpg')) {
          if (Date.now() - stat.mtimeMs < 45 * 60 * 1000) {
            list.push({ path: full, size: stat.size, mtime: stat.mtime });
          }
        }
      } catch (e) {}
    }
  } catch (e) {}
  return list;
}

const res = findRecentPngs('C:/Users/sayak/.gemini/antigravity-ide/brain/e9b463d6-23db-4ea5-a57a-142fbd652762');
res.sort((a, b) => b.mtime - a.mtime);
console.log('Recent images:', res.slice(0, 15));
