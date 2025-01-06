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
  }

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
  }

  const rowIdx = findRow(matrix, target);
  if (rowIdx === -1) {
    return false;
  }
  
  return findInColumn(matrix[rowIdx], target);
};

// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 3;
// const matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]], target = 13;
const matrix = [[1]], target = 0;
