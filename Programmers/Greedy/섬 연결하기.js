function solution(n, costs) {
  const parent = new Array(n).fill(0);
  costs.sort((a, b) => a[2] - b[2]);
  let answer = 0;
  for (let i = 1; i < n; i++) {
    parent[i] = i;
  }

  const findParent = (parent, x) => {
    if (parent[x] !== x) {
      parent[x] = findParent(parent, parent[x]);
    }
    return parent[x];
  };

  const unionParent = (parent, a, b) => {
    a = findParent(parent, a);
    b = findParent(parent, b);

    if (a < b) {
      parent[b] = a;
    } else {
      parent[a] = b;
    }
  };

  for (const [start, end, cost] of costs) {
    if (findParent(parent, start) !== findParent(parent, end)) {
      unionParent(parent, start, end);
      answer += cost;
    }
  }
  return answer;
}
