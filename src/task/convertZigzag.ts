export const convertZigzag = (str: string, rows: number) => {
  const length = str.length;
  const step = Math.ceil(length / (rows + (rows - 2)));
  const array: string[][] = new Array(rows).fill(null).map(() => []);

  if (rows === 1) {
    return str;
  }
  
  for (let i = 0; i < step; i++) {
    for (let j = 0; j < rows + rows - 2; j++) {
      const s = str[j];
      if (j >= rows) {
        array[array.length - 1 - 1 + rows - j].push(s);
      } else {
        array[j].push(s);
      }
    }
    str = str.substring(rows + rows - 2);
  }

  return array.flat().join('');
}

// PINALSIGYAHRPI
// PINALSIGYAHRPI

// P     I    N
// A   L S  I G
// Y A   H R
// P     I


// PAHNAPLSIIGYIR
// P   A   H   N
// A P L S I I G
// Y   I   R


export const convertZigzag2 = function(str: string, numRows: number) {

  if(numRows < 2){
      return str;
  }

  const divisor = (numRows - 1) * 2;
  const rows = Array(numRows).fill('');

  for(let dividend = 0; dividend < str.length; dividend++){
    const mod =  dividend % divisor;
    const rowIndex = mod < numRows ? mod : divisor - mod;

    rows[rowIndex] += str[dividend];
  }

  return rows.join('');
};