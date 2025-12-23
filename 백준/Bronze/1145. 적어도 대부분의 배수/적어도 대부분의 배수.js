const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const nums = input.split(/\s+/).map(Number);

let x = 1;

while (true) {
  let count = 0;

  for (let i = 0; i < 5; i++) {
    if (x % nums[i] === 0) count++;
  }

  if (count >= 3) {
    console.log(x);
    break;
  }

  x++;
}