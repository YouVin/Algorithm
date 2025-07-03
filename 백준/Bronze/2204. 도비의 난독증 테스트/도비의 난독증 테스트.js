const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let i = 0;

while (true) {
  const n = Number(input[i]);

  if (n === 0) break; 
  const words = [];
 
  for (let j = 1; j <= n; j++) {
    words.push(input[i + j]);
  }
    
  let smallest = words[0];
     
  for (let k = 1; k < words.length; k++) {
    const cur = words[k];

    if (cur.toLowerCase() < smallest.toLowerCase()) {
      smallest = cur;
    }
  }

  console.log(smallest);
  i += n + 1;
}
