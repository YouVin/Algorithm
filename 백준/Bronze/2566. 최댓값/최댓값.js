const fs = require('fs');

const nums = fs.readFileSync(0).toString().trim().split(/\s+/).map(Number)

let max = -1, r = 1, c = 1;
for (let i = 0; i < 9; i++) {
  for (let j = 0; j < 9; j++) {
    const v = nums[i * 9 + j];
    if (v > max) {
      max = v;
      r = i + 1;
      c = j + 1;
    }
  }
}

console.log(max + '\n' + r + ' ' + c);
