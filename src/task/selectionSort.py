def selectionSort(arr):
  newArr = []
  copiedArr = list(arr)
  for i in range(len(arr)):
    smallest = findSmallest(copiedArr)
    newArr.append(copiedArr.pop(smallest))
  return newArr

def findSmallest(arr):
  smallest = arr[0]
  smallestIndex = 0
  for i in range(1, len(arr)):
    if arr[i] < smallest:
      smallest = arr[i]
      smallestIndex = i
  return smallestIndex

arr = [5, 3, 6, 2, 10]
print(selectionSort(arr))