function solution(n, k) {
    var answer = 0;
    var yang = parseInt(n * 12000);
    var um = parseInt(k * 2000);
    if(n >= 10){
        um -= 2000 * Math.floor(n/10)
    }
    answer = yang + um; 
    
    
    
    
    return answer;
}

//배열 x 
// 10인분 -> 음료수 하나
// 1인분 12,000원
// 음료수 2,000원
// 양꼬치 -> n 인분 음료수 -> k 개
// total =? 