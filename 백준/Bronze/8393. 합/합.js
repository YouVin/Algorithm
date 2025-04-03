const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const n = parseInt(fileData[0]);
let total = 0;
for(let i = 0; i<=n; i++){
  total = total + i;
}
console.log(total);