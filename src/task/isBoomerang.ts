export function isBoomerang(points: number[][]): boolean {
  let s = 0;

  const calcSin = (x1:number,y1:number,x2:number,y2:number) => {
    if (y2 - y1 === 0) {
      return Math.sin(0);
    } else if (x2 - x1 === 0) {
      return Math.sin(Math.PI);
    } else {
      return Math.sin((y2 - y1) / (x2 - x1));
    }
  }

  for (let i = 0; i < points.length - 1; i++) {
    const [x1, y1] = points[i];
    const [x2, y2] = points[i + 1];

    if (y2 === y1 && x2 === x1 ) {
      return false;
    }

    if (i === 0) {
      s = calcSin(x1,y1,x2,y2);
      continue;
    }
    let sin = calcSin(x1,y1,x2,y2);
    console.log(sin);

    if (sin === s) {
      return false;
    }
  }

  return true;
};
