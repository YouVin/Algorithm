const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(fileData[0]);

console.log(a >= 90 ? 'A' : a >= 80 ? 'B' : a >= 70 ? 'C' : a >= 60 ? 'D' : 'F');