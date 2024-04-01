import { numberOfPairs } from '../src/task/numberOfPairs';

test('numberOfPairs', () => {
  expect(numberOfPairs([1,3,2,1,3,2,2])).toStrictEqual([3, 1]);
  expect(numberOfPairs([1,1])).toStrictEqual([1, 0]);
  expect(numberOfPairs([0])).toStrictEqual([0, 1]);
});