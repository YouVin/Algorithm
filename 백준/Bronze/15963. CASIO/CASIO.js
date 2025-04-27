const fs = require("fs");
const input = fs.readFileSync("/dev/stdin").toString().trim().split(" ");

const [N, M] = input;

console.log(N === M ? 1 : 0);
