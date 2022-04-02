function solution(number, k) {
  const stack = [];
  let count = 0;
  for (const n of number) {
    while (count < k && stack[stack.length - 1] < n) {
      stack.pop();
      count += 1;
    }
    stack.push(n);
  }

  // '98765'인 경우 pop이 안되기 때문에 예외 처리 필요
  while (count < k) {
    stack.pop();
    count += 1;
  }
  return stack.join('');
}
