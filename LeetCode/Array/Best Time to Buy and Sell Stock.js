// 접근 방식
// 현재 인덱스의 수와 다음 인덱스의 수를 비교
// 1. 다음 인덱스의 수가 작을 경우 minPrice와 비교해 더 작은 수로 업데이트
// 2. 다음 인덱스의 수가 클 경우 다음 인덱스의 수 - minPrice 와 answer을 비교해 더 큰 수로 업데이트
// 3. 끝까지 반복 후 answer 리턴

function solution(prices) {
  let answer = 0;
  let minPrice = prices[0];
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      answer = Math.max(answer, prices[i + 1] - minPrice);
    } else {
      minPrice = Math.min(minPrice, prices[i + 1]);
    }
  }
  return answer;
}
console.log(solution([7, 1, 5, 3, 6, 4]));
console.log(solution([2, 4, 1]));
