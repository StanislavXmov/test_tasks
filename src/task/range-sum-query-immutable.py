from typing import List


class NumArray:
    def __init__(self, nums: List[int]):
        self.nums = []
        for i in range(len(nums)):
            if i == 0:
                self.nums.append(nums[i])
            if i > 0:
                self.nums.append(nums[i] + self.nums[i - 1])

    def sumRange(self, left: int, right: int) -> int:
        return self.nums[right] - self.nums[left - 1] if left > 0 else self.nums[right]

obj = NumArray([-2, 0, 3, -5, 2, -1])
param_1 = obj.sumRange(0, 5)
print(param_1)

