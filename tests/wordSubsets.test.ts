import { wordSubsets } from '../src/task/wordSubsets';

test('wordSubsets', () => {
  const words1 = ["amazon","apple","facebook","google","leetcode"];
  const words2 = ["e","oo"];
  expect(wordSubsets(words1, words2)).toStrictEqual(['facebook', 'google']);
});