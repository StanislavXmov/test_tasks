export function findPoisonedDuration(timeSeries: number[], duration: number): number {
  let counter = 0;
  for (let i = 0; i < timeSeries.length; i++) {
    const t1 = timeSeries[i];
    const t2 = timeSeries[i + 1];

    if (i === timeSeries.length - 1) {
      counter += duration;
      break;
    }

    if (t2 - t1 >= duration) {
      counter += duration;
    } else {
      counter += t2 - t1;
    }
  }

  return counter;
};