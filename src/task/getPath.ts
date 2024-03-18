const calcPath = (maze: number[][], row: number, col: number, path: [number, number][]) => {
  if (col < 0 || row < 0 || maze[row][col] === 0) {
    return false;
  }

  const isAtOrigin = row === 0 && col === 0;

  if (isAtOrigin || calcPath(maze, row, col - 1, path) || calcPath(maze, row - 1, col, path)) {
    path.push([row, col]);
    return true;
  }

  return false;
}

export const getPath = (maze: number[][]) => {
  if (maze.length === 0) {
    return null;
  }

  const path: [number, number][] = [];

  if (calcPath(maze, maze.length - 1, maze[0].length - 1, path)) {
    return path;
  }

  return null;
}
