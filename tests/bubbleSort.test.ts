import { bubbleSort } from '../src/algs/bubbleSort';

test('bubbleSort', () => {
  expect(bubbleSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3])).toStrictEqual([1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 9]);
});