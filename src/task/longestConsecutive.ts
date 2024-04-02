export const longestConsecutive = (nums: number[]): number => {
  const source = new Set(nums);
  let longest = 0;
  for (let i = 0; i < nums.length; i++) {
    if (!source.has(nums[i] - 1)) {
      let seq = nums[i];
      let count = 0;
      while (source.has(seq)) {
        count++;
        seq += 1;
      }
      longest = Math.max(longest, count);
    }
  }

  return longest;
}