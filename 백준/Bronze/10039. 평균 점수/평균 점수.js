const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let total = 0;
for (let i = 0; i < 5; i++) {
  const score = parseInt(input[i], 10);
  total += score < 40 ? 40 : score;
}

console.log(total / 5);
