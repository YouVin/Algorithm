const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
const passwords = input.slice(1);

for (let pw of passwords) {
  if (pw.length >= 6 && pw.length <= 9) {
    console.log("yes");
  } else {
    console.log("no");
  }
}
