const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let t = +input[0];
let i = 1;
let answer = [];

while (t > 0) {
  let n = +input[i];
  let m = +input[i + 1];
  i += 2;

  let result = n + m - 1;
  answer.push(result);
  t--;
}

console.log(answer.join('\n'));
