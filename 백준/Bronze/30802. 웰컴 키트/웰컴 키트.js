const fs = require('fs');
const a = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number);

const n = a[0];
const sz = a.slice(1, 7);
const t = a[7];
const p = a[8];

let tb = 0;
for (const x of sz) {
  tb += Math.ceil(x / t);
}

const pb = Math.floor(n / p);
const ps = n % p;

console.log(tb);
console.log(pb + ' ' + ps);
