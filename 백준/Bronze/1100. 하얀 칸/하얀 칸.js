const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

let count = 0;

for (let r = 0; r < 8; r++) {
  for (let c = 0; c < 8; c++) {
    if (input[r][c] === 'F' && (r + c) % 2 === 0) {
      count++;
    }
  }
}

console.log(count);
