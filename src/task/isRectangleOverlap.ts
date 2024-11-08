export function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
  const xo1 = rec1[0];
  const xo2 = rec1[2];
  const yo1 = rec1[1];
  const yo2 = rec1[3];

  const x1 = rec2[0];
  const x2 = rec2[2];
  const y1 = rec2[1];
  const y2 = rec2[3];

  if (x1 > xo1 && x1 < xo2 && y1 > yo1 && y1 < yo2) {
    return true;
  } else if (x2 < xo2 && x2 > xo1 && y2 < yo2 && y2 > yo1) {
    return true;
  } else if (x1 < xo2 && x2 > xo1 && y1 < yo2 && y2 > yo1) {
    return true;
  }

  return false;
};

// function isRectangleOverlap(rec1: number[], rec2: number[]): boolean {
//   const above: boolean = rec1[1] >= rec2[3];
//   const below: boolean = rec1[3] <= rec2[1];
//   const right: boolean = rec1[0] >= rec2[2];
//   const left: boolean = rec1[2] <= rec2[0];

//   return !(above || below || right || left);
// };