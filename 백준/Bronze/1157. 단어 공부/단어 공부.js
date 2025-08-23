const fs = require('fs');

const s = fs.readFileSync(0).toString().trim().toUpperCase();

const cnt = Array(26).fill(0);
for (const ch of s) {
  cnt[ch.charCodeAt(0) - 65]++;
}

let max = 0;
let ans = '';
for (let i = 0; i < 26; i++) {
  if (cnt[i] > max) {
    max = cnt[i];
    ans = String.fromCharCode(65 + i);
  } else if (cnt[i] === max) {
    ans = '?';
  }
}

console.log(ans);
