import { selectionSort } from './algs/selectionSort';
import { bubbleSort } from './algs/bubbleSort';
import { cocktailSort } from './algs/cocktailSort';

console.log('test_tasks');
const arr = new Array(1000).fill(null).map(() => Math.round(Math.random() * 100));
const testArray1 = [...arr];
const testArray2 = [...arr];
const testArray3 = [...arr];


console.time();
// console.log(bubbleSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
console.log(bubbleSort(testArray1));
console.timeEnd();

console.time();
// console.log(cocktailSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
console.log(cocktailSort(testArray2));
console.timeEnd();

console.time();
console.log(selectionSort(testArray3));
// console.log(selectionSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3]));
console.timeEnd();

