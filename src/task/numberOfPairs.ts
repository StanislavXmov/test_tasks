type T = {
  [key: number]: number;
}

export const numberOfPairs = (nums: number[]): number[] => {
  // const obj: Record<string, number> = {};
  let totalRemain = 0;

  // for (const num of nums) {
  //   obj[num] = (obj[num] ?? 0) + 1;
  // }

  const obj: T = nums.reduce((acc, num) => ({
    ...acc,
    [num]: (acc[num] ?? 0) + 1,
  }), {} as T)

  for (const num in obj) {
    totalRemain += obj[num] % 2;
  }

  return [(nums.length - totalRemain) / 2, totalRemain];
}