import { decode } from '../src/task/decode';

test('decode', () => {
  expect(decode('IIDDIDID')).toEqual(125437698);
  expect(decode('IIII')).toEqual(12345);
  expect(decode('DDDD')).toEqual(54321);
  expect(decode('IDIDII')).toEqual(1325467);
});