const array = [5, 9, 10, 3, 8, 3, 2];

// ASCII 문자 순서로 정렬
array.sort();
console.log(array); // [ 10, 2, 3, 3, 5, 8, 9 ]
// 10이 먼저 나오는 이유는 ASCII 문자 '1'이 '2'보다 작기 때문

// 오름차순 정렬
array.sort((a, b) => a - b);
console.log(array); // [ 2, 3, 3, 5, 8, 9, 10 ]

// 내림차순 정렬
array.sort((b, a) => b - a);
console.log(array); // [ 2, 3, 3, 5, 8, 9, 10 ]
