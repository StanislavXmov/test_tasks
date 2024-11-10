import { TreeNode } from "./isSymmetric";

export function maxDepth(root: TreeNode | null): number {
  if (!root) {
    return 0;
  }

  const left = root.left;
  const right = root.right;

  return 1 + Math.max(maxDepth(left), maxDepth(right));
};