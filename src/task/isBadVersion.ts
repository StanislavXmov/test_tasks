const bad = 1;
const n = 1;

function isBadVersion(version: number): boolean {
  if (version >= bad) {
    return true;
  } else {
    return false;
  }
}
 
export const solution = function(isBadVersion: (v: number) => boolean) {

  return function(n: number): number {
    let l = 0;
    let r = n;
    let middle = 0;
    while (l <= r) {
      middle = Math.floor((l + r) / 2);
      if (isBadVersion(middle)) {
        r = middle - 1;
      } else {
        l = middle + 1;
      }
    }
    if (isBadVersion(middle)) {
      return middle;
    } else {
      return middle + 1;
    }
  };
};