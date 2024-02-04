export const romanToInt = (s: string): number => {
  const roman = {
    I: {symb: 'I', value: 1},
    V: {symb: 'V', value: 5},
    X: {symb: 'X', value: 10},
    L: {symb: 'L', value: 50},
    C: {symb: 'C', value: 100},
    D: {symb: 'D', value: 500},
    M: {symb: 'M', value: 1000},
  }

  let sum = 0;

  for (let i = 0; i < s.length; i++) {
    // I
    if (s[i] === roman.I.symb) {
      if (s[i + 1] === roman.V.symb || s[i + 1] === roman.X.symb) {
        continue;
      } else {
        sum += roman.I.value;
      }
    // V
    } else if (s[i] === roman.V.symb) {
      if (s[i - 1] === roman.I.symb) {
        sum += roman.V.value - roman.I.value;
      } else {
        sum += roman.V.value;
      }
    // X
    } else if (s[i] === roman.X.symb) {
      if (s[i + 1] === roman.L.symb || s[i + 1] === roman.C.symb) {
        continue;
      }
      if (s[i - 1] === roman.I.symb) {
        sum += roman.X.value - roman.I.value;
      } else {
        sum += roman.X.value;
      }
    // L
    } else if (s[i] === roman.L.symb) {
      if (s[i - 1] === roman.X.symb) {
        sum += roman.L.value - roman.X.value;
      } else {
        sum += roman.L.value;
      }
    // C
    } else if (s[i] === roman.C.symb) {
      if (s[i + 1] === roman.D.symb || s[i + 1] === roman.M.symb) {
        continue;
      }
      if (s[i - 1] === roman.X.symb) {
        sum += roman.C.value - roman.X.value;
      } else {
        sum += roman.C.value;
      }
    // D
    } else if (s[i] === roman.D.symb) {
      if (s[i - 1] === roman.C.symb) {
        sum += roman.D.value - roman.C.value;
      } else {
        sum += roman.D.value;
      }
    // M
    } else if (s[i] === roman.M.symb) {
      if (s[i - 1] === roman.C.symb) {
        sum += roman.M.value - roman.C.value;
      } else {
        sum += roman.M.value;
      }
    }

  }
  return sum;
}