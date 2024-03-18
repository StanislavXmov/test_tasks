// import { selectionSort } from './algs/selectionSort';
// import { bubbleSort } from './algs/bubbleSort';
// import { cocktailSort } from './algs/cocktailSort';
// import { insertionSort } from './algs/insertionSort';
// import { mergeSort } from './algs/mergeSort';
// import { twoSum, twoSum2 } from './task/twoSum';
// import { convertZigzag, convertZigzag2 } from './task/convertZigzag';
// import { isPalindrome, isPalindrome2 } from './task/isPalindrome';
// import { quickSort } from './algs/quickSort';
// import { binarySearch } from './algs/binarySearch';
// import { maxArea, maxArea2 } from './task/maxArea';
// import { romanToInt } from './task/romanToInt';
// import { calculateStatistics, filmsData } from './task/calculateStatistics';
// import {Player, data, gameField, steps} from './task/player';
// import { TreeNode, lowestCommonAncestor } from "./task/lowestCommonAncestor";

import { invertTree } from "./algs/invertTree";

// import { decode } from './task/decode';
// import { getCoins, toGet } from './task/coins';

// import {fibonacci, fibonacciWithMemoization} from './task/fibonacciWithMemoization';
// import { decode } from './task/decodeRLE';
// import { getPath } from './task/getPath';
// import { lcs } from './task/lcs';

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

// console.time();
// console.log(mergeSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
// // console.log(mergeSort([23, 1, 10, 5, 2]));
// // console.log(mergeSort(testArray1));
// console.timeEnd();

// console.time();
// console.log(quickSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
// // // console.log(mergeSort([23, 1, 10, 5, 2]));
// // console.log(quickSort(testArray1));
// console.timeEnd();

// console.log(binarySearch([1, 5, 7, 9, 13, 14, 21], 7));

// console.log(twoSum([2,7,11,15], 9));
// console.log(twoSum2([3,2,4], 6));

// console.log(convertZigzag('PAYPALISHIRING', 3));
// console.log(convertZigzag('PAYPALISHIRING', 4));
// console.log(convertZigzag('A', 1));

// console.log(convertZigzag2('PAYPALISHIRING', 3));
// console.log(convertZigzag2('PAYPALISHIRING', 4));
// console.log(convertZigzag2('A', 1));

// console.log(isPalindrome(121));
// console.log(isPalindrome2(121));

// console.log(maxArea([1,8,6,2,5,4,8,3,7]));
// console.log(maxArea([1,1]));

// console.log(maxArea2([1,8,6,2,5,4,8,3,7]));
// console.log(maxArea2([1,1]));

// console.log(romanToInt('III'));
// console.log(romanToInt('LVIII'));
// console.log(romanToInt('MCMXCIV'));

// console.log(calculateStatistics(filmsData));
// const player1 = new Player(0, 0, 100, gameField);
// player1.processSteps(steps);
// const result = player1.getInfo();

// console.log(result);

// console.time();
// console.log(fibonacci(30));
// console.timeEnd();

// console.time();
// console.log(fibonacciWithMemoization(5));
// console.timeEnd();

// const root = new TreeNode(
//   6, 
//   new TreeNode(
//     2, 
//     new TreeNode(0, null, null),
//     new TreeNode(4, 
//       new TreeNode(3, null, null),
//       new TreeNode(5, null, null)
//     )
//   ), 
//   new TreeNode(
//     8, 
//     new TreeNode(7, null, null), 
//     new TreeNode(9, null, null)
//   )
// );

// console.log(root, lowestCommonAncestor(root, new TreeNode(2, null, null), new TreeNode(8, null, null))?.val);
// console.log(toGet(30));
// console.log(decode('3a12b3c'));

// const s1 = 'abacaba';
// const s2 = 'abcabc';

// console.log(lcs(s1, s2));
// const maze = [
//   [1, 1, 1, 1],
//   [0, 1, 1, 1],
//   [1, 1, 1, 1],
//   [0, 0, 1, 1]
// ];
// console.log(getPath(maze));

// const root = {
//   val: 4,
//   left: {val: 2, left: {
//     val: 1, left: null, right: null,
//   }, right: {
//     val: 3, left: null, right: null,
//   }},
//   right: {val: 7, left: {
//     val: 6, left: null, right: null,
//   }, right: {
//     val: 9, left: null, right: null,
//   }},
// }
// console.log(root);


// invertTree(root);
// console.log(root);


