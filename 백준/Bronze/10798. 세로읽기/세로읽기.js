const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');

let maxLen = 0;
for (let i = 0; i < 5; i++) {
  if (lines[i].length > maxLen) {
    maxLen = lines[i].length;
  }
}

let result = '';
for (let col = 0; col < maxLen; col++) {
  for (let row = 0; row < 5; row++) {
    if (col < lines[row].length) {  
      result += lines[row][col];
    }
  }
}

console.log(result);
