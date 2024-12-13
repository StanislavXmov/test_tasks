export const loopInArray = <T>(list: T[]) => {
  const equality = <T>(list1: T[], list2: T[]) => {
    for (let i = 0; i < list1.length; i++) {
      if (list1[i] !== list2[i]) {
        return false;
      }
    }
    return true;
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = i + 1; j < list.length; j++) {
      const n1 = list[i];
      const n2 = list[j];
      if (n1 === n2) {
        const list1 = list.slice(i, j);
        const list2 = list.slice(j, j + (j - i));
        if (list1.length === list2.length && list1.length > 2) {
          if (equality(list1, list2)) {
            return list1;
          }
        }
      }
    }
  }
  return [];
}