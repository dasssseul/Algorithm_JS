function solution(k, dungeons) {
  const visited = new Array(dungeons.length).fill(false);
  let cnt = 0;

  const dfs = (k, currentCnt) => {
    cnt = Math.max(currentCnt, cnt);
    for (let i = 0; i < dungeons.length; i++) {
      const [need, want] = dungeons[i];
      if (need <= k && !visited[i]) {
        visited[i] = true;
        dfs(k - want, currentCnt + 1);
        visited[i] = false;
      }
    }
  };
  dfs(k, 0);
  return cnt;
}
