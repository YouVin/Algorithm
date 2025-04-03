const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const num = Number(fileData);

for(let i = 1; i<=9; i++){
  console.log(`${num} * ${i} = ${num*i}`);
}
