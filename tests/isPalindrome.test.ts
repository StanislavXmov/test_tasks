import { isPalindrome, isPalindrome2 } from '../src/task/isPalindrome';

test('isPalindrome', () => {
  expect(isPalindrome(121)).toBeTruthy();
  expect(isPalindrome(-121)).toBeFalsy();
  expect(isPalindrome(10)).toBeFalsy();
});

test('isPalindrome2', () => {
  expect(isPalindrome2(121)).toBeTruthy();
  expect(isPalindrome2(-121)).toBeFalsy();
  expect(isPalindrome2(10)).toBeFalsy();
});