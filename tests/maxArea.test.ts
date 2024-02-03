import { maxArea, maxArea2 } from '../src/task/maxArea';

test('maxArea', () => {
  expect(maxArea([1,8,6,2,5,4,8,3,7])).toStrictEqual(49);
  expect(maxArea([1,1])).toStrictEqual(1);
});

test('maxArea2', () => {
  expect(maxArea2([1,8,6,2,5,4,8,3,7])).toStrictEqual(49);
  expect(maxArea2([1,1])).toStrictEqual(1);
});