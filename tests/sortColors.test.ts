import { sortColors } from '../src/task/sortColors';

test('sortColors', () => {
  const nums = [2,0,2,1,1,0];
  sortColors(nums);
  expect(nums).toStrictEqual([0,0,1,1,2,2]);
});