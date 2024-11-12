import { sortedArrayToBST } from "./sortedArrayToBST";

export function findAllPath(items) {
  const tree = sortedArrayToBST(items);
  const list = [];

  const traverse = (node, path) => {
    if (node && !node.left && !node.right) {
      list.push([...path, node.value]);
    }
    if (node != null) {
      traverse(node.left, [...path, node.value]);
      traverse(node.right, [...path, node.value]);
    }
  }

  traverse(tree, []);

  return list;
}