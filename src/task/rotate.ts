export function rotate(nums: number[], k: number): void {
  let _k = k % nums.length;
  const n = nums.splice(nums.length - _k, _k);
  nums.unshift(...n);
};

// const nums = [1,2,3,4,5,6,7], k = 3;
// [5,6,7,1,2,3,4]