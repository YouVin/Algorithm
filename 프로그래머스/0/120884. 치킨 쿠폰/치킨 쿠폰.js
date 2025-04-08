// 100 마리 시켜먹음 -> 쿠폰 100장 
// 쿠폰 100장으로 10마리를 서비스함 -> 쿠폰 10장
// 쿠폰 10장으로 1마리를 서비스함 -> 쿠폰 1장 
// 총 받은 서비스는? 10 + 1 = 11마리

function solution(chicken) {
    let coupons = chicken;                      //쿠폰 개수 = 치킨 개수
    let service = 0;

    while (coupons >= 10) {                     // 반복문으로 다음에 받을 보너스 & 쿠폰 남기기
        service += Math.floor(coupons / 10);    // 받은 서비스에 더해주기
        coupons = (coupons % 10) + Math.floor(coupons / 10);      // 남은 쿠폰 + 새로 생긴 쿠폰 = 내가 가진 쿠폰 
    }
    return service;
}

