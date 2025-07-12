import { search } from "../algs/binarySearch";

function searchMatrix(matrix: number[][], target: number): boolean {
  const findRow = (matrix: number[][], target: number) => {
    let left = 0;
    let right = matrix.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      let row = matrix[middle];

      if (row[0] <= target && row[row.length - 1] >= target) {
        return middle;
      }

      if (row[0] > target && row[row.length - 1] > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    return -1;
  };

  const findInColumn = (list: number[], target: number) => {
    let left = 0;
    let right = list.length - 1;

    while (left <= right) {
      let middle = Math.floor((left + right) / 2);
      let point = list[middle];

      if (point === target) {
        return true;
      }

      if (point > target) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }

    return false;
  };

  const rowIdx = findRow(matrix, target);
  if (rowIdx === -1) {
    return false;
  }

  return findInColumn(matrix[rowIdx], target);
}

function searchMatrix2(matrix: number[][], target: number): boolean {
  const l = 0;
  const r = matrix.length - 1;

  const find = (l: number, r: number) => {
    if (l > r) {
      return false;
    }
    const m = Math.floor((l + r) / 2);
    const min = matrix[m][0];
    const max = matrix[m][matrix[m].length - 1];
    if (min === target || max === target) {
      return true;
    } else if (min > target) {
      return find(l, m - 1);
    } else {
      if (max > target) {
        if (search(matrix[m], target) !== -1) {
          return true;
        } else {
          return false;
        }
      } else {
        return find(m + 1, r);
      }
    }
  };

  return find(l, r);
}

// function searchMatrix(matrix: number[][], target: number): boolean {
//   const m = matrix.length;
//   const n = matrix[0].length;
//   let left = 0;
//   let right = m * n - 1;

//   while (left <= right) {
//       const mid = Math.floor((left + right) / 2);
//       const row = Math.floor(mid / n);
//       const col = mid % n;
//       const val = matrix[row][col];

//       if (val === target) return true;
//       else if (val < target) left = mid + 1;
//       else right = mid - 1;
//   }

//   return false;
// }
