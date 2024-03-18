import { getPath } from '../src/task/getPath';

const maze = [
  [1, 1, 1, 1],
  [0, 1, 1, 1],
  [1, 1, 1, 1],
  [0, 0, 1, 1]
];

const path = [
  [0,0],
  [0,1],
  [1,1],
  [2,1],
  [2,2],
  [3,2],
  [3,3]
];

test('getPath', () => {
  expect(getPath(maze)).toStrictEqual(path);
});