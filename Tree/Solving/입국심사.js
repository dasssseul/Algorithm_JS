// 이분 탐색
// 시작점, 끝점, 중간점 설정

function solution(n, times) {
  times.sort((a, b) => a - b); // 오름차순 정렬
  let start = 0; // 시작점
  let end = times[times.length - 1] * n; // 끝점
  let answer = end; // 최소 시간
  while (start <= end) {
    let mid = Math.floor((start + end) / 2); // 중간점
    let count = times.reduce((acc, curr) => (acc += Math.floor(mid / curr)), 0);
    if (count >= n) {
      answer = Math.min(mid, answer);
      end = mid - 1;
    } else {
      start = mid + 1;
    }
  }
  return answer;
}
