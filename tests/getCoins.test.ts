import { getCoins } from '../src/task/coins';

test('getSteps', () => {
  expect(getCoins(10)).toBe(4);
  expect(getCoins(15)).toBe(6);
});