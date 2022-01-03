// 인접 행렬
const graph1 = Array.from(Array(5), () => Array(5).fill(false));

// 연결된 부분을 true로, 가중치가 존재한다면 가중치로!
graph1[0][1] = true;
graph1[0][3] = true;
graph1[1][2] = true;

// 인접 리스트
const graph2 = Array.from(Array(5), () => []);

// 연결할 정점을 배열에 추가
graph2[0].push(1);
graph2[0].push(3);
graph2[1].push(2);
