// num 4
// 정답 코드
const a = [29, 36, 57];
const b = [25, 18, 3];
const answer = [];

for (let i = 0; i < a.length; i++) {
  let x, y;
  if (a[i] < b[i]) {
    x = 0;
    y = 0;
  } else if (Math.abs(a[i] - b[i]) & 1) {
    x = 0;
    y = 0;
  } else if (a[i] === b[i]) {
    x = 0;
    y = b[i];
  } else {
    x = (a[i] - b[i]) / 2;
    if ((x & b[i]) == 0) {
      y = x + b[i];
    } else {
      x = 0;
      y = 0;
    }
  }
  answer.push(2 * x + 3 * y);
}

console.log(answer);
