const fs = require("fs");
const line = fs.readFileSync(0).toString().trim();

const stopWord = new Set(['i','pa','te','ni','niti','a','ali','nego','no','ili']);

const words = line.split(' ');
let answer = '';

for (let i = 0; i < words.length; i++) {
  const w = words[i];
  if (i > 0 && stopWord.has(w)) continue;
  answer += w[0].toUpperCase();
}

console.log(answer);
