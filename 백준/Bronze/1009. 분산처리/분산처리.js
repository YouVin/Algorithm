const fs = require('fs');
const tok = fs.readFileSync(0).toString().trim().split(/\s+/);

let idx = 0;
const T = parseInt(tok[idx++], 10);
let out = [];

for (let t = 0; t < T; t++) {
  let a = parseInt(tok[idx++], 10) % 10; 
  let b = parseInt(tok[idx++], 10);
  let base = a === 0 ? 10 : a;
  let exp = b;
  let mod = 10;
  let res = 1;

  base = a; 
  while (exp > 0) {
    if (exp & 1) res = (res * base) % mod;
    base = (base * base) % mod;
    exp >>= 1;
  }
  out.push(res === 0 ? 10 : res);
}

console.log(out.join('\n'));
