from typing import List

def subarraySum( nums: List[int], k: int) -> int:
  prefix_sum = {0: 1}
  current_sum = 0
  answer = 0
  for num in nums:
    current_sum += num
    n = current_sum - k
    if n in prefix_sum:
      answer += prefix_sum[n]
    prefix_sum[current_sum] = prefix_sum.get(current_sum, 0) + 1
  return answer


print(subarraySum([1, 1, 1], 2))
print(subarraySum([1, 2, 3], 3))
print(subarraySum([1, -1, 1, -1, 1], 0))