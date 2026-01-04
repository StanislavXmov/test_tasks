# def lengthOfLongestSubstring(s: str) -> int:
#   if len(s) == 1:
#     return 1
#   length = 0
#   for i in range(len(s)):
#     for j in range(i+1, len(s)):
#       if len(s[i:j]) == 1:
#         length = max(len(s[i:j]), length)
#       if s[j] in s[i:j]:
#         break
#       length = max(len(s[i:j + 1]), length)     
#   return length
      
def lengthOfLongestSubstring(s: str) -> int:
  char_set = set()
  left = 0
  max_len = 0

  for right in range(len(s)):
    while s[right] in char_set:
      char_set.remove(s[left])
      left += 1
    char_set.add(s[right])
    max_len = max(max_len, right - left + 1)
  
  return max_len


print(lengthOfLongestSubstring("pwwkew"))
print(lengthOfLongestSubstring("au"))
print(lengthOfLongestSubstring("bbbbb"))