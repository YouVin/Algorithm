const fs = require('fs');
const [a,b] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function gcd(x,y){
  while(y!==0){
    let tmp = x%y;
    x = y;
    y = tmp;
  }
  return x;
}

const g = gcd(a,b);
const l = a*b/g;

console.log(g);
console.log(l);
