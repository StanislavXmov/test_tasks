function search(nums: number[], target: number): number {
  let l = 0;
  let r = nums.length - 1;
  const find = (left: number, right: number) => {
    if (nums[left] === target) {
      return left;
    }
    if (left >= right) {
      return -1;
    }
    const m = Math.floor((left + right) / 2);
    if (nums[m] === target) {
      return m;
    }
    if (nums[0] <= nums[m]) {
      if (nums[0] <= target && target <= nums[m]) {
        return find(left, m);
      } else {
        return find(m + 1, right);
      }
    } else {
      if (nums[m] < target && target <= nums[nums.length - 1]) {
        return find(m + 1, right);
      } else {
        return find(left, m);
      }
    }
  };
  return find(l, r);

  // const length = nums.length;
  // let leftIndex = 0;
  // let rightIndex = length - 1;
  // while (leftIndex < rightIndex) {
  //   console.log({ leftIndex, rightIndex });
  //   const midIndex = Math.floor((leftIndex + rightIndex) / 2);
  //   console.log({ midIndex });
  //   if (nums[0] <= nums[midIndex]) {
  //     console.log("CASE nums[0] <= nums[midIndex]");
  //     if (nums[0] <= target && target <= nums[midIndex]) {
  //       rightIndex = midIndex;
  //     } else {
  //       console.log("CASE");

  //       leftIndex = midIndex + 1;
  //     }
  //   } else {
  //     if (nums[midIndex] < target && target <= nums[length - 1]) {
  //       leftIndex = midIndex + 1;
  //     } else {
  //       rightIndex = midIndex;
  //     }
  //   }
  // }
  // return nums[leftIndex] == target ? leftIndex : -1;
}

const nu = [8, 9, 2, 3, 4],
  ta = 9;

// const nu = [4, 5, 6, 7, 0, 1, 2],
//   ta = 2;

// const nu = [1, 3, 5],
//   ta = 2;
// const nu = [4, 5, 6, 7, 8, 1, 2, 3],
//   ta = 2;

// const nu = [8, 1, 2, 3, 4, 5, 6, 7],
//   ta = 1;

console.log(search(nu, ta));
