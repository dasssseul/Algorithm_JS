function solution(citations) {
  citations.sort((a, b) => b - a);
  let answer = citations.length;
  for (let i = 0; i < citations.length; i++) {
    if (citations[i] < i + 1) {
      return i;
    }
  }
  return answer;
}
