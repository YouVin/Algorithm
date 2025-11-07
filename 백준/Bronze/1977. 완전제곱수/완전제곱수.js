const fs = require("fs");
const lines = fs.readFileSync(0).toString().trim().split(/\s+/);

const M = +lines[0];
const N = +lines[1];

const start = Math.ceil(Math.sqrt(M));
const end = Math.floor(Math.sqrt(N));

if (start > end) {
  console.log(-1);
} else {
  let sum = 0;
  for (let k = start; k <= end; k++) sum += k * k;
  console.log(sum + "\n" + (start * start));
}
