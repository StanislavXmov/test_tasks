export function maximumSumOfHeights(heights: number[]): number {
  let result = 0;
  const length = heights.length;

  for (let i = 0; i < length; i++) {
    if (i === 0) {
      let arr: number[] = new Array(length).fill(0);
      const h = [...heights];
      arr[i] = heights[i];
      // >
      for (let j = 0; j < length - 1; j++) {
        const i1 = h[j];
        const i2 = h[j + 1];
        if (i1 < i2) {
          arr[j + 1] = h[j];
          h[j + 1] = h[j];
        } else {
          arr[j + 1] = h[j + 1];
        }
      }
      result = Math.max(result, arr.reduce((pre, v) => pre + v, 0));
    } else if (i === length - 1) {
      let arr: number[] = new Array(length).fill(0);
      const h = [...heights];
      arr[i] = heights[i];
      // <
      for (let j = length - 1; j > 0; j--) {
        const i1 = h[j];
        const i2 = h[j - 1];
        if (i1 < i2) {
          arr[j - 1] = h[j];
          h[j - 1] = h[j];
        } else {
          arr[j - 1] = h[j - 1];
        }
      }
      result = Math.max(result, arr.reduce((pre, v) => pre + v, 0));
    } else {
      let arr: number[] = new Array(length).fill(0);
      const h = [...heights];
      arr[i] = heights[i];
      // >
      for (let j = i; j < length - 1; j++) {
        const i1 = h[j];
        const i2 = h[j + 1];
        if (i1 < i2) {
          arr[j + 1] = h[j];
          h[j + 1] = h[j];
        } else {
          arr[j + 1] = h[j + 1];
        }
      }
      // <
      for (let j = i; j > 0; j--) {
        const i1 = h[j];
        const i2 = h[j - 1];
        if (i1 < i2) {
          arr[j - 1] = h[j];
          h[j - 1] = h[j];
        } else {
          arr[j - 1] = h[j - 1];
        }
      }
      result = Math.max(result, arr.reduce((pre, v) => pre + v, 0));
    }
  }

  return result;
};