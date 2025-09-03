const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split(/\s+/);

let t = +input[0];
let idx = 1;

const apt = Array.from({length:15},()=>Array(15).fill(0));

for (let i=1;i<=14;i++) apt[0][i]=i;

for (let f=1;f<=14;f++){
  for (let r=1;r<=14;r++){
    apt[f][r]=apt[f][r-1]+apt[f-1][r];
  }
}

let ans = [];
while(t--){
  let k = +input[idx++], n = +input[idx++];
  ans.push(apt[k][n]);
}

console.log(ans.join('\n'));
