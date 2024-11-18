function solution(stairs) {
  let result = stairs[0];

  let i = 1;

  while (i < stairs.length) {
    if (!stairs[i + 1]) {
      result += stairs[i];
      break;
    }
    if (stairs[i] < stairs[i + 1]) {
      result += stairs[i];
      i++;
    } else {
      result += stairs[i + 1];
      i += 2;
    }
  }
  
  return result;
}

// const stairs = [1, 13, 17, 2, 8, 7, 19, 6];
// const stairs = [0, 0, 0, 0, 0, 0];
// const stairs = [92, 92, 93, 92, 92, 92, 93, 93];
const stairs = [6, 19, 7, 8, 2, 17, 13, 1];
console.log(solution(stairs));

const solutionDP = (steps) => {
  let first = steps[0];
  let second = steps[1] + steps[0];
  for (let i = 2; i < steps.length; i += 1) {
    const current = Math.min(first, second) + steps[i];
    first = second;
    second = current;
  }

  return second;
};
