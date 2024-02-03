export const maxArea = (height: number[]): number => {
  let max = 0;

  for (let i = 0; i < height.length; i++) {
    const start = height[i];
    for (let j = height.length - 1; j > i; j--) {
      const end = height[j];
      const s = Math.min(start, end) * (j - i);
      max = Math.max(max, s);
    }
  }

  return max;
}

export const maxArea2 = (height: number[]): number => {
  let left = 0;
  let right = height.length - 1;
  let max = 0;
  while (left < right) {
    max = Math.max(max, Math.min(height[left], height[right]) * (right - left));
    if (height[left] < height[right]) {
      left += 1;
    } else {
      right -= 1;
    }
  }

  return max;
}