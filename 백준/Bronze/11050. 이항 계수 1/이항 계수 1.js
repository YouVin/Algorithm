const fs = require('fs');
const [N, K] = fs.readFileSync(0).toString().trim().split(' ').map(Number);

function fact(x){
  let res = 1;
  for(let i=2;i<=x;i++) res *= i;
  return res;
}

const ans = fact(N) / (fact(K) * fact(N-K));
console.log(ans);
