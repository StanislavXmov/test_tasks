export const data = {"gameField":[[0,0,2,1],[0,3,3,0],[0,2,0,0],[0,0,3,0]],"steps":["down","down","right","right","up","right","right","up","right","right","left"]}
export const gameField = data.gameField;
export const steps = data.steps as Direction[];

type Direction = 'down' | 'up' |'left' | 'right';

type Position = {
  x: number;
  y: number;
}

export class Player {
  x: number = 0;
  y: number = 0;
  health: number = 0;
  gameField: number[][];
  log: Position[] = [];
  failure = 0;
  success = 0;

  constructor(startX: number, startY: number, health: number, gameField: number[][]) {
    this.x = startX;
    this.y = startY;
    this.health = health;
    this.gameField = gameField;
    this.log = [];
  }

  getHealth() {
    return this.health;
  }

  decreaseHealth() {
    this.health -= 1;
    if (this.health < 0) {
      this.health = 0;
    }
  }

  increaseHealth() {
    this.health += 1;
    if (this.health > 100) {
      this.health = 100;
    }
  }

  getLog() {
    return this.log;
  }

  increaseSuccess() {
    this.success += 1;
  }

  increaseFailure() {
    this.failure += 1;
  }

  getSuccess() {
    return this.success;
  }

  getFailure() {
    return this.failure;
  }

  getPosition(): Position {
    return {
      x: this.x,
      y: this.y,
    };
  }

  getInfo() {
    return {
      log: this.log,
      position: this.getPosition(),
      health: this.getHealth(),
      success: this.getSuccess(),
      failure: this.getFailure(),
      successGame: this.getSuccess() > this.getFailure(),
    }
  }

  checkStep() {
    const {x, y} = this.getPosition();
    const cell = this.gameField[y][x];

    if (cell === 2) {
      this.decreaseHealth();
      this.increaseFailure();
    } else if (cell === 3) {
      this.increaseHealth();
      this.increaseSuccess();
    } else if (cell === 0) {
      this.increaseSuccess();
    }
  }

  checkMovemenBlocking(x:number, y: number) {
    const minY = 0;
    const minX = 0;
    const maxY = this.gameField.length - 1;
    const maxX = this.gameField[0].length - 1;

    const cell = this.gameField[y][x];
    if (cell === 1) {
      return true;
    }

    if (y < minY) {
      return true;
    }

    if (y > maxY) {
      return true;
    }

    if (x < minX) {
      return true;
    }

    if (x > maxX) {
      return true;
    }

    return false;
  };

  moveUp() {
    if (!this.checkMovemenBlocking(this.x, this.y - 1)) {
      this.y -= 1;
      this.checkStep();
    } else {
      this.increaseFailure();
    }
    this.log.push(this.getPosition());
  }

  moveDown() {
    if (!this.checkMovemenBlocking(this.x, this.y + 1)) {
      this.y += 1;
      this.checkStep();
    } else {
      this.increaseFailure();
    }
    this.log.push(this.getPosition());
  }

  moveLeft() {
    if (!this.checkMovemenBlocking(this.x - 1, this.y)) {
      this.x -= 1;
      this.checkStep();
    } else {
      this.increaseFailure();
    }
    this.log.push(this.getPosition());
  }

  moveRight() {
    if (!this.checkMovemenBlocking(this.x + 1, this.y)) {
      this.x += 1;
      this.checkStep();
    } else {
      this.increaseFailure();
    }
    this.log.push(this.getPosition());
  }

  processSteps(steps: Direction[]) {
    steps.forEach(s => {
      switch (s) {
        case 'down':
          this.moveDown();
          break;
        case 'up':
          this.moveUp();
          break;
        case 'right':
          this.moveRight();
          break;
        case 'left':
          this.moveLeft();
          break;
        default:
          break;
      }
    });
  }
}