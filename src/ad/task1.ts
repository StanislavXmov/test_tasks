const data = `
3   4
4   3
2   5
1   3
3   9
3   3
`;

const task1_1 = () => {
  const list1: number[] = [];
  const list2: number[] = [];

  data.split("\n").filter(Boolean).forEach(i => {
    const [l1, l2] = i.split("   ");
    list1.push(Number(l1));
    list2.push(Number(l2));
  });
  
  list1.sort();
  list2.sort();

  let result = 0;

  for (let i = 0; i < list1.length; i++) {
    const n1 = list1[i];
    const n2 = list2[i];

    result += Math.abs(n2 - n1);
  }

  return result;
}

const task1_2 = () => {
  const list1: number[] = [];
  const list2: number[] = [];

  data.split("\n").filter(Boolean).forEach(i => {
    const [l1, l2] = i.split("   ");
    list1.push(Number(l1));
    list2.push(Number(l2));
  });
  
  const cache: Record<number, number> = {};
  
  const find = (n: number) => {
    if (n in cache) {
      return cache[n];
    } else {
      let count = 0;
      for (let i = 0; i < list2.length; i++) {
        const n2 = list2[i];
        if (n2 === n) {
          count++;
        }
      }
      cache[n] = count;
      return count;
    }
  }

  let result = 0;

  for (let i = 0; i < list1.length; i++) {
    const n = list1[i];
    result += find(n) * n;
  }

  return result;
}