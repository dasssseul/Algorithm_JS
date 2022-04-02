// 재귀 함수를 이용한 dfs
// 일주일 뒤 다시 풀어보기
function solution(tickets) {
  let answer = [];
  const dfs = (departure, tickets, path) => {
    let newPath = [...path, departure];
    if (tickets.length === 0) {
      answer.push(newPath);
    } else {
      tickets.map((ticket, idx) => {
        if (ticket[0] === departure) {
          let copiedTickets = [...tickets];
          // splice의 경우 원본 배열을 바꾼다!
          const [[_, to]] = copiedTickets.splice(idx, 1);
          dfs(to, copiedTickets, newPath);
        }
      });
    }
  };
  dfs('ICN', tickets, []);
  return answer.sort()[0];
}
