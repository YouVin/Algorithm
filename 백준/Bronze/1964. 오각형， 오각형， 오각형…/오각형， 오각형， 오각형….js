const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const n = BigInt(input);
const KEY = 45678n;

const part1 = 1n;
const part2 = 4n * n;
const part3 = (3n * n * (n - 1n)) / 2n;

const total = (part1 + part2 + part3) % KEY;

console.log(total.toString());
