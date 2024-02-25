const DIGIT_EXPRESSION = /^\d$/;
const isDigit = (character: string) => {
  return character && DIGIT_EXPRESSION.test(character);
};

const extractCount = (s: string, i: number) => {
  let n = 0;
  while (isDigit(s[i])) {
    n = 10 * n + Number(s[i]);
    i += 1;
  }
  return n;
}

export const decode = (s: string) => {
  let str = '';
  let i = 0;
  let n = 0;

  while (i < s.length) {
    if (isDigit(s[i])) {
      n = extractCount(s, i);
      i += n.toString().length - 1;
    } else {
      if (n !== 0) {
        str += s[i].repeat(n);
        n = 0;
      } else {
        str += s[i];
      }
    }
    i += 1;
  }

  return str;
}