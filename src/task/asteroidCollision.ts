export function asteroidCollision(asteroids: number[]): number[] {
  console.log(asteroids);
  const newAsteroids: number[] = [];

  const collision = (a: number) => {
    let i = newAsteroids.length - 1;
    let isCollision = false;
    console.log("i", i, newAsteroids);
    
    if (i < 0) {
      newAsteroids.push(a);
      return;
    }

    while (i >= 0) {
      console.log("c", newAsteroids[i], a, "i", i);
      if (newAsteroids[i] < 0) {
        newAsteroids.push(a);
        return;
      } else if (newAsteroids[i] + a > 0) {
        if (isCollision) {
          newAsteroids.splice(i + 1, 1);
        }
        return;
      } else if (newAsteroids[i] + a === 0) {
        console.log("case", newAsteroids.length);
        
        if (isCollision) {
          newAsteroids.splice(i, newAsteroids.length);
        } else {
          newAsteroids.splice(i, 1);
        }
        return;
      } else {
        if (isCollision) {
          newAsteroids.splice(i + 1, 1);
        }
        newAsteroids[i] = a;
        isCollision = true;
        console.log(newAsteroids);
        if (newAsteroids[i - 1] < 0) {
          return;
        }
        
      }
      i--;
    }
  }

  for (let i = 0; i < asteroids.length; i++) {
    const a1 = asteroids[i];
    console.log(a1);
    
    if (a1 > 0) {
      newAsteroids.push(a1);
    } else {
      // run
      collision(a1);
    }
  }
  return newAsteroids;
};

// const asteroids = [5,10,-5];
// const asteroids = [10,2,-5];
// const asteroids = [8,-8];
// const asteroids = [10,2,-5,-6];
// const asteroids = [-2,-1,1,2];
// const asteroids = [-2,1,-1,-2];
// const asteroids = [-2,-2,-2,-2];
// const asteroids = [1,-2,-2,-2];
// const asteroids = [-2,-2,1,-2];
// const asteroids = [-2,1,1,-2]
// const asteroids = [-2,2,1,-2];
const asteroids = [2,-1,1,-2];

console.log(asteroidCollision(asteroids));