function isIsomorphic(s: string, t: string): boolean {
  const createMask = (str: string) => {
    const map: Record<string, number> = {};
    const list: number[] = [];
    let c = 1;

    str.split("").forEach(sym => {
      if (map[sym]) {
        list.push(map[sym]);
      } else {
        map[sym] = c;
        list.push(map[sym]);
        c++;
      }
    });

    return list.join("");
  }

  const sMask = createMask(s);
  const tMask = createMask(t);
  
  return sMask === tMask;
};

const s = "egg", t = "add";
// const s = "foo", t = "bar";
// const s = "bbbaaaba", t = "aaabbbba";