// 접근 방식
// 연결 리스트를 이용한 풀이
// l1이 null이 아니거나 l2가 null이 아니거나 carry가 0이 아닐 때 루프를 돌면서
// n1, n2는 현재 연결 리스트의 값, l1, l2는 다음 연결 리스트 노드로 업데이트
// 만약 sum > 9 라면 carry는 1, sum 구할 때 carry도 같이 더해주기
// 구해진 값인 digit으로 연결 리스트 생성
// 생성된 연결 리스트를 이전 노드에 연결 후, 이전 노드로 업데이트

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val;
  this.next = next === undefined ? null : next;
}

function solution(l1, l2) {
  let carry = 0;
  let previousNode = new ListNode();
  const headNode = previousNode;
  while (l1 || l2 || carry) {
    let n1 = 0;
    let n2 = 0;
    if (l1) {
      n1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      n2 = l2.val;
      l2 = l2.next;
    }
    const sum = n1 + n2 + carry;
    carry = sum > 9 ? 1 : 0;
    const digit = sum % 10;
    const currentNode = new ListNode(digit);
    previousNode.next = currentNode;
    previousNode = currentNode;
  }
  return headNode.next;
}

console.log(solution([2, 4, 3], [5, 6, 4]));
console.log(solution([0], [0]));
