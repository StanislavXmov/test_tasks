export const validateBrackets = (data: string) => {
  const bracketsOpen = ['(', '[', '{', '<'];
  const bracketsClosed = [')', ']', '}', '>'];
  let stack: string[] = [];

  for (let i = 0; i < data.length; i++) {
    const s = data[i];
    if (bracketsOpen.includes(s)) {
      stack.push(s);
    }
    if (bracketsClosed.includes(s)) {
      if (stack.length === 0) {
        return false;
      }
      const idx = bracketsClosed.indexOf(s);
      const openBracket = bracketsOpen[idx];
      if (stack[stack.length - 1] === openBracket) {
        stack.pop();
      } else {
        return false;
      }
    }
    
  }
  if (stack.length === 0) {
    return true;
  } else {
    return false;
  }
}