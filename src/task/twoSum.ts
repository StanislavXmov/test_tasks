export const twoSum = (arr: number[], target: number) => {
  for (let i = 0; i < arr.length - 1; i++) {
    const n1 = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      const n2 = arr[j];
      if (n1 + n2 === target) {
        return [i, j];
      }
    }
  }

  return [];
}

export const twoSum2 = (arr: number[], target: number) => {
  const nums: Record<string, number> = {};

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    const d = target - n;
    if (d in nums) {
      return [nums[d], i];
    }
    nums[n] = i;
  }

  return [];
}