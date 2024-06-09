from typing import List

class Solution:
  def minCostClimbingStairs(self, cost: List[int]) -> int:
    n = len(cost)
    dp = [0] * (n + 1)
    dp[0] = cost[0]
    dp[1] = cost[1]

    for i in range(2, n):
      dp[i] = min(dp[i - 1], dp[i - 2]) + cost[i]

    return min(dp[n - 1], dp[n - 2])
  
print(Solution.minCostClimbingStairs(Solution, [10, 15, 20]))
print(Solution.minCostClimbingStairs(Solution, [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))