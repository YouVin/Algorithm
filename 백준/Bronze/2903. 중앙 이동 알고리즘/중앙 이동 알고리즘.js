const fs = require('fs');

const n = parseInt(fs.readFileSync(0).toString().trim(), 10);

let side = 2;
for (let i = 0; i < n; i++) side = side * 2 - 1;

console.log(side * side);
