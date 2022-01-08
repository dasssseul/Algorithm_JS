// 나의 풀이
function solution1(numbers) {
  const strNumbers = numbers.map((v) => [
    ('' + v).repeat(3, '' + v),
    ('' + v).length,
  ]);
  strNumbers.sort().reverse();
  const answer = strNumbers.reduce(
    (prev, curr, i) => prev + curr[0].slice(0, strNumbers[i][1]),
    ''
  );
  // [0, 0, 0, 0]인 경우 '0000'이 아닌 '0'으로 반환해줘야한다
  return answer[0] === '0' ? '0' : answer;
}

function solution2(numbers) {
  const str = numbers.map((num) => String(num)).sort((a, b) => b + a - (a + b));
  if (str.every((a) => a === '0')) {
    return '0';
  } else {
    return str.join('');
  }
}
