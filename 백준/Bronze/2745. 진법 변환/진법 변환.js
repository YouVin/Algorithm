const fs = require('fs');
const parts = fs.readFileSync(0).toString().trim().split(' ');
const n = parts[0];
const b = +parts[1];

let ans = 0;
for (let i = 0; i < n.length; i++) {
  const ch = n[i];
  let d;
  if (ch >= '0' && ch <= '9') {
    d = ch.charCodeAt(0) - '0'.charCodeAt(0);
  } else {
    d = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
  }
  ans = ans * b + d;
}

console.log(ans);
