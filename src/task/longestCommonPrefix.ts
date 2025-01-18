function longestCommonPrefix(strs: string[]): string {
  let prefix = "";

  let checkIndex = (i: number) => {
    let s = "";
    for (let k = 0; k < strs.length; k++) {
      const str = strs[k];
      if (k === 0) {
        s = str[i];
      } else {
        if (s === str[i]) {
          continue;
        } else {
          return null;
        }
      }
    }
    return s;
  }

  for (let index = 0; index < strs[0].length; index++) {
    const s = checkIndex(index);
    if (s) {
      prefix += s;
    } else {
      return prefix;
    }
  }
  
  return prefix;
};

// const strs = ["flower","flow","flight"];
// const strs = ["dog","racecar","car"];