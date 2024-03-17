type P = [number, number, string];

export const lcs = (s1: string, s2: string) => {
  const n = s1.length;
  const m = s2.length;

  const dp: number[][] = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(0));
  const p: null[][] | P[][] = new Array(n + 1).fill(0).map(() => new Array(m + 1).fill(null));

  for (let i = 1; i < n + 1; i++) {
    for (let j = 1; j < m + 1; j++) {
      if (s1[i - 1] === s2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
        p[i][j] = [i - 1, j - 1, s1[i - 1]];
      } else {
        if (dp[i - 1][j] > dp[i][j - 1]) {
          dp[i][j] = dp[i - 1][j];
          p[i][j] = [i - 1, j, ''];
        } else {
          dp[i][j] = dp[i][j - 1];
          p[i][j] = [i, j - 1, ''];
        }
      }
    }
  }

  let ans = '';
  let cur = p[n][m];
  while (cur) {
    ans += cur[2];
    cur = p[cur[0]][cur[1]];
  }

  // max length
  // return dp[n][m];
  return ans.split('').reverse().join('');
}