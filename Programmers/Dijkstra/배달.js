function solution(N, road, K) {
  const distance = new Array(N + 1).fill(Infinity);
  const graph = Array.from(Array(N + 1), () => []);
  for (const [start, end, dist] of road) {
    graph[start].push([start, end, dist]);
    graph[end].push([end, start, dist]);
  }
  const q = [];
  q.push(graph[1]);
  distance[1] = 0;
  while (q.length > 0) {
    let current = q.shift();
    for (const [start, end, dist] of current) {
      if (distance[end] > distance[start] + dist) {
        distance[end] = distance[start] + dist;
        q.push(graph[end]);
      }
    }
  }
  return distance.filter((dist) => dist <= K).length;
}
