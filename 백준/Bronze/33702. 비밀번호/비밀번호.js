let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().trim();
let K = parseInt(input, 10);

if (K % 2 === 1) {
  console.log(8);
} else {
  console.log(0);
}
