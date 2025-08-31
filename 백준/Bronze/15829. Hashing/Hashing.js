const fs = require('fs');

const a = fs.readFileSync(0).toString().trim().split('\n');
const L = +a[0];
const s = a[1];

const M = 1234567891n;
const r = 31n;

let h = 0n;
let p = 1n;

for (let i = 0; i < L; i++) {
  const v = BigInt(s.charCodeAt(i) - 96);
  h = (h + v * p) % M;
  p = (p * r) % M;
}

console.log(h.toString());
