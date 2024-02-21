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

export const decodeSequence = (s: string) => {
  let numberStack: number[] = [];
  let stringStack: string[] = [];
  let result = '';

  let i = 0;

  while (i < s.length) {
    if (isDigit(s[i])) {
      let n = extractCount(s, i);
      numberStack.push(n);
      i += n.toString().length - 1;
    } else if (s[i] === '(') {
      stringStack.push(result);
      result = '';
    } else if (s[i] === ')') {
      result = stringStack[stringStack.length - 1] + result.repeat(numberStack.pop() || 1);
      stringStack.pop();
    } else {
      result += s[i];
    }
    i += 1;
  }
  return result;
}