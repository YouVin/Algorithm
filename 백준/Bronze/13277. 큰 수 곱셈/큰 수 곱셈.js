const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const A = BigInt(input[0]);
const B = BigInt(input[1]);

console.log((A * B).toString());
