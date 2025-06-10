let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

let idx = 0;
for (let tc = 0; tc < 3; tc++) {
  const N = Number(input[idx]); 
  idx += 1;
  let sum = 0n;
  for (let i = 0; i < N; i++) {
    sum += BigInt(input[idx]);
    idx += 1;
  }
  if (sum > 0) console.log('+');
  else if (sum < 0) console.log('-');
  else console.log('0');
}
