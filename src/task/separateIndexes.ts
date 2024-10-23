export function separateIndexes(idxs: number[]) {
  const result: number[][] = [];
  let idx = 0;

  if (idxs.length > 1) {
  for (let i = 0; i < idxs.length; i++) {
    const i1 = idxs[i];
    const i2 = idxs[i + 1];
    if (i2 - i1 !== 1) {
      if (!result[idx]) {
        result[idx] = [];
      }
      result[idx].push(i1);
      idx++;
    } else {
      if (!result[idx]) {
        result[idx] = [];
      } 
      result[idx].push(i1);
    }
  }
  } else {
    result.push(idxs);
  }
  return result;
}
