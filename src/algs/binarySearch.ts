export const binarySearch = (arr: number[], n: number): number => {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let point = arr[middle];

    if (point === n) {
      return middle;
    }

    if (point > n) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1;
}