const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');
const n = parseInt(lines[0], 10);
const cnt = new Array(26).fill(0);

for (let i = 1; i <= n; i++) {
  const name = lines[i];
  const ch = name[0];                
  const idx = ch.charCodeAt(0) - 97;
  cnt[idx] = cnt[idx] + 1;
}

let ans = '';
for (let i = 0; i < 26; i++) {
  if (cnt[i] >= 5) {
    ans += String.fromCharCode(97 + i);
  }
}

if (ans.length === 0) console.log('PREDAJA');
else console.log(ans);
