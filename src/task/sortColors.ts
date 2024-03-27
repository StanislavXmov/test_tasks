export const sortColors = (nums: number[]) => {
  // const count: number[] = [0, 0, 0];
  // for (let i = 0; i < nums.length; i++) {
  //   count[nums[i]]++;
  // }
  // let index = 0;
  // for (let j = 0; j < 3; j++) {
  //   while (count[j]--) {
  //     nums[index++] = j;
  //   }
  // }

  let low = 0;
  let high = nums.length - 1;
  let i = 0;
  while (i < high) {
    if (nums[i] === 0) {
      [nums[low], nums[i]] = [nums[i], nums[low]];
      low++;
      i++;
    } else if (nums[i] === 1) {
      i++;
    } else if (nums[i] === 2) {
      [nums[high], nums[i]] = [nums[i], nums[high]];
      high--;
    }
  }
}