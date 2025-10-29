const fs = require("fs");

const input = fs.readFileSync(0).toString().trim(); 

const a = input.slice(0, 2); 
const b = input.slice(3, 5); 
const c = input.slice(6, 8); 

function isHour(x) {
  const v = +x;
  return v >= 1 && v <= 12;
}

function isMinOrSec(x) {
  const v = +x;
  return v >= 0 && v <= 59;
}

let count = 0;
if (isHour(a) && isMinOrSec(b) && isMinOrSec(c)) count++;
if (isHour(a) && isMinOrSec(c) && isMinOrSec(b)) count++;
if (isHour(b) && isMinOrSec(a) && isMinOrSec(c)) count++;
if (isHour(b) && isMinOrSec(c) && isMinOrSec(a)) count++;
if (isHour(c) && isMinOrSec(a) && isMinOrSec(b)) count++;
if (isHour(c) && isMinOrSec(b) && isMinOrSec(a)) count++;

console.log(count);
