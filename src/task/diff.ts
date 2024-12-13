const diff = (x: string, y: string) => {
  const result: string[] = [];

  let xi = 0;
  let yi = 0;

  while (xi < x.length || yi < y.length) {
    const xs = x[xi];
    const ys = y[yi];

    if (xs === ys) {
      result.push(xs);
      xi++;
      yi++;
    } else {
      if (y.indexOf(xs, yi) > -1) {
        result.push(`+${ys}`);
        yi++;
      } else if (xs === undefined) {
        result.push(`+${ys}`);
        yi++;
      } else {
        result.push(`-${xs}`);
        xi++;
      }
    }
  }

  
  return result.join(" ");
}

// X M J -Y A -U +A +T Z
// const x = "XMJYAUZ",
//       y = "XMJAATZ";
// A B C D +E F G -H +I J -Q +K +R +X +Y Z
// const x = "ABCDFGHJQZ", y = "ABCDEFGIJKRXYZ";

// -a -b -c -D -E +A +B +C +d +e
// const x = "abcDE", y = "ABCde";
// const x = "WoRLD", y = "world";
const x = "helloworld", y = "helloworld";

// -W +w o -R -L -D +r +l +d
console.log(diff(x, y));