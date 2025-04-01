const fs = require("fs");
const fileData = fs.readFileSync(0).toString().trim().split(" ");
let H = parseInt(fileData[0]);
let M = parseInt(fileData[1]);

if(H==0 && M < 45){
  H = 23;
  M = (60 - 45) + M;
  console.log(`${H} ${M}`);
} else if(M < 45){
  H -= 1;
  M = (60 - 45) + M;
  console.log(`${H} ${M}`);
}
else{
  console.log(`${H} ${M-45}`)
}