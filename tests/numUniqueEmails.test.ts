import { numUniqueEmails } from '../src/task/numUniqueEmails';

const emails1 = ["test.email+alex@leetcode.com","test.e.mail+bob.cathy@leetcode.com","testemail+david@lee.tcode.com"];
const emails2 = ["a@leetcode.com","b@leetcode.com","c@leetcode.com"];


test('numUniqueEmails', () => {
  expect(numUniqueEmails(emails1)).toBe(2);
  expect(numUniqueEmails(emails2)).toBe(3);
});