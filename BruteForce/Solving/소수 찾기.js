function solution(numbers) {
  let primeNumbers = new Set();

  const numbersArr = numbers.split('');
  const determinePrime = (number) => {
    for (let i = 2; i < Math.floor(number ** 0.5) + 1; i++) {
      if (number % i === 0) {
        return false;
      }
    }
    primeNumbers.add(number);
  };

  const mergeNumbers = (arr, str) => {
    if (arr.length > 0) {
      for (let i = 0; i < arr.length; i++) {
        const temp = [...arr];
        temp.splice(i, 1);
        mergeNumbers(temp, str + arr[i]);
      }
    }
    if (parseInt(str) > 1) {
      determinePrime(parseInt(str));
    }
  };
  mergeNumbers(numbersArr, '');
  return primeNumbers.size;
}

console.log(solution('011'));
