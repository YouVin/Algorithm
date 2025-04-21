const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

for (let line of input) {
  const [M, F] = line.split(" ").map(Number);
  if (M === 0 && F === 0) break;
  console.log(M + F);
}
