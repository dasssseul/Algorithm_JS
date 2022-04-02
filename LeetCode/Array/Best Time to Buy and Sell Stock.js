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
