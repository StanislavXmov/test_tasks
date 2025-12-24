def findMaxLength(nums):
    nums = [1 if num == 1 else -1 for num in nums]
    
    sum_to_index = {0: -1}
    prefix_sum = 0
    max_len = 0
    
    for i, num in enumerate(nums):
        prefix_sum += num
        if prefix_sum in sum_to_index:
            length = i - sum_to_index[prefix_sum]
            max_len = max(length, max_len)
        else: 
            sum_to_index[prefix_sum] = i
    return max_len

print(findMaxLength([0,1,1,1, 0, 0]))