let fs = require('fs');
let lines = fs.readFileSync('/dev/stdin').toString().trim().split('\n');
let count = parseInt(lines[0].trim(), 10);
let longestTime = 0;
let shortestLength = 5001;

for (let i = 1; i <= count; i++) {
  let parts = lines[i].trim().split(' ');
  let time = parseInt(parts[0], 10);
  let length = parseInt(parts[1], 10);

  if (time > longestTime) {
    longestTime = time;
  }

  if (length < shortestLength) {
    shortestLength = length;
  }
}

let product = longestTime * shortestLength;
let rem = product % 7;
let sticker = rem + 1;

console.log(sticker);
