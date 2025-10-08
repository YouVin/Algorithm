const fs = require('fs');

const [Ns, Ms, Ss] = fs.readFileSync(0).toString().trim().split(/\s+/);
const N = BigInt(Ns);
const M = BigInt(Ms);
const S = BigInt(Ss);
const unmanned = (M + 1n) * S * (100n - N) / 100n; 
const mPlus1 = M * S;
const ans = unmanned < mPlus1 ? unmanned : mPlus1;
console.log(ans.toString());
