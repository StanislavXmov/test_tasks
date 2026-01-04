from typing import List


def threeSum(nums: List[int]) -> List[List[int]]:
  nums.sort()
  result = []
  n = len(nums)
  for i in range(len(nums) - 2):
    if i > 0 and nums[i] == nums[i - 1]:
      continue

    if nums[i] > 0:
      break
    left = i + 1
    right = n - 1
    target = -nums[i]
    while left < right:
      if nums[left] + nums[right] == target:
        result.append([nums[i], nums[left], nums[right]])
        left += 1
        right -= 1
        while left < right and nums[left] == nums[left - 1]:
          left += 1
        while left < right and nums[right] == nums[right + 1]:
          right -= 1
      elif nums[left] + nums[right] < target:
        left += 1
      else:
        right -= 1

  return result
# [-4, -1, -1, 0, 1, 2]
print(threeSum([-1, 0, 1, 2, -1, -4]))