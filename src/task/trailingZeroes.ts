function trailingZeroes(n: number): number {
  if (n === 0) {
    return 0
  } else {

    const div = (n: number): number => {
      const m = Math.floor(n / 5);
      if (m >= 5) {
        return m + div(m);
      } else {
        return m;
      }
    }

    return div(n);
    
  }

};

// const n = 1;
// const n = 3;
// const n = 55;
const n = 625;