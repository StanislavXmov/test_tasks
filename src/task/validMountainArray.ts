export function validMountainArray(arr: number[]): boolean {
  let dir = true;
  
  if (arr.length < 3) {
    return false;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const n1 = arr[i];
    const n2 = arr[i + 1];
    if (i === 0 && n2 < n1) {
      return false;
    }
    if (n2 === n1) {
      return false;
    }
    if (n1 < n2 && !dir) {
      return false;
    }
    if (n2 < n1 && dir) {
      dir = false;
    }
    
  }

  if (dir) {
    return false;
  }

  return true;
};