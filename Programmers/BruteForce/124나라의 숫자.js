function solution(n) {
  let answer = '';
  const numArr = [4, 1, 2];
  while (n) {
    let remain = n % 3;
    answer = numArr[remain] + answer;
    n = remain ? Math.floor(n / 3) : n / 3 - 1;
  }
  return answer;
}
