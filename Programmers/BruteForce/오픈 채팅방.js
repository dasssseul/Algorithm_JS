// 2019 KAKAO BLIND RECRUITMENT
// 구현 - 오픈 채팅방
function solution(record) {
  let answer = [];
  const map = new Map();
  for (const arr of record) {
    const [word, id, nickName] = arr.split(' ');
    if (word === 'Leave') {
      answer.push([id, '님이 나갔습니다.']);
      continue;
    }
    if (word === 'Enter') {
      answer.push([id, '님이 들어왔습니다.']);
    }
    map.set(id, nickName);
  }
  return answer.map((arr) => map.get(arr[0]) + arr[1]);
}
