const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n').map(Number);

const N = input[0]; 
const W = input[1]; 

let score = N * 10;
if (N >= 3) {
  score += 20;
}

if (N === 5) {
  score += 50;
}

if (W > 1000) {
  score -= 15;
}

if (score < 0) {
  score = 0;
}

console.log(score);
