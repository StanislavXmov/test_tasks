export class TreeNode {
  val: number
  left: TreeNode | null
  right: TreeNode | null
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
  }
}

export function isSymmetric(root: TreeNode | null): boolean {
  let left = root?.left;
  let right = root?.right;
  let result = true; 

  const check = (l: TreeNode | null | undefined, r: TreeNode | null | undefined) => {
    if (!l && !r) {
      return;
    } else if (!l && r) {
      result = false;
      return;
    } else if (!r && l) {
      result = false;
      return;
    } else if (l?.val !== r?.val) {
      result = false;
      return;
    }
    check(l?.left, r?.right);
    check(l?.right, r?.left);
  }

  check(left, right);
  return result;
};
