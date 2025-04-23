const fs = require("fs");
const input = fs.readFileSync(0).toString().trim().split(" ");

const K = input[0]; // 과자 가격
const N = input[1]; // 과자 개수
const M = input[2]; // 현재 가진 돈

const total = K * N; // 필요한 총 금액
const shortage = total - M;

if (shortage > 0) {
  console.log(shortage);
} else {
  console.log(0);
}
