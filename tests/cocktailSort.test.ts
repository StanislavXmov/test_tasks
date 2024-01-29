import { cocktailSort } from '../src/algs/cocktailSort';

test('cocktailSort', () => {
  expect(cocktailSort([3, 2, 4, 1, 5, 9, 1, 6, 5, 3, 3])).toStrictEqual([1, 1, 2, 3, 3, 3, 4, 5, 5, 6, 9]);
});