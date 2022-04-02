// num3
// 실패 코드1
function countMatches(grid1, grid2) {
  const graph1 = [];
  const graph2 = [];

  for (let i = 0; i < grid1.length; i++) {
    graph1.push(grid1[i].split(''));
    graph2.push(grid2[i].split(''));
  }

  console.log(graph1, graph2);

  function dfs(x, y) {
    if (x < 0 || x >= graph1.length || y < 0 || y >= graph1.length) {
      return false;
    }
    if (
      (graph1[x][y] === '0' && graph2[x][y] === '0') ||
      (graph1[x][y] === '2' && graph2[x][y] === '2')
    ) {
      return true;
    } else if (graph1[x][y] === '1' && graph2[x][y] === '1') {
      graph1[x][y] = '2';
      dfs(x - 1, y);
      dfs(x, y - 1);
      dfs(x + 1, y);
      dfs(x, y + 1);
      return true;
    }
    return false;
  }

  let answer = 0;
  for (let i = 0; i < graph1.length; i++) {
    for (let j = 0; j < graph1[0].length; j++) {
      if (graph1[i][j] === '1' && graph2[i][j] === '1') {
        if (dfs(i, j)) {
          answer += 1;
        }
      }
    }
  }
  return answer;
}

countMatches([111, 100, 100], ['001', '011', '101']);

// 실패 코드2
function isMap(x, y, grid) {
  return (
    x >= 0 &&
    y >= 0 &&
    x < grid.length &&
    y < grid[0].length &&
    grid[x][y] === 1
  );
}

function getMap(x, y, map, grid) {
  const check = 'X';
  grid[x][y] = check;
  map.push(`${x}x${y}`);

  if (isMap(x - 1, y, grid)) {
    getMap(x - 1, y, map, grid);
  }
  if (isMap(x + 1, y, grid)) {
    getMap(x + 1, y, map, grid);
  }
  if (isMap(x, y - 1, grid)) {
    getMap(x, y - 1, map, grid);
  }
  if (isMap(x, y + 1, grid)) {
    getMap(x, y + 1, map, grid);
  }
  return map;
}

function findMap(grid) {
  let maps = [];
  for (let x = 0; x < grid.length; x++) {
    for (let y = 0; y < grid[0].length; y++) {
      if (grid[x][y] === 1) {
        maps.push(getMap(x, y, maps, grid));
      }
    }
  }
  return maps;
}

let grid1 = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 0, 0],
];

let grid2 = [
  [1, 1, 1],
  [1, 0, 0],
  [1, 0, 1],
];

grid1 = JSON.parse(JSON.stringify(grid1));
grid2 = JSON.parse(JSON.stringify(grid2));
let a = findMap(grid2).map((v) => v.join(' '));
console.log(a);
// for (const i of a) {
//   console.log(i);
// }
// console.log(a);

// console.log(findMap(grid2).map((x) => x.join('')));
