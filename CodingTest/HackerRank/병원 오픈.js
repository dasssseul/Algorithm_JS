// num6
// 실패 코드

function hospital(cityNodes, cityFrom, cityTo) {
  const graph = Array.from(Array(cityNodes + 1), () => []);
  const visited = new Array(cityNodes + 1).fill(false);
  visited[0] = true;
  const dp = Array.from(Array(cityNodes + 1), () => [0, 0]);
  let answer = 0;
  for (let i = 0; i < cityNodes - 1; i++) {
    graph[cityFrom[i]].push(cityTo[i]);
    graph[cityTo[i]].push(cityFrom[i]);
  }

  //   const dfs = (node) => {
  //     visited[node] = true;
  //     let state = 0;
  //     for (let i = 0; i < graph[node].length; i++) {
  //       let next = graph[node][i];
  //       if (!visited[next]) {
  //         if (!dfs(next)) {
  //           state++;
  //         }
  //       }
  //     }
  //     if (state) {
  //       answer++;
  //     }
  //     return state;
  //   };

  //   const dfs = (node) => {
  //     let hospital = 1;
  //     let noHospital = 0;
  //     for (const v of graph[node]) {
  //       if (visited[v]) {
  //         continue;
  //       }
  //       visited[v] = true;
  //       dfs(v);
  //       hospital += Math.min(...dp[v]);
  //       noHospital += dp[v][0];
  //     }
  //     dp[node] = [hospital, noHospital];
  //   };

  //   dfs(1);
  //   console.log(dp);
  //   return Math.min(...dp[1]);

  const dfs = (curr, parent) => {
    for (const it of graph[curr]) {
      if (it == parent) continue;
      dfs(it, curr);
      dp[curr][0] += Math.min(dp[it][0], dp[it][1]);
      dp[curr][1] += dp[it][0];
    }

    dp[curr][0] += 1;
  };

  dfs(1, 0);
  return Math.min(...dp[1]);
}

// console.log(
//   hospital(
//     12,
//     [1, 1, 6, 1, 1, 2, 11, 12, 4, 12, 6],
//     [11, 2, 7, 6, 12, 3, 10, 9, 5, 8, 4]
//   )
// );

console.log(hospital(7, [1, 3, 1, 3, 2, 1], [2, 6, 4, 7, 5, 3]));
