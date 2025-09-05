const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');

const n = +input[0];
let arr = [];
for(let i=1;i<=n;i++) arr.push(+input[i]);

arr.sort((a,b)=>a-b);

console.log(arr.join('\n'));
