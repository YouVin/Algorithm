const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split("\n");

const color = {
  black: 0,
  brown: 1,
  red: 2,
  orange: 3,
  yellow: 4,
  green: 5,
  blue: 6,
  violet: 7,
  grey: 8,
  white: 9
};

const c1 = input[0].trim();
const c2 = input[1].trim();
const c3 = input[2].trim();

const value = color[c1] * 10 + color[c2];
const result = value * (10 ** color[c3]);

console.log(result.toString());
