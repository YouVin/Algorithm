function solution(schedules, timelogs, startday) {
    let answer = 0;

    for (let i = 0; i < schedules.length; i++) {
        let success = true;
        let currentDay = startday;
        let limitTime = schedules[i] + 10;

        
        if (limitTime % 100 >= 60) {
            limitTime += 40;
        }
        
        //console.log(limitTime);
        
        for (let j = 0; j < 7; j++) {

            // 평일
            if (currentDay !== 6 && currentDay !== 7) {

                //console.log(timelogs[i][j]);
                console.log(limitTime);
                if (timelogs[i][j] > limitTime) {
                    //console.log(timelogs[i][j]);
                    success = false;
                    break;
                }
            }

            currentDay++;

            // 주말
            if (currentDay > 7) {
                currentDay = 1;
            }
        }

        if (success) {
            answer++;
        }
    }

    return answer;
}