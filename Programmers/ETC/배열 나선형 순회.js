// LeetCode Spiral Matrix2

const generateMatrix = (n) => {
  let colBegin = 0;
  let rowBegin = 0;
  let colEnd = n - 1;
  let rowEnd = n - 1;
  let num = 1;
  const matrix = Array.from(Array(n), () => []);

  while (rowBegin <= rowEnd && colBegin <= colEnd) {
    for (let i = colBegin; i <= colEnd; i++) {
      matrix[rowBegin][i] = num++;
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      matrix[i][colEnd] = num++;
    }
    colEnd--;

    for (let i = colEnd; i >= colBegin; i--) {
      matrix[rowEnd][i] = num++;
    }
    rowEnd--;

    for (let i = rowEnd; i >= rowBegin; i--) {
      matrix[i][colBegin] = num++;
    }
    colBegin++;
  }
  return matrix;
};

console.log(generateMatrix(3));

// 시계, 반시계 방향인 경우 소용 돌이 문제
const solution = (clockwise, n) => {
  const matrix = Array.from(Array(n), () => []);
  let right = 0;
  let left = n - 1;
  let up = n - 1;
  let down = 0;
  let num = 1;
  while (right <= left && down <= up) {
    if (clockwise) {
      let currNum = num;
      for (let i = right; i < left; i++) {
        matrix[right][i] = num++;
      }
      num = currNum;

      for (let i = left; i >= right; i--) {
        matrix[left][i] = num++;
      }
      num = currNum;

      for (let i = down; i < up; i++) {
        matrix[i][up] = num++;
      }
      num = currNum;

      for (let i = up; i > down; i--) {
        matrix[i][down] = num++;
      }
    } else {
      let currNum = num;
      for (let i = right; i < left; i++) {
        matrix[left][i] = num++;
      }
      num = currNum;

      for (let i = left; i > right; i--) {
        matrix[right][i] = num++;
      }
      num = currNum;

      for (let i = down; i < up; i++) {
        matrix[i][down] = num++;
      }
      num = currNum;

      for (let i = up; i > down; i--) {
        matrix[i][up] = num++;
      }
    }
    right++;
    left--;
    down++;
    up--;
  }
  if (n % 2) {
    let m = Math.floor(n / 2);
    matrix[m][m] = num;
  }
  return matrix;
};

console.log(solution(false, 6));
console.log(solution(true, 5));
console.log(solution(false, 9));
