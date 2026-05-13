function solution(s) {
    // 0 1 2 3 4 5 6 7 8 9 
    // zero one two three four five six seven eight nine
    
    // s -> one4seveneight 
    // answer -> 1478
    
    // zero = 0 one = 1 two = 2 이런식으로 대체를 해줘야함.
    // 그렇다면 일단 for문으로 문자열 s 에 들어온 애들을 확인을 하고 그후 다시 s를 숫자로 변환
    // 필요한 변수 ? 비교할 문자열이 필요 -> Num[] zero ~ nine 까지 있는애로
    // for(let i = 0; i<s.length; i++) -> s[i] 부분이 ex) one 이 되면 1로 ->  Num[i]에 들어가 있는 단어인지? 확인
    // if(s.inclundes(Num[i])) 즉 zero ~ nine 을 담고 있는 Num[] 배열에 있는게 s[i]에 포함 된다면 ?
    // replaceAll("찾는단어","바꾸는 녀석") 쓰면 되네
    // 즉 i 번 돌면서, zero 가 있으면 바꾸는 느낌인데 ..  
    const Nums = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    for(let i = 0; i<Nums.length; i++){
        if(s.includes(Nums[i])){
            s = s.replaceAll(Nums[i],i); 
        }
    }
    
    return Number(s); 
}