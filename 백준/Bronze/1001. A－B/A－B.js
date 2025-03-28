const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const a = parseInt(fileData[0]);
const b = parseInt(fileData[1]);

console.log(a - b);
