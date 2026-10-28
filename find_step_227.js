const fs = require('fs');
const readline = require('readline');

const rl = readline.createInterface({
  input: fs.createReadStream('C:/Users/sayak/.gemini/antigravity-ide/brain/e9b463d6-23db-4ea5-a57a-142fbd652762/.system_generated/logs/transcript_full.jsonl')
});

rl.on('line', (line) => {
  if (line.includes('"step_index":227')) {
    const obj = JSON.parse(line);
    console.log(JSON.stringify(obj, null, 2));
    process.exit(0);
  }
});
