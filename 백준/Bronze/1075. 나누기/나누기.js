const fs = require('fs');

const input = fs.readFileSync(0).toString().trim().split('\n');
let N = Number(input[0]);
const F = Number(input[1]);

N = Math.floor(N / 100) * 100;

for (let i = 0; i < 100; i++) {
  if ((N + i) % F === 0) {
    if (i < 10) {
      console.log('0' + i);
    } else {
      console.log(i);
    }
    break;
  }
}
