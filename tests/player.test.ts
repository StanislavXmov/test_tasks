import {Player, gameField, steps} from '../src/task/player';
const resultData = {"log":[{"x":0,"y":1},{"x":0,"y":2},{"x":1,"y":2},{"x":2,"y":2},{"x":2,"y":1},{"x":3,"y":1},{"x":3,"y":1},{"x":3,"y":1},{"x":3,"y":1},{"x":3,"y":1},{"x":2,"y":1}],"position":{"x":2,"y":1},"health":100,"success":6,"failure":5,"successGame":true};

test('calculateStatistics', () => {
  const player1 = new Player(0, 0, 100, gameField);
  player1.processSteps(steps);
  const result = player1.getInfo();
  expect(result).toStrictEqual(resultData);
});