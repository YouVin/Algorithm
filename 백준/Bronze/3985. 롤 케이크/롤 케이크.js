const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
const len = +input[0];
const n = +input[1];   
const start = [];
const end = [];
let expectNum = 0;
let expectMax = -1;

for (let i = 0; i < n; i++) {
  const [p, k] = input[i + 2].split(" ").map(Number);
  start.push(p);
  end.push(k);
  const cnt = k - p + 1;
  if (cnt > expectMax) {
    expectMax = cnt;
    expectNum = i + 1;
  }
}

const cake = new Array(len + 1).fill(0);
const got = new Array(n + 1).fill(0);
for (let i = 0; i < n; i++) {
  for (let j = start[i]; j <= end[i]; j++) {
    if (cake[j] === 0) {
      cake[j] = i + 1;
      got[i + 1]++;
    }
  }
}
let realNum = 0;
let realMax = -1;

for (let i = 1; i <= n; i++) {
  if (got[i] > realMax) {
    realMax = got[i];
    realNum = i;
  }
}

console.log(expectNum);
console.log(realNum);
