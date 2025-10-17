const fs = require('fs');
const parts = fs.readFileSync(0).toString().trim().split(' ');

const a = parseInt(parts[0], 10);
const b = parseInt(parts[1], 10);
const n = parseInt(parts[2], 10);
const k = parseInt(parts[3], 10);

const p = k - 1;             
const pIndex = Math.floor(p / n); 

const i = Math.floor(pIndex / b) + 1; 
const j = (pIndex % b) + 1;         

console.log(i + ' ' + j);
