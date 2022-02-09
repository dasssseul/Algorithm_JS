function solution(n, left, right) {
  const array = [];
  for (let i = left; i <= right; i++) {
    const x = Math.floor(i / n);
    const y = i % n;
    array.push(Math.max(x, y) + 1);
  }
  return array;
}
