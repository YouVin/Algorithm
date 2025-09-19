const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
const sizeLine = input[0].split(' ');
const N = parseInt(sizeLine[0], 10);
const M = parseInt(sizeLine[1], 10);
let finalAnswer = "";

for (let i = 0; i < N; i++) {
  const aLine = input[1 + i].split(' ');
  const bLine = input[1 + N + i].split(' ');
  let currentRow = "";

  for (let j = 0; j < M; j++) {

    const aValueString = aLine[j];
    const bValueString = bLine[j];
    const aValue = parseInt(aValueString, 10);
    const bValue = parseInt(bValueString, 10);
    const sumValue = aValue + bValue;
    let sumString = "" + sumValue;

    if (j < M - 1) {
      sumString = sumString + " ";
    }

    currentRow = currentRow + sumString;
  }

  if (i < N - 1) {
    finalAnswer = finalAnswer + currentRow + "\n";
  } else {
    finalAnswer = finalAnswer + currentRow;
  }
}

console.log(finalAnswer);
