const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(fileData[0]);
const b = Number(fileData[1]);

console.log(a < b ? '<' : a > b ? '>' : '==');