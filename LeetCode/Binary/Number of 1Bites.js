// 접근 방식
// 1. 부호 없는 정수 형태이므로 이를 2진수로 변환해주는 과정 필요
// 2. match(정규식) 함수를 이용해 1을 포함하는 배열 반환받기
// 3. 배열 내 요소의 개수 세기
// n이 000000000000..0인 경우 match 적용 시 null 값을 반환하므로 예외 처리 필요

function solution(n) {
  const oneArr = n.toString(2).match(/1/g);
  return oneArr ? oneArr.length : 0;
}

console.log(solution(00000000000000000000000000000000));
console.log(solution(00000000000000000000000000001011));
console.log(solution(00000000000000000000000010000000));
