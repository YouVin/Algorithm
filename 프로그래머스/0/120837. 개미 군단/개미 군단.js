function solution(hp) {
  let ants = 0;

  while (hp > 0) {
    if (hp >= 5) {
      hp = hp-5; //장군 개미 공격력
    } else if (hp >= 3) {
      hp = hp-3; //병정 개미 공격력
    } else {
      hp = hp-1; //일 개미 공격력
    }
    ants++;
  }

  return ants;
}