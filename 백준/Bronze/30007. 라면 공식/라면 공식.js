const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const N = Number(input[0]);
for (let i = 1; i <= N; i++) {
  const [A, B, X] = input[i].split(' ').map(Number);
  const W = A * (X - 1) + B;
  console.log(W);
}
