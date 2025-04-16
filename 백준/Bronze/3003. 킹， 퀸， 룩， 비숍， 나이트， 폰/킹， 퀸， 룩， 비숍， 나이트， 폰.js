const fs = require("fs");

const input = fs.readFileSync(0).toString().trim().split(" ").map(Number);

const standard = [1, 1, 2, 2, 2, 8];

const result = standard.map((value, index) => value - input[index]);
console.log(result.join(" "));
