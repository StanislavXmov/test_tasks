export type Listeners = {
  [key: `on${string}`]: (value: unknown) => void
}

export type Pick<T, K extends keyof T> = {
  [P in K]: T[P];
};

export const sanitize = <T extends object, K extends keyof T>(obj: T, keys: Array<K>) => {
  const entries = Object.entries(obj).filter(([key]) => !keys.includes(key as K));
  return Object.fromEntries(entries) as Omit<T, K>;
};

export type Partial<T> = {
  [P in keyof T]?: T[P];
};

export type Required<T> = {
  [P in keyof T]-?: T[P];
};

export type Readonly<T> = {
  readonly [P in keyof T]: T[P];
};

export type Mutable<T> = {
  -readonly [P in keyof T]: T[P];
};