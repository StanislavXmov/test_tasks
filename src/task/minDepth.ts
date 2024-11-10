import { TreeNode } from "./isSymmetric";

export function minDepth(root: TreeNode | null): number {
  if (root === null) {
    return 0;
  }
  const leftChild = root.left;
  const rightChild = root.right;

  if (leftChild === null) {
    return 1 + minDepth(rightChild);
  }

  if (rightChild === null) {
    return 1 + minDepth(leftChild);
  }
  return 1 + Math.min(minDepth(leftChild), minDepth(rightChild));
};

// function minDepth(root: TreeNode | null): number {
//   if (!root) {
//     return 0;
//   }
//   let depth = 1;

//   const check = (r: TreeNode | null | undefined, d: number) => {
//     if (!r?.left && !r?.right) {
//       if (depth === 1) {
//         depth = d;
//       } else {
//         depth = Math.min(depth, d);
//       }
//       return;
//     }
//     r.left ? check(r.left, d + 1) : null;
//     r.right ? check(r.right, d + 1) : null;
//   }

//   check(root, depth);
//   return depth;
// };