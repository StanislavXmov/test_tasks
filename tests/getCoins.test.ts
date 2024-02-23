import { getCoins, toGet } from '../src/task/coins';

test('getCoins', () => {
  expect(getCoins(10)).toBe(4);
  expect(getCoins(15)).toBe(6);
});

test('toGet', () => {
  expect(toGet(160)).toStrictEqual([100, 50, 10]);
  expect(toGet(0)).toBe(-1);
});