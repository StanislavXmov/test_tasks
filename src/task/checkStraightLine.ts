function checkStraightLine(coordinates: number[][]): boolean {
  let t = 0;
  let x = 0;
  let y = 0;

  let angle = true;
  let dx = true;
  let dy = true;

  for (let i = 0; i < coordinates.length - 1; i++) {
    const [x1, y1] = coordinates[i];
    const [x2, y2] = coordinates[i + 1];
    if (i === 0) {
      t = Math.tan((y2 - y1) / (x2 - x1));
      x = x1;
      y = y1;
    } else {
      if (t !== Math.tan((y2 - y1) / (x2 - x1))) {
        angle = false;
      }
      if (x !== x1 || x !== x2) {
        dx = false;
      }
      if (y !== y1 || y !== y2) {
        dy = false;
      }
    }
    
  }

  return angle || dx || dy;
};

// const coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]];
// const coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]];
const coordinates = [[0,0],[0,1],[0,-1]];
// const coordinates = [[1,1],[2,2],[2,0]];
// const coordinates = [[1,-8],[2,-3],[1,2]]


// console.log(checkStraightLine(coordinates));