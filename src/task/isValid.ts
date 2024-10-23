export function isValid(word: string): boolean {
  if (word.length < 3) {
    return false;
  }

  let isVowel = false;
  let isConsonant = false;

  for (let i = 0; i < word.length; i++) {
    const s = word[i];
    if (!s.match(/[a-zA-z0-9]/gi)) {
      return false;
    }
    
    if (!isVowel && s.match(/[aeiou]/gi)) {
      isVowel = true;
    }
    if (!isConsonant && !s.match(/[aeiou0-9]/gi)) {
      isConsonant = true;
    }
  }

  return isVowel && isConsonant;
};