const fs = require('fs');
const s = fs.readFileSync(0).toString().trim();

let starIdx = -1;
let digits = [];
for (let i = 0; i < 13; i++) {
  if (s[i] === '*') {
    starIdx = i;
    digits.push(null);
  } else {
    digits.push(+s[i]);
  }
}

for (let d = 0; d <= 9; d++) {
  digits[starIdx] = d;
  let sum = 0;
  for (let i = 0; i < 12; i++) {
    sum += (i % 2 === 0 ? digits[i] : 3 * digits[i]);
  }
  const m = (10 - (sum % 10)) % 10;
  if (m === digits[12]) {
    console.log(d);
    break;
  }
}
