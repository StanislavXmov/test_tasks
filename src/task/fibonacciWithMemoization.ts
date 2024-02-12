export const fibonacci = (n: number): number => {
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    return fibonacci(n - 1) + fibonacci(n - 2);
  }
}

export  const fibonacciWithMemoization = (n: number, memo: Record<string, number> = {}): number => {
  if (n in memo) {
    return memo[n];
  }
  
  if (n <= 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  } else {
    memo[n] = fibonacciWithMemoization(n - 1, memo) + fibonacciWithMemoization(n - 2, memo);
    return memo[n];
  }
}