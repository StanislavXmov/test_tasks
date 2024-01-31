// import { selectionSort } from './algs/selectionSort';
// import { bubbleSort } from './algs/bubbleSort';
// import { cocktailSort } from './algs/cocktailSort';
import { insertionSort } from './algs/insertionSort';
import { mergeSort } from './algs/mergeSort';
// import { twoSum, twoSum2 } from './task/twoSum';
// import { convertZigzag, convertZigzag2 } from './task/convertZigzag';

// console.log('test_tasks');
// const arr = new Array(10000).fill(null).map(() => Math.round(Math.random() * 100));
// const testArray1 = [...arr];
// const testArray2 = [...arr];
// const testArray3 = [...arr];


// console.time();
// // console.log(bubbleSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
// console.log(bubbleSort(testArray1));
// console.timeEnd();

// console.time();
// // console.log(cocktailSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
// console.log(cocktailSort(testArray2));
// console.timeEnd();

// console.time();
// console.log(selectionSort(testArray3));
// // console.log(selectionSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
// console.timeEnd();

// console.time();
// // console.log(insertionSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
// console.log(insertionSort([23, 1, 10, 5, 2]));
// // console.log(insertionSort(testArray1));
// console.timeEnd();

console.time();
console.log(mergeSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
// console.log(mergeSort([23, 1, 10, 5, 2]));
// console.log(mergeSort(testArray1));
console.timeEnd();

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum2([3,2,4], 6));

// console.log(convertZigzag('PAYPALISHIRING', 3));
// console.log(convertZigzag('PAYPALISHIRING', 4));
// console.log(convertZigzag('A', 1));

// console.log(convertZigzag2('PAYPALISHIRING', 3));
// console.log(convertZigzag2('PAYPALISHIRING', 4));
// console.log(convertZigzag2('A', 1));

