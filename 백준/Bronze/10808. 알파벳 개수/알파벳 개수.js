const fs = require('fs');
const input = fs.readFileSync(0).toString().trim();

const counts = Array(26).fill(0);

for (let char of input) {
  const index = char.charCodeAt(0) - 97; // 'a' ~ 'z' → 0 ~ 25
  if (index >= 0 && index <= 26) {       // ❌ 여기! index가 26일 수는 없음!
    counts[index]++;
  }
}

console.log(counts.join(' '));
