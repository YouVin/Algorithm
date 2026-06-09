function solution(schedules, timelogs, startday) {
    let answer = 0;

    for (let i = 0; i < schedules.length; i++) {
        let success = true;
        let currentDay = startday;

        let limitTime = schedules[i] + 10;

        if (limitTime % 100 >= 60) {
            limitTime += 40;
        }

        for (let j = 0; j < 7; j++) {

            // 평일
            if (currentDay !== 6 && currentDay !== 7) {

                if (timelogs[i][j] > limitTime) {
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