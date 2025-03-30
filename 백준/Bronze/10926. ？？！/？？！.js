const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const id = fileData[0];
const result = id + "??!";
console.log(result);