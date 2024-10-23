export function canPlaceFlowers(flowerbed: number[], n: number): boolean {
  console.log(flowerbed);
  
  let counter = n;
  for (let i = 0; i < flowerbed.length; i++) {
    const x0 = flowerbed[i - 1];
    const x1 = flowerbed[i];
    const x2 = flowerbed[i + 1];

    console.log({x0,x1,x2,i});
    
    
    if (x1 === 1) {
      continue;
    } else if (x0 === 1) {
      continue;
    } else if (x2 === 1) {
      continue;
    } else {
      if (counter === 0) {
        break;
      }
      flowerbed[i] = 1;
      counter--;
    }
  }

  return counter === 0;
};