import { getSteps } from '../src/task/steps';

test('getSteps', () => {
  expect(getSteps(2)).toBe(2);
  expect(getSteps(3)).toBe(4);
  expect(getSteps(4)).toBe(7);
});