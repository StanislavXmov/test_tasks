export function distMoney(money: number, children: number): number {
  let count = 0;
  if (money < children) {
    return -1;
  }
  
  const childrenArray = new Array(children).fill(1);
  let m = money - children;

  for (let i = 0; i < childrenArray.length; i++) {
    if (m >= 7) {
      if (childrenArray.length - 1 === i) {
        childrenArray[i]+= m;
        if (childrenArray[i] === 8) {
          count++;
        }
      } else {
        childrenArray[i]+= 7;
        m -= 7;
        count++;
      }
    } else {
      childrenArray[i]+= m;
      if (childrenArray[i] === 4) {
        if (childrenArray.length - 1 > i) {
          childrenArray[i]-= 1;
          childrenArray[i + 1]+= 1;
        } else {
          if (childrenArray[i - 1] === 8) {
            count--;
          }
          childrenArray[i]-= 1;
          childrenArray[i - 1]+= 1;
        }
      }
    }
  }
  return count;
};