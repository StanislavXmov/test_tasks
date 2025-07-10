const pick = 1;
const guess = (num: number) => {
  if (num === pick) {
    return 0;
  } else if (num > pick) {
    return -1;
  } else if (num < pick) {
    return 1;
  }
};

export function guessNumber(n: number): number {
  const func = (l: number, r: number) => {
    const m = Math.floor((l + r) / 2);
    if (guess(m) === 0) {
      return m;
    } else if (guess(m) === 1) {
      return func(m + 1, r);
    } else {
      return func(l, m - 1);
    }
  };
  return func(1, n);
}

console.log(guessNumber(2));
