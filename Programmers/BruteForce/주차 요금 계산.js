// 2022 KAKAO BLIND RECRUITMENT
// 주차 요금 계산

function solution(fees, records) {
  const result = {};
  const answer = [];
  // 번호 별 주차 요금이 담긴 객체 만들기
  // 시간의 경우 분으로 바꿔서 IN일 경우 -시간, OUT일 경우 +시간
  for (const record of records) {
    let [time, key, move] = record.split(' ');
    let [h, m] = time.split(':');
    time =
      move === 'IN'
        ? -(parseInt(h) * 60 + parseInt(m))
        : parseInt(h) * 60 + parseInt(m);
    const currValue = result[key];
    if (result[key]) {
      result[key] = [...currValue, time];
    } else {
      result[key] = [time];
    }
  }

  // 마지막에 출차되지 않은 차량의 경우 23:59(= 1439분) 넣어주기
  // 배열에 담긴 시간 합 구해주기
  for (const k of Object.keys(result)) {
    if (result[k].length % 2) {
      result[k] = [...result[k], 1439];
    }
    result[k] = result[k].reduce((acc, curr) => acc + curr);
  }

  // 차량 번호가 작은 순으로 정렬
  const sortedResult = Object.entries(result).sort((a, b) => a[0] - b[0]);
  const [baseTime, basePrice, min, minPrice] = fees;
  // 요금 계산
  for (const [_, t] of sortedResult) {
    if (t <= baseTime) {
      answer.push(basePrice);
    } else {
      let price = basePrice;
      let time = Math.ceil((t - baseTime) / min);
      price += time * minPrice;
      answer.push(price);
    }
  }
  return answer;
}

solution([1, 461, 1, 10], ['00:00 1234 IN']);
