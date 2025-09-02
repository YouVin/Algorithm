const fs = require('fs');

const input = fs.readFileSync(0).toString().trim();
const N = +input;

const d = String(N).length;
const start = Math.max(1, N - 9 * d);

const digitSum = (x) => {
  let s = 0;
  while (x > 0) { s += x % 10; x = (x / 10) | 0; }
  return s;
};

for (let m = start; m < N; m++) {
  if (m + digitSum(m) === N) {
    console.log(m);
    process.exit(0);
  }
}
console.log(0);
