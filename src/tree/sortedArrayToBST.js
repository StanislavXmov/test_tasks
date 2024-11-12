import { BinaryTreeNode } from "./BinaryTreeNode.js";

export const sortedArrayToBST = (array) => {
  if (!array.length) {
    return null;
  }

  const mid = Math.floor(array.length / 2);

  const root = new BinaryTreeNode(array[mid]);

  root.left = sortedArrayToBST(array.slice(0, mid));
  root.right = sortedArrayToBST(array.slice(mid + 1));

  return root;
};
