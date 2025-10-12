const fs = require('fs');
const [Ns, Ms, Ks] = fs.readFileSync(0).toString().trim().split(' ');
let N = parseInt(Ns, 10);
let M = parseInt(Ms, 10);
let K = parseInt(Ks, 10);
let teams = Math.min(Math.floor(N / 2), M);

while (N + M - teams * 3 < K) {
  teams--;
}

console.log(teams);
