const fs = require('fs');

const a = fs.readFileSync(0).toString().trim().split(/\s+/);

const N = +a[0], M = +a[1];
const arr = [];

for (const x of a.slice(2)) {
  arr.push(+x);
}

arr.sort((x, y) => x - y);

let best = 0;

for (let i = 0; i < N - 2; i++) {
  let l = i + 1, r = N - 1;
  while (l < r) {
    const sum = arr[i] + arr[l] + arr[r];
    if (sum <= M && sum > best) best = sum;
    if (sum > M) r--; else l++;
  }
}

console.log(best);
