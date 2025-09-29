const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const test = +input[0];
let results = [];

for (let i = 1; i <= test; i++) {
  let [a, b] = input[i].split(' ').map(Number);

  let x = a;
  let y = b;
  while (y !== 0) {
    let temp = x % y;
    x = y;
    y = temp;
  }

  let smallestCommon = (a * b) / x;
  results.push(smallestCommon);
}

console.log(results.join('\n'));
