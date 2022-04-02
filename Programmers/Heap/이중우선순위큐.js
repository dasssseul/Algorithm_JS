function solution(operations) {
  let q = [];
  operations.forEach((operation) => {
    let [oper, num] = operation.split(' ');
    if (oper === 'I') {
      q.push(num);
    } else {
      q.sort((a, b) => a - b);
      if (num === '-1') {
        q.shift();
      } else {
        q.pop();
      }
    }
  });
  q.sort((a, b) => a - b);
  return q.length ? [+q[q.length - 1], +q[0]] : [0, 0];
}
