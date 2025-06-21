const input = require('fs').readFileSync('/dev/stdin').toString().trim();

const holeMap = {
  B: 2,
  A: 1, D: 1, O: 1, P: 1, Q: 1, R: 1,
  a: 1, b: 1, d: 1, e: 1, g: 1, o: 1, p: 1, q: 1,
  '@': 1
};

let count = 0;

for (const ch of input) {
  count += holeMap[ch] || 0;
}

console.log(count);
