type TreeNode = {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
}

export const invertTree = (root: TreeNode | null): TreeNode | null => {
  if (root === null) {
    return null;
  }
  // const temp = invertTree(root.left);
  // root.left = invertTree(root.right);
  // root.right = temp;

  const q: TreeNode[] = [];
  q.push(root);

  while (q.length > 0) {
    let cur = q.shift();
    if (cur) {
      let l = cur.left;
      let r = cur.right;
      cur.left = r;
      cur.right = l;
      if (cur.left) {
        q.push(cur.left);
      }
      if (cur.right) {
        q.push(cur.right);
      }
    }
  }

  return root;
}