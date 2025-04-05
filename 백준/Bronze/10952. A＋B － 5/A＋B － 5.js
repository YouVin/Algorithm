const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

let i = 0;
while (true) {
  const line = fileData[i++];
  const parts = line.split(" ");
  const a = parseInt(parts[0]);
  const b = parseInt(parts[1]);

  if (a === 0 && b === 0) break;

  console.log(a + b);
}