function strStr(haystack: string, needle: string): number {
  const check = (i: number) => {
    if (haystack[i] === needle[0]) {
      for (let j = 0; j < needle.length; j++) {
        if (haystack[i + j] !== needle[j]) {
          return -1;
        }
      }
      return i;
    }
    return -1;
  }

  for (let i = 0; i < haystack.length; i++) {
    if (check(i) >= 0) {
      return check(i)
    }
  }

  return -1;
};

// const haystack = "sadbutsad", needle = "sad";
const haystack = "leetcode", needle = "leeto";

console.log(strStr(haystack, needle));