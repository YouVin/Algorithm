const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");
let total = 0;

for (let i = 0; i < 5; i++) {
  total += +input[i];
}

console.log(total);
