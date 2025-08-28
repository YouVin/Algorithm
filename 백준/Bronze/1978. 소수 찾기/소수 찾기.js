const fs = require('fs');

const a = fs.readFileSync(0).toString().trim().split(/\s+/);

const N = +a[0];
const nums = [];
for (const x of a.slice(1)) nums.push(+x);

let cnt = 0;

for (const n of nums) {
  if (n < 2) continue;
  let prime = true;
  for (let d = 2; d * d <= n; d++) {
    if (n % d === 0) { prime = false; break; }
  }
  if (prime) cnt++;
}

console.log(cnt);
