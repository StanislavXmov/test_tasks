const bfs = (map, fromRow, fromColumn, toRow, toColumn) => {
  const pack = (row, column) => `${row}:${column}`;
  const unpack = (cell) => cell.split(':').map((x) => parseInt(x, 10));

  const visited = new Set();
  const isValidNeighbour = (row, column) => {
    if (row < 0 || row >= map.length) {
      return false;
    }

    if (column < 0 || column >= map[row].length) {
      return false;
    }

    const cell = pack(row, column);
    if (visited.has(cell)) {
      return false;
    }

    return map[row][column] === 0;
  };

  let queue = [];
  const initialCell = pack(fromRow, fromColumn);
  queue.push([initialCell, [initialCell]]);
  while (queue.length > 0) {
    const [cell, path] = queue.shift();

    const tryAddCell = (row, column, path) => {
      if (isValidNeighbour(row, column)) {
        const cell = pack(row, column);
        const newPath = [...path];
        newPath.push(cell);
        queue.push([cell, newPath]);
        visited.add(cell);
      }
    };

    const [row, column] = unpack(cell);
    if (row === toRow && column === toColumn) {
      return path;
    }

    tryAddCell(row - 1, column, path);
    tryAddCell(row + 1, column, path);
    tryAddCell(row, column - 1, path);
    tryAddCell(row, column + 1, path);
    
  }

  // let step = new Map();
  // const initialCell = pack(fromRow, fromColumn);
  // step.set(initialCell, [initialCell]);
  // while (step.size > 0) {
  //   const nextStep = new Map();
  //   const tryAddCell = (row, column, path) => {
  //     if (isValidNeighbour(row, column)) {
  //       const cell = pack(row, column);
  //       const newPath = [...path];
  //       newPath.push(cell);
  //       nextStep.set(cell, newPath);
  //       visited.add(cell);
  //     }
  //   };

  //   for (const [cell, path] of step) {
  //     const [row, column] = unpack(cell);
  //     if (row === toRow && column === toColumn) {
  //       return path;
  //     }

  //     tryAddCell(row - 1, column, path);
  //     tryAddCell(row + 1, column, path);
  //     tryAddCell(row, column - 1, path);
  //     tryAddCell(row, column + 1, path);
  //   }

  //   step = nextStep;
  // }

  return null;
};

const map1 = [
  [0, 0, 0, 0],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
];

console.log(bfs(map1, 0, 0, 3, 3));
