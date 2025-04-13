function main() {
  const data = getData(); // [N, numbers[], v]
  const numbers = data[1];
  const v = data[2];

  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === v) count++;
  }

  console.log(count);
}

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");

  const N = parseInt(arr[0]);

  const strNums = arr[1].split(' ');
  const numbers = [];
  for (let i = 0; i < strNums.length; i++) {
    numbers.push(parseInt(strNums[i]));
  }

  const v = parseInt(arr[2]);

  return [N, numbers, v];
}

main();
