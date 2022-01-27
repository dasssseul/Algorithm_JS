// num2
const num = 111;
const numStr = String(num);

function checkOne(n) {
  return n === '1';
}
function checkNine(n) {
  return n === '9';
}

let minValue = num;
let maxValue = num;

for (const n of numStr) {
  if (numStr.split('').every(checkNine)) break;
  if (n !== '9') {
    maxValue = numStr.split(n).join('9');
    break;
  }
}

for (let i = 0; i < numStr.length; i++) {
  if (numStr.split('').every(checkOne)) break;
  if (numStr[i] !== '1') {
    minValue =
      i === 0
        ? numStr.split(numStr[i]).join('1')
        : numStr.split(numStr[i]).join('0');
    break;
  } else {
    for (let j = i + 1; j < numStr.length; j++) {
      if (numStr[j] > 1) {
        minValue = numStr.split(numStr[j]).join('0');
        break;
      }
    }
  }
}

console.log(maxValue, minValue);
