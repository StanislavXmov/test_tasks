function containsNearbyDuplicate(nums: number[], k: number): boolean {
  const map: Record<number, number> = {};
  for (let i = 0; i < nums.length; i++) {
    const n = nums[i];
    if (map[n] >= 0) {
      if (Math.abs(map[n] - i) <= k) {
        return true;
      } else {
        map[n] = i;
      }
    } else {
      map[n] = i;
    }
  }
  return false;
};

const nums = [1,2,3,1], k = 3;
console.log(containsNearbyDuplicate(nums, k));
