const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

for (let i = 0; i < input.length; i++) {
  if (input[i] === '# 0 0') break;

  const [name, ageStr, weightStr] = input[i].split(' ');

  const result = (ageStr > 17 || weightStr >= 80) ? 'Senior' : 'Junior';
  console.log(`${name} ${result}`);
}
