// 접근 방식
// s의 각 letter별 for문을 돌면서
// 이미 letter가 나온적이 있다면 slice를 이용해 letter 다음 인덱스를 기준으로 자르고
// 현재 letter를 붙여준다
// 이때 maxLen을 최댓값으로 업데이트 해준다

function solution(s) {
  let str = '';
  let maxLen = 0;
  for (let i = 0; i < s.length; i++) {
    let letter = s[i];
    let idx = str.indexOf(s[i]);
    if (idx !== -1) {
      str = str.slice(idx + 1);
    }
    str += letter;
    maxLen = Math.max(str.length, maxLen);
  }
  return maxLen;
}

console.log(solution(' '));
console.log(solution('au'));
console.log(solution('dvdf'));
