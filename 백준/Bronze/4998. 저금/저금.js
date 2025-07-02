const fs = require('fs');
const inputText = fs.readFileSync('/dev/stdin').toString().trim();
const lines = inputText.split('\n');

for (let i = 0; i < lines.length; i++) {
  const line = lines[i].trim();

  if (line === '') continue;

  const parts = line.split(' ');
  const N = parseFloat(parts[0]);
  const B = parseFloat(parts[1]); 
  const M = parseFloat(parts[2]); 

  let current = N;
  let year = 0;  


  while (current < M) {
    let interest = current * (B / 100); 
    current = current + interest;       
    year = year + 1;                    
  }

  console.log(year);
}
