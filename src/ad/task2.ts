const task2_1 = () => {
  const list: number[][]= [];
  data.split("\n").filter(Boolean).forEach(i => {
    list.push(i.split(" ").map(n => Number(n)));
  });
  
  const d = 3;
  let result = 0;

  for (let i = 0; i < list.length; i++) {
    let isDecrease = false;
    
    for (let j = 0; j < list[i].length - 1; j++) {
      const n1 = list[i][j];
      const n2 = list[i][j + 1];
      if (j === 0) {
        if (n2 < n1) {
          isDecrease = true;
        }
      }

      if (n2 < n1 && !isDecrease) {
        break;
      } else if (n2 > n1 && isDecrease) {
        break;
      }

      const abs = Math.abs(n2 - n1)
      if (abs === 0 || abs > d) {
        break;
      }

      if (j === list[i].length - 2) {
        result++;
      }
    }
    
  }
  
  return result;
}

const task2_2 = () => {
  let list: number[][]= [];
  data.split("\n").filter(Boolean).forEach(i => {
    list.push(i.split(" ").map(n => Number(n)));
  });

  const d = 3;
  let result = 0;

  const check = (l: number[]) => {
    let r = 0;

    for (let j = 0; j < l.length; j++) {
      const newList = [...l];
      newList.splice(j, 1);

      let isDecrease = false;
      for (let k = 0; k < newList.length - 1; k++) {
        const n1 = newList[k];
        const n2 = newList[k + 1];
        if (k === 0) {
          if (n2 < n1) {
            isDecrease = true;
          }
        }

        if (n2 < n1 && !isDecrease) {
          break;
        } else if (n2 > n1 && isDecrease) {
          break;
        }

        if (isDecrease) {
          if (n1 - n2 > d || n1 - n2 === 0) {
            break;
          }
        } else {
          if (n2 - n1 > d || n2 - n1 === 0) {
            break;
          }
        }

        if (k === newList.length - 2) {
          r++;
        }
      }
    }
    
    if (r > 0) {
      result++;
    }
  }

  for (let i = 0; i < list.length; i++) {
    let isDecrease = false;
    
    for (let j = 0; j < list[i].length - 1; j++) {
      const n1 = list[i][j];
      const n2 = list[i][j + 1];
      if (j === 0) {
        if (n2 < n1) {
          isDecrease = true;
        }
      }

      if (n2 < n1 && !isDecrease) {
        check(list[i]);
        break;
      } else if (n2 > n1 && isDecrease) {
        check(list[i]);
        break;
      }

      if (isDecrease) {
        if (n1 - n2 > d || n1 - n2 === 0) {
          check(list[i]);
          break;
        }
      } else {
        if (n2 - n1 > d || n2 - n1 === 0) {
          check(list[i]);
          break;
        }
      }

      if (j === list[i].length - 2) {
        result++;
      }
    }
  }
  
  return result;
}