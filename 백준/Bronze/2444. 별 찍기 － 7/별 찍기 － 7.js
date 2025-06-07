let fs    = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const N = Number(input[0]);

let lines = [];

for (let i = 1; i <= N; i++) {
  lines.push(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
}

for (let i = N - 1; i >= 1; i--) {
  lines.push(' '.repeat(N - i) + '*'.repeat(2 * i - 1));
}

console.log(lines.join('\n'));
