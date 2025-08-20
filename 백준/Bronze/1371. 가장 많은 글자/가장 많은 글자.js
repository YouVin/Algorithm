const fs = require('fs');
const input = fs.readFileSync(0).toString(); 
const cnt = Array(26).fill(0);

for (const ch of input) {
  if (ch >= 'a' && ch <= 'z') {
    cnt[ch.charCodeAt(0) - 97]++;
  }
}

let max = 0;
for (let i = 0; i < 26; i++) {
  if (cnt[i] > max) max = cnt[i];
}

let ans = '';
for (let i = 0; i < 26; i++) {
  if (cnt[i] === max) {
    ans += String.fromCharCode(97 + i);
  }
}

console.log(ans);
