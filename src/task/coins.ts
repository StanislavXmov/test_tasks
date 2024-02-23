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

export const toGet = (n: number): number[] | -1 => {
  const coins = [100, 50, 20, 10];
  const result: number[] = [];

  if (n > 0) {
    for (let i = 0; i < coins.length; i++) {
      const coin = coins[i];

      while (n - coin >= 0) {
        n -= coin;
        result.push(coin);
      }
    }
  } else {
    return -1;
  }

  return result;
}