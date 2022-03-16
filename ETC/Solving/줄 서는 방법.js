function solution(n, k) {
  const arr = [];
  let turn = k - 1;
  const answer = [];
  for (let i = 1; i < n + 1; i++) {
    arr.push(i);
  }

  while (arr.length) {
    if (turn === 0) {
      answer.push(...arr);
      break;
    }
    const factorial = fact(arr.length);
    const idx = Math.floor(turn / factorial);
    turn %= factorial;
    answer.push(arr[idx]);
    arr.splice(idx, 1);
  }
  return answer;
}

const fact = (n) => {
  let result = 1;
  for (let i = 1; i < n; i++) {
    result *= i;
  }
  return result;
};

console.log(solution(4, 5));
