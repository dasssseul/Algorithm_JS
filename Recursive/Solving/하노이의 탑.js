function solution(n) {
  let answer = [];
  const hanoi = (n, start, to, via) => {
    if (n === 1) {
      answer.push([start, to]);
    } else {
      hanoi(n - 1, start, via, to);
      answer.push([start, to]);
      hanoi(n - 1, via, to, start);
    }
  };
  hanoi(n, 1, 3, 2);
  return answer;
}
