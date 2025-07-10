export const binarySearch = (arr: number[], n: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let point = arr[middle];

    if (point === n) {
      return middle;
    }

    if (point > n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
};

export function search(nums: number[], target: number): number {
  const find = (left: number, right: number) => {
    if (left > right) {
      return -1;
    }

    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    }

    if (nums[mid] > target) {
      return find(left, mid - 1);
    } else {
      return find(mid + 1, right);
    }
  };

  return find(0, nums.length - 1);
}
