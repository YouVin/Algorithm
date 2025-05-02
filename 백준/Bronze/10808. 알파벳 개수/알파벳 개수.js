const fs = require('fs');
const input = fs.readFileSync(0).toString().trim(); 

const counts = Array(26).fill(0); 

for (let char of input) {
  const index = char.charCodeAt(0) - 97; 
  counts[index]++;
}

console.log(counts.join(' '));
