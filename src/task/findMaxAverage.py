from typing import List

def findMaxAverage(nums: List[int], k: int) -> float:
  current_sum = sum(nums[:k])
  max_value = current_sum

  for i in range(k, len(nums)):
    current_sum += nums[i] - nums[i - k]
    max_value = max(max_value, current_sum)
  return max_value / k