const astar = (map, fromRow, fromColumn, toRow, toColumn) => {
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

    return true;
  };

  const minDistance = (fromRow, fromColumn, toRow, toColumn) => Math
    .hypot(toRow - fromRow, toColumn - fromColumn);

  const priorityQueue = [];
  priorityQueue.shiftMin = function () {
    let minIndex = 0;
    let minPriority = this[minIndex].priority;

    for (let i = 1; i < this.length; i += 1) {
      if (minPriority > this[i].priority) {
        minIndex = i;
        minPriority = this[i].priority;
      }
    }

    const result = this[minIndex];
    this.splice(minIndex, 1);

    return result;
  };

  priorityQueue.push({
    priority: minDistance(fromRow, fromColumn, toRow, toColumn),
    elapsed: 0,
    cell: pack(fromRow, fromColumn),
    path: [],
  });


  while (priorityQueue.length > 0) {
    const top = priorityQueue.shiftMin();
    const [row, column] = unpack(top.cell);
    const path = [...top.path, top.cell];
    if (row === toRow && column === toColumn) {
      return {
          path,
          distance: top.elapsed,
          visitedNodes: visited.size,
        };
    }

    visited.add(top.cell);

    const tryAddCell = (row, column) => {
      if (isValidNeighbour(row, column)) {
        const nextCell = pack(row, column);
        const elapsed = top.elapsed + map[row][column];
        const remaining = minDistance(fromRow, fromColumn, toRow, toColumn);
        priorityQueue.push({
          priority: elapsed + remaining,
          elapsed,
          cell: nextCell,
          path,
        });
      }
    };

    tryAddCell(row - 1, column);
    tryAddCell(row + 1, column);
    tryAddCell(row, column - 1);
    tryAddCell(row, column + 1);
  }

  return null;
};

const map = [
  [1, 1, 2, 2, 2],
  [1, 1, 2, 999, 999],
  [1, 1, 1, 1, 3],
  [1, 1, 1, 1, 3],
  [1, 1, 1, 1, 1],
];

// const result = {
//   path: ['3:3', '2:3', '2:2', '1:2', '0:2', '0:3'],
//   distance: 8,
//   visitedNodes: 21,
// };

console.log(astar(map, 3, 3, 0, 3));


// const numRows = map.length;
//   const numCols = map[0].length;

//   const pack = (row, column) => `${row}:${column}`;
//   const unpack = (cell) => cell.split(':').map((x) => parseInt(x, 10));

//   const visited = new Set();
//   const distances = {};
//   const prev = {};

//   const isValidNeighbour = (row, column) => row >= 0
//     && row < numRows
//     && column >= 0
//     && column < numCols;

//   const getNeighbours = (row, column) => {
//     const neighbours = [];
//     if (isValidNeighbour(row - 1, column)) neighbours.push([row - 1, column]);
//     if (isValidNeighbour(row + 1, column)) neighbours.push([row + 1, column]);
//     if (isValidNeighbour(row, column - 1)) neighbours.push([row, column - 1]);
//     if (isValidNeighbour(row, column + 1)) neighbours.push([row, column + 1]);
//     return neighbours;
//   };

//   const getDistanceTo = (cell) => {
//     const [toCellRow, toCellColumn] = unpack(cell);
//     return map[toCellRow][toCellColumn];
//   };

//   const getShortestPath = (from, to) => {
//     const path = [];
//     let temp = to;
//     while (temp !== from) {
//       path.push(temp);
//       temp = prev[temp];
//     }
//     path.push(from);
//     return path.reverse();
//   };

//   const startCell = pack(fromRow, fromColumn);
//   const endCell = pack(toRow, toColumn);

//   distances[startCell] = 0;

//   let currentCell = startCell;

//   while (currentCell !== endCell) {
//     const [currentRow, currentColumn] = unpack(currentCell);
//     const neighbours = getNeighbours(currentRow, currentColumn);

//     for (const [neighbourRow, neighbourColumn] of neighbours) {
//       const neighbourCell = pack(neighbourRow, neighbourColumn);
//       if (!visited.has(neighbourCell)) {
//         const distance = distances[currentCell] + getDistanceTo(neighbourCell);
//         if (distances[neighbourCell] === undefined || distance < distances[neighbourCell]) {
//           distances[neighbourCell] = distance;
//           prev[neighbourCell] = currentCell;
//         }
//       }
//     }

//     visited.add(currentCell);

//     let minDistance = Infinity;
//     let nextCell;
//     for (const cell in distances) {
//       if (!visited.has(cell) && distances[cell] < minDistance) {
//         minDistance = distances[cell];
//         nextCell = cell;
//       }
//     }

//     if (nextCell === undefined) {
//       return { path: null, distance: -1, visitedNodes: visited.size };
//     }

//     currentCell = nextCell;
//   }

//   const path = getShortestPath(startCell, endCell);
//   return { path, distance: distances[endCell], visitedNodes: visited.size };