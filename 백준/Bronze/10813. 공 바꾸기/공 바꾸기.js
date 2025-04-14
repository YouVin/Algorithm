function main() {
  const data = getData();
  const n = data[0][0]; // 바구니 개수  
  const m = data[0][1]; // 바구니 교환 횟수
  const result = []; // 담을 배열 선언
  
  for(let i = 0; i<n; i++){ // 바구니에 초기 공 넣기 -> 배열은 인덱스 0부터 시작 
    result[i] = i + 1; 
  }

  // 교환 코드
  for(let i = 1; i <= m; i++){ 
    
    // a = 1 b = 2 -> 바구니 1, 2 교환
    const a = data[i][0];  // -> 바구니 시작번호
    const b = data[i][1];  // -> 바구니 끝번호 

    //교환
    // 기존 배열을 복사해둘게 필요하다. -> 복사본
    const temp = result[a - 1]; // a 바구니에 있는 공 번호 -> 기존 값이 temp에 저장
    result[a - 1] = result[b - 1]; // b 바구니에 있는 공을 a 바구니에 넣기
    result[b - 1] = temp;         // 기존 복사해둔 a 바구니 값을 b 바구니에 넣기

  }
  console.log(result.join(' '));
}

function getData() {
  const arr = require("fs").readFileSync(0).toString().trim().split("\n");
  const result = [];
  for (let row of arr) {
    const rowArr = row.split(' ');
    for (let k=0; k<rowArr.length; k++) rowArr[k] = isNaN(rowArr[k]) ? rowArr[k] : parseInt(rowArr[k]);
    result.push(rowArr.length === 1 ? rowArr[0] : rowArr);
  }
  return result.length===1 ? result[0] : result;
}

main();