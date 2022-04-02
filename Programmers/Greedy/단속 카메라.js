function solution(routes) {
  let answer = 1;
  routes.sort((a, b) => a[1] - b[1]);
  let camera = routes[0][1];
  for (let i = 1; i < routes.length; i++) {
    if (routes[i][0] > camera) {
      answer++;
      camera = routes[i][1];
    }
  }
  return answer;
}
