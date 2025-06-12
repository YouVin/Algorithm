let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let N = parseInt(input, 10);

let seconds = 0;  
let k = 1;        

while (N > 0) {
  if (N < k) {
    k = 1;
  }
  N = N-k;
  seconds++;
  k++;
}

console.log(seconds);
