function main() {
  const data = getData();
  // data에서 값을 꺼내서 문제 해결하는 코드 작성
  const n1 = data.a; // 472
  const n2 = data.b; // 385

  const n3 = n1 * (n2 % 10); // 472 * 5
  const n4 = n1 * (parseInt(n2/10) % 10); // 472 * (38 % 10) = 472 * 8
  const n5 = n1 * parseInt(n2/100); // 472 * 3
  const n6 = n3 + n4*10 + n5*100;

  console.log(n3);
  console.log(n4);
  console.log(n5);
  console.log(n6);
}
main();

/**
 * 표준 입력장치(콘솔)에서 두 줄로 입력된 줄당 한 건의 데이터를 읽어서 숫자로 변환한 후
 * 객체에 a, b 속성으로 저장하여 반환한다.
 * @returns {object} a, b 속성에 입력값이 저장된 객체
 */
function getData() {
  const fs = require("fs");
  const fileData = fs.readFileSync(0).toString().trim().split("\n");

  const result = new Object();

  result.a = isNaN(fileData[0]) ? fileData[0] : parseInt(fileData[0]);
  result.b = isNaN(fileData[1]) ? fileData[1] : parseInt(fileData[1]);
  return result;
}