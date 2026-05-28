function solution(lottos, win_nums) {
  var count = 0;
  var zeroCount = 0;  
  var answer = [];


  var rank = [6, 6, 5, 4, 3, 2, 1];

  for(var i = 0; i < lottos.length; i++){
    if(win_nums.includes(lottos[i])) count++;
    if(lottos[i] === 0) zeroCount++;
  }

  answer[0] = rank[count + zeroCount]; 
  answer[1] = rank[count];            
  console.log(answer);

  return answer;
}
