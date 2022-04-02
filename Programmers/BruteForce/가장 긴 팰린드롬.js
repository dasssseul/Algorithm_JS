function solution(s) {
  const isPalindrome = (string) => {
    const half = Math.floor(string.length / 2);
    for (let i = 0; i < half; i++) {
      if (string[i] !== string[string.length - i - 1]) {
        return false;
      }
    }
    return true;
  };

  for (let i = s.length; i > 0; i--) {
    for (let j = 0; j <= s.length - i; j++) {
      if (isPalindrome(s.slice(j, i + j))) {
        return i;
      }
    }
  }
}
