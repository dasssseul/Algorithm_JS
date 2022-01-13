function solution(N, number) {
  const numberSet = new Array(8).fill().map(() => new Set());
  // 모든 set 요소가 같은 객체를 참조하게 된다!!!
  // const numberSet2 = new Array(8).fill(new Set());

  for (let i = 0; i < 8; i++) {
    numberSet[i].add(Number(String(N).repeat(i + 1)));
    for (let j = 0; j < i; j++) {
      for (const n1 of numberSet[j]) {
        for (const n2 of numberSet[i - j - 1]) {
          numberSet[i].add(n1 + n2);
          numberSet[i].add(n1 - n2);
          numberSet[i].add(n1 * n2);
          numberSet[i].add(n1 / n2);
        }
      }
    }
    if (numberSet[i].has(number)) return i + 1;
  }
  return -1;
}
