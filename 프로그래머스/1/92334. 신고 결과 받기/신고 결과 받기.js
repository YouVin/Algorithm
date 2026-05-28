function solution(id_list, report, k) {
  
    // 이용자의 ID 문자열 id_list
    // 각 이용자가 신고한 이용자의 ID 정보가 담긴 문자열 report
    // 정지 기준이 되는 신고 횟수 k >= 2 
    // report 에서 공백단위로 이용자와 신고자 나누기. -> split(' ')
    // answer 배열에는 각 이용자가 받은 , id_list에 따른 받은 이메일 갯수 담기
    
    var answer = [];

    for(let i = 0; i< id_list.length; i++){
        answer[i] = 0;
    }
    
    // 중복... 처리 ? 
    // [...new Set(str)];
    var newReport = [...new Set(report)];
    
    var count = {};
    for(let i = 0; i< newReport.length; i++){
        // 결국 split 시키면 report [1] 이 신고 당한 사람이니까//
        let target = newReport[i].split(' ')[1];
         
        // 타겟이 처음 들어온거면? 다시 초기화 시키고 넣어야하는데
        if(count[target] === undefined){
            count[target] = 0;
        }
        count[target]++;
    }
    
    // 객체마다 신고 당한 사람과 count 까지는 count에 들어가 있음.
    // 이제 신고 목록 돌면서 메일 가는지 k >= 2 인지 확인.
    // 근데 이제 처음 id_list 배열 순으로, report 숫자 k 확인하고, 메일 받는거 확인.
    for (let i = 0; i < newReport.length; i++){
        let reporter = newReport[i].split(' ')[0]; // 신고 한 사람
        let target = newReport[i].split(' ')[1]; // 신고 당한 사람
        
        // k 큰지 확인 해야하니까.
        
        if(count[target] >= k) {
        for( let j = 0; j< id_list.length; j++){
            if(id_list[j] === reporter){
                answer[j]++;
                break;
                }
            }
        }
    }
    
    return answer;
}