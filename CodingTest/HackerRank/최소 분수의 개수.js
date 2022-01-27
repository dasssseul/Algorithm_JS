// num5
// 정답 코드
function minCntFoun(locations) {
  let n = locations.length;
  let dp = new Array(n).fill(-1);
  let leftIdx, rightIdx;
  for (let i = 0; i < n; i++) {
    leftIdx = Math.max(i - locations[i], 0);
    rightIdx = Math.min(i + 1 + locations[i], n);
    dp[leftIdx] = Math.max(dp[leftIdx], rightIdx);
  }

  let cnt = 1;
  let nextIdx = 0;
  rightIdx = dp[0];

  for (let i = 0; i < n; i++) {
    nextIdx = Math.max(nextIdx, dp[i]);
    if (i == rightIdx) {
      cnt++;
      rightIdx = nextIdx;
    }
  }
  return cnt;
}

minCntFoun([1, 2, 1], 3);
