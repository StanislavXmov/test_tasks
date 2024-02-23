export const getCoins = (n: number, coin: number = 25): number => {
  let nextCoin = 0;
  switch (coin) {
    case 25:
      nextCoin = 10;
      break;
    case 10:
      nextCoin = 5;
      break;
    case 5:
      nextCoin = 1;
      break;
    case 1:
      return 1      
  }
  let ways = 0;
  for (let i = 0; i * coin <= n; i++) {
    ways += getCoins(n - i * coin, nextCoin);
  }
  return ways;
}