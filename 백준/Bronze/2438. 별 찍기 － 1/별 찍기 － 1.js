const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");

const star = Number(fileData);

for (let i = 1; i<=star; i++){
  let line ='';
  for(let j=1;j<=i;j++){
    line += '*';
  }
  console.log(line);
}