function solution(nums) {
  if (nums === null) {
    return [];
  } else if (nums !== null) {
    return nums.sort((a, b) => a - b);
  }
}

const solution = (nums) => (nums !== null ? nums.sort((a, b) => a - b) : []);
