import { rotateImage } from '../src/task/rotateImage';

const m = [[1,2,3], [4,5,6], [7,8,9]];
const rotatedM = [[7,4,1], [8,5,2], [9,6,3]];

test('rotateImage', () => {
  rotateImage(m);
  expect(m).toStrictEqual(rotatedM);
});