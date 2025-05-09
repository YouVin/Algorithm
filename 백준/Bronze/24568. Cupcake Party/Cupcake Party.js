const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const R = Number(input[0]);
const S = Number(input[1]);

const total = R * 8 + S * 3;
const ret = total - 28;

console.log(ret);
