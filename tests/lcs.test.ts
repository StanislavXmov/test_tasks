import { lcs } from '../src/task/lcs';

test('lcs', () => {
  expect(lcs('abacaba', 'abcabc')).toBe('abcab');
  expect(lcs('12345', '51324')).toBe('134');
});