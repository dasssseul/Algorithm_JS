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
          const [[_, to]] = copiedTickets.splice(idx, 1);
          dfs(to, copiedTickets, newPath);
        }
      });
    }
  };
  dfs('ICN', tickets, []);
  return answer.sort()[0];
}
