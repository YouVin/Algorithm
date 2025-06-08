let fs    = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

const s = input[0]

const rev = s.split('').reverse().join('');
console.log(s === rev ? 1 : 0);
