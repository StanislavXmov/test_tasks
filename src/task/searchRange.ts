
const binarySearch = (nums: number[], target: number, isLeft: boolean): number => {
  let left = 0;
  let right = nums.length - 1;
  let i = -1;

  while (left <= right) {
    let mid = left + Math.ceil((right - left) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    } else {
      i = mid;
      if (isLeft) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }

  return i;
}

export const searchRange = (nums: number[], target: number): number[] => {
  let left = binarySearch(nums, target, true);
  let right = binarySearch(nums, target, false);

  return [left, right];
}