function solution(name) {
  let cursorIdx = 0;
  let cnt = 0;
  for (let i = 0; i < name.length; i++) {
    let distance = i - cursorIdx;
    if (distance > name.length - distance) {
      if (name[i] !== 'A') {
        if (name.charCodeAt(i) - 65 > 91 - name.charCodeAt(i)) {
          cnt += 91 - name.charCodeAt(i);
        } else {
          cnt += name.charCodeAt(i) - 65;
        }
        cnt += name.length - distance;
      } else {
        continue;
      }
    } else {
      if (name[i] !== 'A') {
        if (name.charCodeAt(i) - 65 > 91 - name.charCodeAt(i)) {
          cnt += 91 - name.charCodeAt(i);
        } else {
          cnt += name.charCodeAt(i) - 65;
        }
        cnt += distance;
      } else {
        continue;
      }
    }
    cursorIdx = i;
  }
  return cnt;
}

console.log(solution('JAN'));

function solution(name) {
  const arr = [0];
  const answer = [...name].reduce((answer, s, i) => {
    if (s === 'A') {
      if (name[i - 1] != 'A') {
        console.log(name.substring(i), repeatA(name.substring(i)));
        arr.push(repeatA(name.substring(i)) - (i - 1));
        return answer + 1;
      }
    }
    return answer + calc_diff(name, i) + 1;
  }, 0);
  return answer - Math.max(...arr) - 1;
}

function calc_diff(name, i) {
  let diff = name.charCodeAt(i) - 65;
  if (diff > 13) {
    diff = 26 - diff;
  }
  return diff;
}

function repeatA(name) {
  let repeat = 0;

  for (let i = 0; i < name.length; i++) {
    if (name[i] !== 'A') {
      break;
    }
    repeat++;
  }
  return repeat;
}

solution2('AAABCA');
