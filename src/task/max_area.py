from typing import List


def maxArea(height: List[int]) -> int:
  result = 0
  left = 0
  right = len(height) - 1
  while left < right:
    if height[left] < height[right]:
      result = max(result, height[left] * (right - left))
      left += 1
    else:
      result = max(result, height[right] * (right - left))
      right -= 1
  return result

print(maxArea([1,8,6,2,5,4,8,3,7]))
print(maxArea([1,1]))