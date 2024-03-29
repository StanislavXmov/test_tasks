
const getOccurrence = (word: string): number[] => {
  let o: number[] = new Array(26).fill(0);
  for (let c = 0; c < word.length; c++) {
    o[word[c].charCodeAt(0) - 'a'.charCodeAt(0)] += 1;
  }
  return o;
}

export const wordSubsets = (words1: string[], words2: string[]): string[] =>  {
  let maxOccurrence: number[] = new Array(26).fill(0);
  let output: string[] = [];

  for (let i = 0; i < words2.length; i++) {
    let occurrence: number[] = getOccurrence(words2[i]);
    for (let j = 0; j < 26; j++) {
      maxOccurrence[j] = Math.max(maxOccurrence[j], occurrence[j]);
    }
  }

  for (let i = 0; i < words1.length; i++) {
    let check: number[] = getOccurrence(words1[i]);
    let found = true;
    for (let j = 0; j < 26; j++) {
      if (check[j] < maxOccurrence[j]) {
        found = false;
        break;
      }
    }
    if (found) {
      output.push(words1[i]);
    }
  }
  return output;
}