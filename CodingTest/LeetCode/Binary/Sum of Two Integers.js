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
