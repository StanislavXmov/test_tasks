class Solution:
  @staticmethod
  def fib(n: int) -> int:
    f0 = 0
    f1 = 1

    if n == 0:
      return 0
    
    if n == 1:
      return 1

    while n > 1:
      (f1, f0) = (f0 + f1, f1)
      n -= 1
    
    return f1
  
print(Solution.fib(5))
