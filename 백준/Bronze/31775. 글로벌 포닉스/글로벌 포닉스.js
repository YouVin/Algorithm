const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const first = input.map((str) => str[0].toLowerCase());
const feelsu = ["l", "k", "p"];

let count = 0;
for (const i of feelsu) {
  if (first.includes(i)) {
    count++;
  }
}

console.log(count === 3 ? "GLOBAL" : "PONIX");
