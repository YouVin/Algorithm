const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(' ');
const T = parseInt(input[0]);
const S = parseInt(input[1]);

if (T >= 12 && T <= 16 && S === 0) {
  console.log(320);
} else {
  console.log(280);
}
