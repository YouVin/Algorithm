const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split("\n");

const t = parseInt(fileData[0]);

for(let i=1; i<=t; i++){
  const data = fileData[i].split(' ');
  const a = parseInt(data[0]);
  const b = parseInt(data[1]);
  console.log(`Case #${i}: ${a + b}`);
}