const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const A = Number(input[0]);
const B = Number(input[1]);
const C = Number(input[2]);

console.log(A + B - C);

const strResult = (input[0] + input[1]) - input[2];
console.log(strResult);
