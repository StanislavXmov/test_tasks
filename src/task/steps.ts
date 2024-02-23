export const getSteps = (n: number): number => {

  if (n < 0) {
    return 0;
  }
  if (n === 0) {
    return 1;
  }

  return getSteps(n - 1) + getSteps(n - 2) + getSteps(n - 3);
}