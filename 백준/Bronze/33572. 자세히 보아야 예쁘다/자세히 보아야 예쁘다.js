let fs = require('fs');
let lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let [nStr, mStr] = lines[0].trim().split(' ');

let n = parseInt(nStr, 10);
let M = BigInt(mStr); 

let parts = lines[1].trim().split(' ');
let totalCap = 0n;  
for (let i = 0; i < n; i++) {
  let Ai = BigInt(parts[i]);
  totalCap += (Ai - 1n);
}

if (totalCap >= M) {
  console.log("DIMI");
} else {
  console.log("OUT");
}
