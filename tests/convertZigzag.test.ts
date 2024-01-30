import { convertZigzag, convertZigzag2 } from '../src/task/convertZigzag';

test('convertZigzag', () => {
  expect(convertZigzag('PAYPALISHIRING', 3)).toStrictEqual('PAHNAPLSIIGYIR');
  expect(convertZigzag('PAYPALISHIRING', 4)).toStrictEqual('PINALSIGYAHRPI');
  expect(convertZigzag('A', 1)).toStrictEqual('A');
});

test('convertZigzag2', () => {
  expect(convertZigzag2('PAYPALISHIRING', 3)).toStrictEqual('PAHNAPLSIIGYIR');
  expect(convertZigzag2('PAYPALISHIRING', 4)).toStrictEqual('PINALSIGYAHRPI');
  expect(convertZigzag2('A', 1)).toStrictEqual('A');
});