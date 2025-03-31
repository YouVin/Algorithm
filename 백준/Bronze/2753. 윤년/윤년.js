const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const a = Number(fileData);
console.log(a%4 == 0 && a%100 != 0 || a%400 == 0 ? 1 : 0);