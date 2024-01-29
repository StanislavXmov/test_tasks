export const bubbleSort = (arr: number[]) => {
  const length = arr.length;
  let swapped = true;

  while (swapped) {
    swapped = false;

    for (let i = 0; i < length; i++) {
      const el1 = arr[i];
      const el2 = arr[i + 1];
      if (el1 > el2) {
        arr[i] = el2;
        arr[i + 1] = el1;
        swapped = true;
      }
    }
  }

  return arr;
}