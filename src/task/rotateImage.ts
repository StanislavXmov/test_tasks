export const rotateImage = (m: number[][]): void => {
  const n = m.length;
  for (let i = 0; i < n; i++) {
    for (let j = i + 1; j < n; j++) {
      const temp = m[i][j];
      m[i][j] = m[j][i];
      m[j][i] = temp;
    }
  }
  for (let i = 0; i < n; i++) {
    m[i].reverse();
  }
}

export function rotate(matrix: number[][]): void {

  const rotateRow = (i: number, j: number) => {
    for (let _j = 0; _j < matrix[i].length - (1 + j + i); _j++) {
      const n1 = matrix[i][ j +_j];
      const n2 = matrix[i + _j][matrix[i].length - (1 + j)];
      const n3 = matrix[matrix.length - (1 + j)][matrix[matrix.length - 1].length - (1 + _j + j)];
      const n4 = matrix[matrix.length - (1 + _j + j)][j];
      
      matrix[i + _j][matrix[i].length - (1 + j)] = n1
      matrix[matrix.length - (1 + j)][matrix[matrix.length - 1].length - (1 + _j + j)] = n2
      matrix[matrix.length - (1 + _j + j)][j] = n3
      matrix[i][ j +_j] = n4
    }
  }

  for (let k = 0; k < matrix.length / 2; k++) {
    rotateRow(k, k);
  }
};

// const m = [[1,2,3],[4,5,6],[7,8,9]];
const m = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]];