function findMin(nums: number[]): number {
  const length = nums.length;
  let leftIndex = 0;
  let rightIndex = length - 1;

  let min = nums[0];
  while (leftIndex <= rightIndex) {
    const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

    if (nums[0] <= nums[middleIndex] && nums[middleIndex] > nums[rightIndex]) {
      leftIndex = middleIndex + 1;
    } else if (
      nums[0] <= nums[middleIndex] &&
      nums[middleIndex] <= nums[rightIndex]
    ) {
      return nums[0];
    } else {
      if (
        nums[leftIndex] <= nums[middleIndex] &&
        nums[middleIndex] <= nums[rightIndex]
      ) {
        return nums[leftIndex];
      } else {
        if (min > nums[middleIndex]) {
          min = nums[middleIndex];
          rightIndex = middleIndex;
        } else {
          rightIndex = middleIndex;
        }
      }
    }
  }

  return min;

  // const length = nums.length;
  // const lastIndex = length - 1;
  // let leftIndex = 0;
  // let rightIndex = length - 1;
  // let i = -1;

  // while (leftIndex <= rightIndex) {
  //   const middleIndex = Math.floor((leftIndex + rightIndex) / 2);

  //   if (nums[middleIndex] < nums[lastIndex]) {
  //     rightIndex = middleIndex - 1;
  //     i = middleIndex;
  //   } else if (nums[middleIndex] > nums[lastIndex]) {
  //     leftIndex = middleIndex + 1;
  //   } else {
  //     i = lastIndex;
  //     rightIndex = middleIndex - 1;
  //   }
  // }

  // return nums[i];
}

// const num = [3, 4, 5, 1, 2];
// const num = [4, 5, 6, 7, 0, 1, 2];
// const num = [2];
// const num = [5, 1, 2, 3, 4];
// console.log(findMin(num));
