import { TreeNode } from "./isSymmetric";

export function isSubtree(root: TreeNode | null, subRoot: TreeNode | null): boolean {
  const isIdentical = (root: TreeNode | null, subRoot: TreeNode | null): boolean => {
    if (!root && !subRoot) {
      return true;
    }
  
    if (!root || !subRoot || root.val !== subRoot.val) {
      return false;
    }
  
    return isIdentical(root.left, subRoot.left) && isIdentical(root.right, subRoot.right);
  };

  if (!root) {
    return false;
  }

  return isIdentical(root, subRoot) || isSubtree(root.left, subRoot) || isSubtree(root.right, subRoot);
};
