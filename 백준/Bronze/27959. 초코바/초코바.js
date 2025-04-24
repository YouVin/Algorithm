const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const N = Number(input[0]);
const M = Number(input[1]);

if (100 * N >= M) {
  console.log("Yes");
} else {
  console.log("No");
}
