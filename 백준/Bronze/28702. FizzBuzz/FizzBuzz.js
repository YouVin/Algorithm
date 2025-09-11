const fs = require('fs');
const lines = fs.readFileSync(0).toString().trim().split('\n');
const last = lines[2];
let n;

if (last === 'FizzBuzz') {
  if (!isNaN(+lines[0])) n = +lines[0] + 2;
  else if (!isNaN(+lines[1])) n = +lines[1] + 1;
  else n = +lines[2 - 2];
} else if (last === 'Fizz' || last === 'Buzz') {
  if (!isNaN(+lines[1])) n = +lines[1] + 1;
  else if (!isNaN(+lines[0])) n = +lines[0] + 2;
  else n = 0; 
} else {
  n = +last;
}

n++;

if (n % 15 === 0) console.log("FizzBuzz");
else if (n % 3 === 0) console.log("Fizz");
else if (n % 5 === 0) console.log("Buzz");
else console.log(n);
