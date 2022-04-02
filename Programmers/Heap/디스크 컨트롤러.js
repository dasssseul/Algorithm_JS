// 우선 순위 큐
// 꼭 다시 풀어볼 것!
function solution(jobs) {
  let currentTime = 0;
  let currentIndex = 0;
  let totalTime = 0;
  let priorityQueue = [];
  jobs.sort((a, b) => a[0] - b[0]);
  while (jobs.length > currentIndex || priorityQueue.length > 0) {
    if (jobs.length > currentIndex && currentTime >= jobs[currentIndex][0]) {
      priorityQueue.push(jobs[currentIndex++]);
      priorityQueue.sort((a, b) => a[1] - b[1]);
      continue;
    }
    if (priorityQueue.length !== 0) {
      currentTime += priorityQueue[0][1];
      totalTime += currentTime - priorityQueue[0][0];
      priorityQueue.shift();
    } else {
      currentTime = jobs[currentIndex][0];
    }
  }
  return Math.floor(totalTime / jobs.length);
}
