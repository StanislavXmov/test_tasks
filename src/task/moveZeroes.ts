export const moveZeroes = (nums: number[]): void => {
  let count = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count++;
    } else {
      nums[i - count] = nums[i];
      if (count > 0) {
        nums[i] = 0;
      }
    }
  }
}