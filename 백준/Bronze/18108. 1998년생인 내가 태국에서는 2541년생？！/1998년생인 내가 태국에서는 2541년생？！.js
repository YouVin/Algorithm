const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const buddismYear = parseInt(fileData[0]);
const result = buddismYear - 543;
console.log(result);