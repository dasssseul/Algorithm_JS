function solution(progresses, speeds) {
  const days = progresses.map((pro, idx) =>
    Math.ceil((100 - pro) / speeds[idx])
  );
  let answer = [];
  let cnt = 1;
  let idx = 0;
  for (let i = 1; i < days.length; i++) {
    if (days[idx] < days[i]) {
      answer.push(cnt);
      idx += cnt;
      cnt = 1;
    } else {
      cnt += 1;
    }
  }
  answer.push(cnt);
  return answer;
}
