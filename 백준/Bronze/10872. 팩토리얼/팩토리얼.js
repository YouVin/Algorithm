const fs = require("fs");
const input = Number(fs.readFileSync(0).toString().trim());

function fact(n) {
  if (n === 0) return 1;
  return n * fact(n - 1);
}

console.log(fact(input));
