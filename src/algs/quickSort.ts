export const quickSort = (arr: number[]): number[] => {
  if (arr.length <= 1) {
    return arr;
  }
  
  let pivotIndex = Math.floor(Math.random() * arr.length);
  let pivot = arr[pivotIndex];

  let left = [];
  let right = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === pivotIndex) {
      continue;
    }
    if (arr[i] < pivot) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  
  return quickSort(left).concat(pivot, quickSort(right));
}