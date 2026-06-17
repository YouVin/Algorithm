function solution(dartResult) {
    var answer = 0;
    let scores = [];
    let i = 0;
    
    while (i < dartResult.length) {
        // 숫자 긁어오기
        let num = 0;
        // 처음 한글자씩 잘랐을경우
        // for (let i = 0; i < dartResult.length; i++) {
				//			   let num = dartResult[i];
				//			}
        // 10S 면 1 0 씩 따로 들어가버려서 문제 
        
        while (dartResult[i] >= "0" && dartResult[i] <= "9") {
            num = num * 10 + Number(dartResult[i]);
            i++;
        }
        
        // 보너스 - S는 그대로, D는 제곱, T는 세제곱
        let bonus = dartResult[i];
        if (bonus === "D") num = num * num;
        else if (bonus === "T") num = num * num * num;
        i++;
        
        // *는 나랑 이전꺼 둘다 2배, #는 마이너스 <- 이거 처음에 나만 두배함
        let option = dartResult[i];
        if (option === "*") {
            num *= 2;
            if (scores.length > 0) scores[scores.length - 1] *= 2; // <- 이전 세트도 2배
            i++;
        } else if (option === "#") {
            num *= -1;
            i++;
        }
        
        scores.push(num);
    }
    
    // 다 더하기
    for (let j = 0; j < scores.length; j++) {
        answer += scores[j];
    }
    
    return answer;
}