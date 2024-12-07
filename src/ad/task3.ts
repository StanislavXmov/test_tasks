const _data = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

const task3_1 = () => {
  const idxs: number[] = [];
  const find = (i: number) => {
    const idx = _data.indexOf("mul", i);
    if (idx !== -1) {
      idxs.push(idx);
      find(idx + 1);
    }
  }

  find(0);

  let result = 0;

  for (let i = 0; i < idxs.length; i++) {
    const idx = idxs[i];
    const str = _data.substring(idx + 3, idx + 12);
    if (str.includes("(") && str.includes(")")) {

      const startIdx = str.indexOf("(");
      const endIdx = str.indexOf(")");
      const [n1, n2] = str.substring(startIdx + 1, endIdx).split(",").map((n) => Number(n));
      if (Number.isInteger(n1) && Number.isInteger(n2)) {
        result += n1 * n2;
      }
    }
  }
  
  return result;
}

const task3_2 = async () => {
  const response = await fetch("http://localhost:3000/data", {credentials: "same-origin"});
  const data: {data: string} = await response.json();
  const _data = data.data;

  const idxs: number[] = [];
  const allIdx: {type: "mul" | "do" |"don't", i: number}[] = [];

  const findMul = (i: number) => {
    const idx = _data.indexOf("mul", i);
    if (idx !== -1) {
      allIdx.push({type: "mul", i: idx});
      findMul(idx + 1);
    }
  }
  findMul(0);

  const findDoNt = (i: number) => {
    const idx = _data.indexOf("don't", i);
    if (idx !== -1) {
      allIdx.push({type: "don't", i: idx});
      findDoNt(idx + 1);
    }
  }
  findDoNt(0);
  const findDo = (i: number) => {
    const idx = _data.indexOf("do", i);
    if (idx !== -1) {
      if (!allIdx.find(i => i.i === idx)) {
        allIdx.push({type: "do", i: idx});
      }
      findDo(idx + 1);
    }
  }
  findDo(0);

  allIdx.sort((a, b) => a.i - b.i);

  let isDo = true;
  allIdx.forEach((i) => {
    if (isDo) {
      if (i.type === "mul") {
        idxs.push(i.i);
      } else if (i.type === "don't") {
        isDo = false;
      }
    } else {
      if (i.type === "do") {
        isDo = true;
      }
    }
  });

  let result = 0;

  for (let i = 0; i < idxs.length; i++) {
    const idx = idxs[i];
    const str = _data.substring(idx + 3, idx + 12);
    if (str.includes("(") && str.includes(")")) {

      const startIdx = str.indexOf("(");
      const endIdx = str.indexOf(")");
      const [n1, n2] = str.substring(startIdx + 1, endIdx).split(",").map((n) => Number(n));
      if (Number.isInteger(n1) && Number.isInteger(n2)) {
        result += n1 * n2;
      }
    }
  }

  return result;
}