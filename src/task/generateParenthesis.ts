export function generateParenthesis(n: number): string[] {
  const forward = "(";
  const backwards = ")";

  const currentString: string[] = [];
  const validAnswers: string[] = [];

  const recurse = (forwardParensNeeded: number, backwardsParensNeeded: number) => {
    if (forwardParensNeeded === 0 && backwardsParensNeeded === 0) {
      validAnswers.push(currentString.join(''));
    }
        

    if (forwardParensNeeded > 0) {
      currentString.push(forward);
      recurse(forwardParensNeeded - 1, backwardsParensNeeded);
    }
        
    if (backwardsParensNeeded > 0 && forwardParensNeeded < backwardsParensNeeded) {
      currentString.push(backwards);
      recurse(forwardParensNeeded, backwardsParensNeeded - 1);
    }

    if (currentString.length > 0) {
      currentString.pop();
    }
  };

  recurse(n, n);

  return validAnswers;
};
