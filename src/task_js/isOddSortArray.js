function solution(arr) {
  const isOdd = (n) => n % 2 === 1;
  let oddIdx = 0;

  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (isOdd(n)) {
      arr[i] = arr[oddIdx];
      arr[oddIdx] = n;
      oddIdx++;
    }
    
  }
  return arr;
}

// const arr = [3, 1, 12, 7, 8, 1, 6, 4];
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const arr = [1, 2, 3, 5, 7, 9];
console.log(solution(arr));
