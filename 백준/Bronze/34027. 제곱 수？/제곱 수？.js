const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split(/\s+/);

const T = parseInt(input[0], 10);
const results = [];

for (let i = 1; i <= T; i++) {
  const N = +input[i];
  const r = Math.sqrt(N);

  results.push(Number.isInteger(r) ? '1' : '0');
}

console.log(results.join('\n'));
