let fs = require('fs');
let data = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let first = data[0].split(' ');
let N = parseInt(first[0], 10);
let Q = parseInt(first[1], 10);

let B = [];
for (let i = 0; i < N; i++) {
  B[i] = parseInt(data[1 + i], 10);
}

let queries = [];
for (let i = 0; i < Q; i++) {
  queries[i] = parseInt(data[1 + N + i], 10);
}

for (let qi = 0; qi < Q; qi++) {
  let T = queries[qi];
  let sum = 0;
  for (let i = 0; i < N; i++) {
    sum += B[i];
    if (T < sum) {
      console.log(i + 1);
      break;  
    }
  }
}
