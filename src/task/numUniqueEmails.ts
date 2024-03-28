export const numUniqueEmails = (emails: string[]): number => {
  const unique: Set<string> = new Set();
  for (let i = 0; i < emails.length; i++) {
    let parts: string[] = emails[i].split('@');
    let username = parts[0].split('+')[0].split('.').join('');
    unique.add(`${username}@${parts[1]}`);
  }

  return unique.size;
}