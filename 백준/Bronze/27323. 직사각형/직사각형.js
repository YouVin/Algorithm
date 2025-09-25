const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const A = +input[0];
const B = +input[1];

console.log(A * B);
