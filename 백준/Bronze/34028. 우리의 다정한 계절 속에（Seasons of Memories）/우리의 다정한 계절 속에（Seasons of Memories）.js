let fs = require('fs');

let input = fs.readFileSync('/dev/stdin').toString().trim().split(' ');
let A = parseInt(input[0], 10);
let B = parseInt(input[1], 10);
let C = parseInt(input[2], 10);

const firstIndex = 0;

let seasonIndex;
if (B === 12) {
  let Y = A;
  seasonIndex = (Y - 2014) * 4;
} else if (B === 1 || B === 2) {
  let Y = A - 1;
  seasonIndex = (Y - 2014) * 4;
} else if (3 <= B && B <= 5) {
  let Y = A;
  seasonIndex = (Y - 2015) * 4 + 1;
} else if (6 <= B && B <= 8) {
  let Y = A;
  seasonIndex = (Y - 2015) * 4 + 2;
} else if (9 <= B && B <= 11) {
  let Y = A;
  seasonIndex = (Y - 2015) * 4 + 3;
} else {
  seasonIndex = 0;
}

let count = seasonIndex - firstIndex + 1;
if (count < 1) count = 1;

console.log(count);
