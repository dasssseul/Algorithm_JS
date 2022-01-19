function solution(board) {
  let row = board.length;
  let column = board[0].length;
  let answer = 0;
  if (row < 2 || column < 2) return 1;
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < column; j++) {
      if (board[i][j] > 0) {
        board[i][j] =
          Math.min(board[i - 1][j - 1], board[i - 1][j], board[i][j - 1]) + 1;
        answer = Math.max(answer, board[i][j]);
      }
    }
  }
  return answer * answer;
}
