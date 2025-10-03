const fs = require('fs');
const s = fs.readFileSync(0).toString().trim();

let total = 1, streak = 1;
for (let i = 1; i < s.length; i++) {
  if (s.charCodeAt(i) > s.charCodeAt(i - 1)) streak++;
  else streak = 1;
  total += streak;
}

console.log(total);
