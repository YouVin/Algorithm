const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(' ').map(Number);

let sum = 0;

for (let i = 0; i < input.length; i++) {
  sum += input[i] ** 2; 
}

const result = sum % 10;
console.log(result);
