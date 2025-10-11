const fs = require('fs');
const temps = fs.readFileSync(0).toString().trim().split('\n').map(Number);

for (let i = 1; i < temps.length; i++) {
  if (temps[i] === 999) break;
  const diff = temps[i] - temps[i - 1];
  console.log(diff.toFixed(2));
}
