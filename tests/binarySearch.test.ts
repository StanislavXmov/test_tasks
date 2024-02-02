import { binarySearch } from '../src/algs/binarySearch';

test('quickSort', () => {
  expect(binarySearch([1, 5, 7, 9, 13, 14, 21], 13)).toStrictEqual(4);
});