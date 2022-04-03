// 접근 방식
// n = 1 -> 1, n=2 -> 2, n=3 -> 3, n=4 -> 5
// 점화식 f(n) = f(n-1) + f(n-2)

function solution(n) {
  const way = [0, 1, 2];
  for (let i = 3; i < n + 1; i++) {
    way[i] = way[i - 1] + way[i - 2];
  }

  return way[n];
}
