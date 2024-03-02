import { validateBrackets } from '../src/task/brackets';

test('decodeRLE', () => {
  expect(validateBrackets('([]<{[()]}>[])')).toBe(true);
  expect(validateBrackets('([)]')).toBe(false);
});