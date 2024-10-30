export function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
  const parent: number[] = [];

  const initializeParent = (n: number): void => {
    for (let i = 0; i < n; i++) {
      parent[i] = i;
    }
  }

  initializeParent(n);

  const find =(x: number): number => {
    if (parent[x] !== x) {
      parent[x] = find(parent[x]);
    }
    return parent[x];
  }

  const unionSet = (x: number, y: number): void => {
    const rootX = find(x);
    const rootY = find(y);

    if (rootX !== rootY) {
      parent[rootX] = rootY;
    }
  }

  for (const edge of edges) {
    unionSet(find(edge[0]), find(edge[1]));
  }

  return find(source) === find(destination);
};
