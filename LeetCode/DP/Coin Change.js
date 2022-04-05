// 접근 방식 - 동전 교환 알고리즘(DP)
// 화폐의 단위로 for문을 돌면서, 해당 화폐로 0 ~ amount를 만들 수 있는 최소 동전의 개수를 넣어준다
// 만약 화페 단위가 2인 경우 1은 만들 수 없으므로 infinity, 2는 1개로 만들 수 있으므로 1
// 7을 만들 경우 2원+2원+3원 보다 2원+5원으로 만들 때 동전의 개수가 적으므로 DP 점화식을 세울수 있다
// 즉, minCoins[j] = min(minCoins[j], minCoins[j-coins[i]] + 1)

function solution(coins, amount) {
  const minCoins = new Array(amount + 1).fill(Infinity);
  minCoins[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let j = coins[i]; j < minCoins.length; j++) {
      minCoins[j] = Math.min(minCoins[j], minCoins[j - coins[i]] + 1);
    }
  }
  return minCoins[amount] !== Infinity ? minCoins[amount] : -1;
}

console.log(solution([1, 2, 5], 11));
console.log(solution([2], 3));
console.log(solution([1], 0));
console.log(solution([186, 419, 83, 408], 6249));
