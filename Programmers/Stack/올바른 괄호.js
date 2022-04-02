function solution(s) {
  let cnt = 0;
  if (s[0] === ')') return false;
  for (const i of s) {
    if (i === '(') {
      cnt += 1;
    } else if (cnt >= 1 && i === ')') {
      cnt -= 1;
    }
  }
  return cnt ? false : true;
}
