function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    const board = new Array(n + 1).fill(0);
    board[1] = i;
    dfs(board, 1);
  }

  function dfs(board, row) {
    if (row === n) {
      answer += 1;
    } else {
      for (let i = 1; i <= n; i++) {
        board[row + 1] = i;
        if (isRight(board, row + 1)) {
          dfs(board, row + 1);
        }
      }
    }
  }

  function isRight(board, row) {
    for (let i = 1; i < row; i++) {
      if (board[i] === board[row]) return false;
      if (Math.abs(board[i] - board[row]) === Math.abs(i - row)) return false;
    }
    return true;
  }

  return answer;
}
