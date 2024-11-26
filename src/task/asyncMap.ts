const asyncMap = async <T>(array: Promise<T>[], cb: (item: T, index: number) => T) => {
  const data = await Promise.all(array);
  return data.map((d, i) => cb(d, i));
}