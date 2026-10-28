const fs = require('fs');
const lines = fs.readFileSync('C:/Users/sayak/.gemini/antigravity-ide/brain/e9b463d6-23db-4ea5-a57a-142fbd652762/.system_generated/logs/transcript.jsonl', 'utf8').split('\n');
const userInputs = lines.filter(l => l.indexOf('"USER_INPUT"') !== -1);
const lastInput = userInputs[userInputs.length - 1];
console.log(lastInput);
