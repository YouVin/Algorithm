const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

function reverseNumber(str) {
  return parseInt(str.split("").reverse().join(""), 10);
}

const A = reverseNumber(input[0]);
const B = reverseNumber(input[1]);

console.log(Math.max(A, B));
