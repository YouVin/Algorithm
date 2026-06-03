function solution(N, stages) {
    var answer = [];
    var rates = []; 

    for (let stage = 1; stage <= N; stage++) {

        let current = 0;
        let total = 0;

        for (let i = 0; i < stages.length; i++) {
            if (stages[i] === stage) current++;
            //console.log(current);
            if (stages[i] >= stage) total++;
            //console.log(total);
        }

        let rate = 0;
        rate = current / total;
        console.log(rate);
        
        answer.push(stage);
        rates.push(rate);   
    }

    //answer.sort((a, b) => rates[b] - rates[a] );
    answer.sort((a, b) => rates[b-1] - rates[a-1] );
    console.log(answer);
    return answer;
}