// 나의 풀이
function solution(arr) {
  let len = arr.length - 1;
  for (let i = 0; i < len; i++) {
    let a = arr.pop();
    let b = arr.pop();
    let gcd = getGCD(a, b);
    let lcm = gcd * (a / gcd) * (b / gcd);
    arr.push(lcm);
  }
  return arr[0];
}

const getGCD = (a, b) => {
  // a는 b보다 커야한다는 가정
  while (b !== 0) {
    let temp = a;
    a = b;
    b = temp % b;
  }
  return a;
};

// 다른 사람의 풀이
const gcd = (a, b) => {
  return a % b ? gcd(b, a % b) : b;
};

function solution(arr) {
  return arr.reduce((a, b) => (a * b) / gcd(a, b));
}

console.log(solution([2, 6, 8, 14]));
