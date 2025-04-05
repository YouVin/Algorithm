const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
const n = Number(fileData);
let result = '';
for(let i = 0; i< n/4; i++){
  result += "long ";
}
console.log(result + "int");