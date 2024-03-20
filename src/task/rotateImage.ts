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