export const decode = (str: string) => {
  const steps = str.split('');
  const result: number[] = new Array(steps.length + 1).fill(0);

  let counter = 1;
  let stepsD: number[] = [];

  const addStepD = () => {
    for (let j = stepsD.length - 1; j >= 0; j--) {
      const idx = stepsD[j];
      result[idx] = counter;
      counter++;
    }
    stepsD = [];
  }

  for (let i = 0; i < result.length; i++) {
    const s = steps[i];
    if (s === 'I') {
      if (i === 0) {
        result[i] = counter;
        counter++;
      } else {
        result[i] = counter;
        counter++;
        if (stepsD.length) {
          addStepD();
        }
      }
    } else if (s === 'D') {
      stepsD.push(i);
    } else {
        result[i] = counter;
        counter++;
      if (stepsD.length) {
        addStepD();
      }
    }
  }
  
  return Number(result.join(''));
}

