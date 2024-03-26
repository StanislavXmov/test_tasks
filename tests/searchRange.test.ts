import { searchRange } from '../src/task/searchRange';

test('searchRange', () => {
  expect(searchRange([5,7,8,8,8,8,8,10], 8)).toStrictEqual([2,6]);
  expect(searchRange([5,7,8,8,8,8,8,10], 9)).toStrictEqual([-1,-1]);
});