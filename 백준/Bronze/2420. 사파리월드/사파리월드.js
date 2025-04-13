function main() {
  const input = require('fs').readFileSync(0).toString().trim().split(' ');

  const N = parseInt(input[0]);
  const M = parseInt(input[1]);

  const diff = N > M ? N - M : M - N; // 절댓값 구현
  console.log(diff);
}

main();
