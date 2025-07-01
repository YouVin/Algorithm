const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const n = Number(input[0]);
const word = input[1];

let sum = 0;           
let current = "";      

for (let i = 0; i < word.length; i++) {
  const char = word[i];

  if (char >= '0' && char <= '9') {
    current += char;
  } else {

    if (current.length > 0) {
      sum += Number(current);
      current = "";
    }
  }
}

if (current.length > 0) {
  sum += Number(current);
}

console.log(sum);
