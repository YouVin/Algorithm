let fs = require('fs');
let lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

let firstLine = lines[0].split(' ');
let boxCount = parseInt(firstLine[0], 10);    
let bookCount = parseInt(firstLine[1], 10);  

let boxCapacity = [];
let capParts = lines[1].split(' ');
for (let i = 0; i < boxCount; i++) {
  boxCapacity[i] = parseInt(capParts[i], 10);
}

let bookSize = [];
let sizeParts = lines[2].split(' ');
for (let j = 0; j < bookCount; j++) {
  bookSize[j] = parseInt(sizeParts[j], 10);
}

let totalWaste = 0;
let currentBox = 0;  
let usedSpace = 0;   

for (let j = 0; j < bookCount; j++) {
  let thisBook = bookSize[j];
  while (true) {
    if (usedSpace + thisBook <= boxCapacity[currentBox]) {
      usedSpace += thisBook;
      break;
    } else {
      totalWaste += (boxCapacity[currentBox] - usedSpace);
      currentBox += 1;
      usedSpace = 0;
    }
  }
}

if (currentBox < boxCount) {
  totalWaste += (boxCapacity[currentBox] - usedSpace);
  for (let k = currentBox + 1; k < boxCount; k++) {
    totalWaste += boxCapacity[k];
  }
}

console.log(totalWaste);
