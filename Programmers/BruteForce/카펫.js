function solution(brown, yellow) {
  const carpet = brown + yellow;
  for (let i = 3; i < carpet; i++) {
    if (carpet % i === 0) {
      let width = carpet / i;
      if ((width - 2) * (i - 2) === yellow) {
        return [width, i];
      }
    }
  }
}
