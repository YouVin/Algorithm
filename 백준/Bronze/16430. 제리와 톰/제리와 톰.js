const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const A = input[0];
const B = input[1];

const P = B - A;
const Q = B;

console.log(`${P} ${Q}`);
