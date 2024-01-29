export const cocktailSort = (arr: number[]) => {
  let isSorted = true;
  let start = 0;
  let end = arr.length - 1;

  while (isSorted) {
    isSorted = false;
    for (let i = start; i < end; i++) {
      const el1 = arr[i];
      const el2 = arr[i + 1];
      if (el1 > el2) {
        arr[i] = el2;
        arr[i + 1] = el1;
        isSorted = true;
      }
    }

    if (!isSorted) {
      break;
    }

    isSorted = false;
    end--;

    for (let i = end - 1; i >= start; i--) {
      const el1 = arr[i];
      const el2 = arr[i + 1];
      if (el1 > el2) {
        arr[i] = el2;
        arr[i + 1] = el1;
        isSorted = true;
      }
    }
    start++;
  }

  return arr;
}