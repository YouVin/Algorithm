const fs = require('fs');

const lines = fs.readFileSync(0).toString().trim().split('\n');

let ans = [];
for (const line of lines) {
  const s = line.trim();
  if (s === '0') break;

  const rev = s.split('').reverse().join('');
  ans.push(s === rev ? 'yes' : 'no');
}

console.log(ans.join('\n'));
