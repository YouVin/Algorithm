const fs = require("fs");
const input = fs.readFileSync(0).toString().trim();
const arr = input.split(" ");

const N = Number(arr[0]); 
const m = Number(arr[1]);
const M = Number(arr[2]); 
const T = Number(arr[3]);
const R = Number(arr[4]); 


if (m + T > M) {
  console.log(-1);
  process.exit(0);
}


let pulse = m;    
let exercise = 0; 
let time = 0;    

while (exercise < N) {
    
  time = time + 1;
  if (pulse + T <= M) {
    pulse = pulse + T;
    exercise = exercise + 1;
  } else {
    pulse = pulse - R;
    if (pulse < m) {
      pulse = m;
    }
  }
}

console.log(time);
