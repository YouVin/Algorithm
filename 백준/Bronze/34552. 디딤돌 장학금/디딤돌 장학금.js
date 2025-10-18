const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let index = 0;
let money = [];

for (let i = 0; i < 11; i++) {
  money.push(parseInt(input[index]));
  index++;
}

const studentCount = parseInt(input[index]);
index++;

let sum = 0;

for (let i = 0; i < studentCount; i++) {
  const b = parseInt(input[index]);   // 분위
  const l = parseInt(input[index + 1]); // 평점
  const s = parseInt(input[index + 2]);   // 학점
  index += 3;

  if (s >= 17) {
    if (l >= 2.0) {
      sum = sum + money[b];
    }
  }
}

console.log(sum);
