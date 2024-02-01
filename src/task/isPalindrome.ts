export const isPalindrome = (n: number) => {
  if (n < 0) {
    return false;
  }

  const obj: Record<string, number> = {};
  let d = 10;

  while (n % d !== n) {
    obj[d / 10] = Math.trunc((n % d) / d * 10);
    d *= 10;
  }

  obj[d / 10] = Math.trunc((n % d) / d * 10);
  
  const numbersArray = Object.keys(obj);

  for (let i = 0; i < numbersArray.length; i++) {
    const n1 = numbersArray[i];
    const n2 = numbersArray[numbersArray.length - 1 - i];
    if (n1 === n2) {
      break;
    }

    if (obj[n1] !== obj[n2]) {
      return false;
    }
  }
  
  return true;
}

export const isPalindrome2 = (n: number) => {
  if (n < 0 || n % 10 == 0 && n != 0)  {
    return false;
  }
  let t = 0;
  while (n > t) {
      t = t * 10 + n % 10;
      n = Math.floor(n / 10);
  }
  return t == n || n == Math.floor(t / 10);
};