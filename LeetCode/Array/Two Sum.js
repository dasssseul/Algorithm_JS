// 접근 방식
// 이중 for문을 돌면서 두 수를 더한 수가 target과 같을 경우
// 두 수의 인덱스 값 반환

function solution(nums, target) {
  for (let i = 0; i < nums.length - 1; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
}
