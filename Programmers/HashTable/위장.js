// Map을 이용한 풀이
function solution1(clothes) {
  const clothesMap = new Map();
  for (const [name, kind] of clothes) {
    const currData = clothesMap.get(kind) || { name: [] };
    clothesMap.set(kind, { name: [...currData.name, name] });
  }
  const nameLength = [...clothesMap].map(([_, { name }]) => name.length);

  return nameLength.reduce((prev, curr) => (prev *= curr + 1), 1) - 1;
}

// 객체를 이용한 풀이
function solution2(clothes) {
  let clothesObj = {};
  for (const [name, kind] of clothes) {
    if (clothesObj[kind]) {
      clothesObj[kind] += 1;
    } else {
      clothesObj[kind] = 1;
    }
  }
  return (
    Object.values(clothesObj).reduce((prev, curr) => (prev *= curr + 1), 1) - 1
  );
}
