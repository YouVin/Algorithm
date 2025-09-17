const fs = require('fs');
const raw = fs.readFileSync(0).toString().trim().split('\n');

const T = parseInt(raw[0], 10);
let line = 1;
let results = [];

for (let tc = 0; tc < T; tc++) {
  const [Nstr, Dstr] = raw[line].split(' ');
  const N = parseInt(Nstr, 10);
  const D = parseInt(Dstr, 10);
  line++;

  let cnt = 0;

  for (let i = 0; i < N; i++) {
    const [vstr, fstr, cstr] = raw[line].split(' ');
    const v = parseInt(vstr, 10);
    const f = parseInt(fstr, 10);
    const c = parseInt(cstr, 10);
    line++;

    if (f * v >= D * c) {
      cnt++;
    }
  }

  results.push(cnt);
}

console.log(results.join('\n'));
