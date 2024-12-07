const task4_1 = () => {
  const list: string[][] = [];
  data.split("\n").filter(Boolean).forEach(i => {
    list.push(i.split(""));
  });
  const XMAS = "XMAS";
  let result = 0;

  console.log(list);

  const findRight = (idx: number, row: number, column: number) => {
    const s = list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findRight(idx + 1, row, column + 1);
      }
    }
  }

  const findLeft = (idx: number, row: number, column: number) => {
    const s = list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findLeft(idx + 1, row, column - 1);
      }
    }
  }

  const findUp = (idx: number, row: number, column: number) => {
    const s = list[row] && list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findUp(idx + 1, row - 1, column);
      }
    }
  }

  const findDown = (idx: number, row: number, column: number) => {
    const s = list[row] && list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findDown(idx + 1, row + 1, column);
      }
    }
  }

  const findLeftUp = (idx: number, row: number, column: number) => {
    const s = list[row] && list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findLeftUp(idx + 1, row - 1, column - 1);
      }
    }
  }

  const findLeftDown = (idx: number, row: number, column: number) => {
    const s = list[row] && list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findLeftDown(idx + 1, row + 1, column - 1);
      }
    }
  }

  const findRightUp = (idx: number, row: number, column: number) => {
    const s = list[row] && list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findRightUp(idx + 1, row - 1, column + 1);
      }
    }
  }

  const findRightDown = (idx: number, row: number, column: number) => {
    const s = list[row] && list[row][column];
    if (s) {
      if (idx === 3 && s === XMAS[3]) {
        result++;
      } else if (s === XMAS[idx]) {
        findRightDown(idx + 1, row + 1, column + 1);
      }
    }
  }

  const findX = (s: string, row: number, column: number) => {
    if (s === "X") {
      findRight(1, row, column + 1);
      findLeft(1, row, column - 1);
      findUp(1, row - 1, column);
      findDown(1, row + 1, column);
      findLeftUp(1, row - 1, column - 1);
      findLeftDown(1, row + 1, column - 1);
      findRightUp(1, row - 1, column + 1);
      findRightDown(1, row + 1, column + 1);
    }
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      const s = list[i][j];
      findX(s, i, j);
    }
  }
  
  return result;
}

const task4_2 = () => {
  const list: string[][] = [];

  data4.split("\n").filter(Boolean).forEach(i => {
    list.push(i.split(""));
  });
  let result = 0;
  const XMAS = "MMSS";

  const findAll = (row: number, column: number) => {
    const tr = list[row - 1] && list[row - 1][column + 1];
    const tl = list[row - 1] && list[row - 1][column - 1];
    const br = list[row + 1] && list[row + 1][column + 1];
    const bl = list[row + 1] && list[row + 1][column - 1];
    if (tr && tl && br && bl) {
      if ([tr, tl, br, bl].sort().join("") === XMAS) {
        if ([tr, tl, br, bl].join("") !== "SMMS" && [tr, tl, br, bl].join("") !== "MSSM") {
          result++;
        }
      }
    }
  }

  const findA = (s: string, row: number, column: number) => {
    if (s === "A") {
      findAll(row, column);
    }
  }

  for (let i = 0; i < list.length; i++) {
    for (let j = 0; j < list[i].length; j++) {
      const s = list[i][j];
      findA(s, i, j);
    }
  }
  
  return result;
}