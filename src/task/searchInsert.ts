export function searchInsert(nums: number[], target: number): number {
  let left = 0;
  let right = nums.length - 1;
  let middle = 0;
  let n = 0;

  while (left <= right) {
    middle = Math.floor((left + right) / 2);
    n = nums[middle];
    if (n === target) {
      return middle;
    }
    if (n > target) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  if (target > n) {
    return middle + 1;
  } else {
    return middle;
  }
};