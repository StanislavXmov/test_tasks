import { decodeSequence } from '../src/task/decodeSequence';

test('decodeSequence', () => {
  expect(decodeSequence('a1(bc)4(c2(d)e)f10(h)')).toStrictEqual('abccddecddecddecddefhhhhhhhhhh');
  expect(decodeSequence('2(a)1(b)c4(de)f')).toStrictEqual('aabcdedededef');
  expect(decodeSequence('2(a2(b)c)')).toStrictEqual('abbcabbc');
});