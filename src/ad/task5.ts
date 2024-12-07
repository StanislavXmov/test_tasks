const task5 = (data: string) => {
  const left: Record<number, number[]> = {};
  const right: Record<number, number[]> = {};
  const lines: number[][] = [];
  const succesLines: number[][] = [];
  const failledLines: number[][] = [];
  

  data.split("\n").filter(Boolean).forEach(i => {
    if (i.includes("|")) {
      console.log(i);
      
      const [l, r] = i.split("|");
      const ln = Number(l);
      const rn = Number(r);
      if (left[ln]) {
        left[ln].push(rn);
      } else {
        left[ln] = [rn];
      }
      if (right[rn]) {
        right[rn].push(ln);
      } else {
        right[rn] = [ln];
      }
    } else {
      lines.push(i.split(",").map(n => Number(n)));
    }
  });

  for (let i = 0; i < lines.length; i++) {
    let success = true;
    
    for (let j = 0; j < lines[i].length; j++) {
      const x = lines[i][j];
      
      if (!success) {
        break;
      }
      
      for (let k = 0; k < lines[i].length; k++) {
        const y = lines[i][k];
        if (k !== j) {
          if (j > k) {
            // console.log("right", `${x}|${y}`);
            if (!right[x] || !right[x].includes(y)) {
              success = false;
              failledLines.push(lines[i]);
              break;
            }
          } else if (j < k) {
            // console.log("left", `${x}|${y}`);
            if (!left[x] || !left[x].includes(y)) {
              success = false;
              failledLines.push(lines[i]);
              break;
            }
          }
        }
      }
    }

    if (success) {
      succesLines.push(lines[i]);
    }
  }

  console.log(left, right);
  console.log(lines.length, succesLines.length, failledLines.length);
  let result = 0;

  for (let i = 0; i < succesLines.length; i++) {
    const line = succesLines[i];
    result += line[Math.floor(line.length / 2)];
  }

  const check = (line: number[]) => {
    let success = true;
    for (let j = 0; j < line.length; j++) {
      const x = line[j];
      
    
      for (let k = 0; k < line.length; k++) {
        const y = line[k];
        if (k !== j) {
          if (j > k) {
            if (!right[x] || !right[x].includes(y)) {
              success = false;
              break;
            }
          } else if (j < k) {
            if (!left[x] || !left[x].includes(y)) {
              success = false;
              break;
            }
          }
        }
      }
    }
    return success;
  }

  const nextSucces: number[][] = [];

  for (let i = 0; i < failledLines.length; i++) {
    const line = failledLines[i];
    const newLine = new Array(line.length).fill(0);
    for (let j = 0; j < line.length; j++) {
      const x = line[j];
      let idx = 0;
      for (let k = 0; k < line.length; k++) {
        const y = line[k];
        if (k !== j) {
          if (left[x] && left[x].includes(y)) {
            idx++;
          }
        }
      }
      newLine[line.length - 1 - idx] = x;
    }
    if (check(newLine)) {
      nextSucces.push(newLine);
    }
  }
  

  let nextSuccesResult = 0;

  for (let i = 0; i < nextSucces.length; i++) {
    const line = nextSucces[i];
    nextSuccesResult += line[Math.floor(line.length / 2)];
  }
  
  return {result, nextSuccesResult};
}