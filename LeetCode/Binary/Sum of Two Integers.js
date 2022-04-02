// 접근 방식
// 비트 연산자 &, ^, <<의 이해 필요
// 1. a & b를 1만큼 왼쪽으로 쉬프트 연산 했을 경우 carry되는 수가 된다 = b로 업데이트
// 2. a ^ b는 carry 적용 되지 않은 밑에 수가 된다 = a로 업데이트
// 3. carry되는 수 b가 0이 될 때까지 1, 2 반복
// 4. 0이 됐을 때 a 값 반환

function solution(a, b) {
  if (a === 0) {
    return b;
  }
  if (b === 0) {
    return a;
  }
  while (b !== 0) {
    let carry = a & b;
    a = a ^ b;
    b = carry << 1;
  }
  return a;
}

console.log(solution(2, 3));
