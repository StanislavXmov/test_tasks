import { decode } from '../src/task/decodeRLE';

test('decodeRLE', () => {
  expect(decode('3a4b3c4d3e2f')).toBe('aaabbbbcccddddeeeff');
  expect(decode('3a12b3c')).toBe('aaabbbbbbbbbbbbccc');
  expect(decode('3ab3c')).toBe('aaabccc');
});