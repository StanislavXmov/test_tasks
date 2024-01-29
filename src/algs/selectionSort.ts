export const selectionSort = (arr: number[]) => {
  const length = arr.length;

  for (let i = 0; i < length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < length; j++) {
      if (arr[minIndex] > arr[j]) {
        minIndex = j;
      }
    }
    const elMin = arr[minIndex];
    const elCur = arr[i];
    arr[i] = elMin;
    arr[minIndex] = elCur;
  }

  return arr;
}