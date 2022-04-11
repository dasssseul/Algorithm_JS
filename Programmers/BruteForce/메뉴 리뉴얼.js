function solution(orders, course) {
  let menu = new Map();
  function combination(order, idx, len, prev) {
    if (prev.length === len) {
      let currentKey = prev.sort().join('');
      if (menu.has(currentKey)) {
        menu.set(currentKey, menu.get(currentKey) + 1);
      } else {
        menu.set(currentKey, 1);
      }
      return;
    }

    for (let i = idx; i < order.length; i++) {
      combination(order, i + 1, len, [...prev, order[i]]);
    }
  }

  orders.map((order) => {
    course.map((num) => combination(order, 0, num, []));
  });

  menu = [...menu.entries()].filter((item) => item[1] > 1);

  let result = [];
  course.map((num) => {
    let max = 0;
    const tmp = menu.filter(([k, v]) => {
      if (max < v && k.length === num) {
        max = v;
      }
      return k.length === num;
    });
    tmp.filter((item) => item[1] === max).map((item) => result.push(item[0]));
  });

  return result.sort();
}

console.log(
  solution(['ABCFG', 'AC', 'CDE', 'ACDE', 'BCFG', 'ACDEH'], [2, 3, 4])
);
