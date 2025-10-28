const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const n = +input[0];
const files = [];

for (let i = 1; i <= n; i++) {
  files.push(input[i].trim());
}

const len = files[0].length;
let pattern = "";

for (let pos = 0; pos < len; pos++) {
  let same = true;
  const firstChar = files[0][pos];

  for (let i = 1; i < n; i++) {
    if (files[i][pos] !== firstChar) {
      same = false;
      break;
    }
  }

  if (same) {
    pattern += firstChar;
  } else {
    pattern += "?";
  }
}

console.log(pattern);
